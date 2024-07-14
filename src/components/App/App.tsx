import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import { getData } from '../../api/index';
import { BASE_URL } from '@/constants/commonConstants';
import useLocalStorage from '../../hooks/useLocalStorage';
import Routes from '../../routes/Routes';
import { useQueryParams } from '../../hooks/useSelectedPage';
import { Result, Tab } from '@/types';
import { TABS } from '@/constants/commonConstants';

const App: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [result, setResult] = useState<Result>({ count: 0, data: [] });
    const [selectedTab, setSelectedTab] = useState<Tab>({ name: 'People', url: '/people' });
    const [searchTerm, setSearchTerm] = useLocalStorage<string>('searchTerm', '');

    const { getSelectedPage } = useQueryParams();
    const selectedPage = getSelectedPage();

    const fetchData = async (path: string, options?: { searchTerm?: string; page?: number }) => {
        setLoading(true);
        const { searchTerm, page } = options || {};

        const queryParams: Record<string, string> = {};
        if (searchTerm) queryParams['search'] = searchTerm;
        if (page) queryParams['page'] = String(page);

        const searchParams = new URLSearchParams(queryParams);
        const result = await getData(`${BASE_URL}${path}?${searchParams.toString()}`);

        setLoading(false);

        return result;
    };

    useEffect(() => {
        fetchData(selectedTab.url, { page: selectedPage }).then((result) => {
            setResult({ data: result.results, count: result.count });
        });
    }, [selectedTab.url, selectedPage]);

    const changeTab = async (tabName: string) => {
        const tabToSet = TABS.find((tab) => tab.name === tabName) || selectedTab;

        const result = await fetchData(tabToSet.url, { searchTerm });
        setResult({ data: result.results, count: result.count });

        setSelectedTab(tabToSet);
    };

    const onClickPagination = async (page: number) => {
        await fetchData(selectedTab.url, { searchTerm, page });
    };

    const handleSearch = async (searchTerm: string) => {
        setSearchTerm(searchTerm);
        await fetchData(selectedTab.url, { searchTerm });
    };

    return (
        <div className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <Routes
                        selectedTab={selectedTab}
                        result={result}
                        loading={loading}
                        searchTerm={searchTerm}
                        handleSearch={handleSearch}
                        headerBtnAction={changeTab}
                        onClickPagination={onClickPagination}
                    />
                </div>
            </div>
        </div>
    );
};

export default App;
