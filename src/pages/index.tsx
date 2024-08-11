import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from '../styles/App.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { useGetItemsQuery } from '../store/apiSlice';
import { setLoading } from '../store/uiSlice';
import { TABS } from '@/constants/commonConstants';
import useLocalStorage from '../hooks/useLocalStorage';
import { useQueryParams } from '../hooks/useQueryParams';
import { Tab } from '@/types';
import { useTheme } from '../context/ThemeProvider';
import SelectedItemsFlyout from '../components/SelectedItemsFlyout/SelectedItemsFlyout';
import { ITEMS_PER_PAGE_COUNT } from '@/constants/commonConstants';
import HeaderButtons from '@/components/HeaderButtons';
import Search from '@/components/Search';
import List from '@/components/List';
import Pagination from '@/components/Pagination';
import Details from './details';
import '../styles/App.module.css';

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

    const router = useRouter();
    const itemId = router.query.details;
    const backdropStyles = itemId ? { opacity: 0.2 } : {};

    return (
        <div className={`${styles.hero} ${theme === 'dark' ? styles.dark : styles.light}`}>
            <div className={styles.themeSelector}>
                <button onClick={() => handleThemeChange('light')}>Light Theme</button>
                <button onClick={() => handleThemeChange('dark')}>Dark Theme</button>
            </div>
            <div className={styles.container}>
                <div className={styles.content}>
                    <div
                        style={{ position: 'relative' }}
                        onClick={() => {
                            if (!itemId) return;
                            router.push({
                                pathname: router.pathname,
                                query: { ...router.query, page: selectedPage }, // Retain existing query parameters and add/update the `page` parameter
                            });
                        }}
                    >
                        <div style={backdropStyles}>
                            <Search searchTerm={searchTerm} onSearch={handleSearch} />
                            <div className={styles.content}>
                                <HeaderButtons
                                    selectedTabName={selectedTab.name}
                                    action={changeTab}
                                />
                                <List data={result ? result.results : []} loading={loading} />
                                <Pagination
                                    pageCount={
                                        result ? Math.ceil(result.count / ITEMS_PER_PAGE_COUNT) : 0
                                    }
                                />
                            </div>
                        </div>
                        {itemId && (
                            <Details
                                selectedTabPath={selectedTab.url}
                                itemId={Number(itemId)}
                                selectedPage={selectedPage}
                            />
                        )}
                    </div>
                </div>
                <SelectedItemsFlyout />
            </div>
        </div>
    );
};

export default App;
