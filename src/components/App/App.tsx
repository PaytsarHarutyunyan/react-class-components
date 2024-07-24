import React, { useEffect } from 'react';
import styles from './App.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store';
import { useGetItemsQuery } from '../../store/apiSlice';
import { setLoading } from '../../store/uiSlice';
import { TABS } from '@/constants/commonConstants';
import useLocalStorage from '../../hooks/useLocalStorage';
import Routes from '../../routes/Routes';
import { useQueryParams } from '../../hooks/useQueryParams';
import { Tab } from '@/types';
import { useTheme } from '../../context/ThemeProvider';
import SelectedItemsFlyout from '../SelectedItemsFlyout/SelectedItemsFlyout';

const App: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const loading = useSelector((state: RootState) => state.ui.loading);
    const [searchTerm, setSearchTerm] = useLocalStorage<string>('searchTerm', '');
    const { getSelectedPage } = useQueryParams();
    const selectedPage = getSelectedPage();
    const [selectedTab, setSelectedTab] = React.useState<Tab>({ name: 'People', url: '/people' });
    const { data: result, isFetching } = useGetItemsQuery({
        path: selectedTab.url,
        searchTerm,
        page: selectedPage,
    });
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        dispatch(setLoading(isFetching));
    }, [isFetching, dispatch]);

    const changeTab = async (tabName: string) => {
        const tabToSet = TABS.find((tab) => tab.name === tabName) || selectedTab;
        setSelectedTab(tabToSet);
    };

    const handleSearch = async (term: string) => {
        setSearchTerm(term);
    };

    const handleThemeChange = (newTheme: 'light' | 'dark') => {
        setTheme(newTheme);
    };

    return (
        <div className={`${styles.hero} ${theme === 'dark' ? styles.dark : styles.light}`}>
            <div className={styles.themeSelector}>
                <button onClick={() => handleThemeChange('light')}>Light Theme</button>
                <button onClick={() => handleThemeChange('dark')}>Dark Theme</button>
            </div>
            <div className={styles.container}>
                <div className={styles.content}>
                    <Routes
                        selectedTab={selectedTab}
                        result={result}
                        loading={loading}
                        searchTerm={searchTerm}
                        handleSearch={handleSearch}
                        headerBtnAction={changeTab}
                    />
                </div>
                <SelectedItemsFlyout />
            </div>
        </div>
    );
};

export default App;
