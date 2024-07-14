import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import { getData } from '../../api/index';
import { BASE_URL, TABS } from '@/constants/commonConstants';
import useLocalStorage from '../../hooks/useLocalStorage';
import Routes from '../../routes/Routes';
import { useQueryParams } from '../../hooks/useQueryParams';
import { Result, Tab } from '@/types';

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

        const urlSearchParams = new URLSearchParams(queryParams);
        const result = await getData(`${BASE_URL}${path}?${urlSearchParams.toString()}`);

        setLoading(false);
        return { data: result.results, count: result.count };
    };

    useEffect(() => {
        fetchData(selectedTab.url, { page: selectedPage }).then((result) => {
            setResult(result);
        });
    }, [selectedTab.url, selectedPage]);

    const changeTab = async (tabName: string) => {
        const tabToSet = TABS.find((tab) => tab.name === tabName) || selectedTab;

        const result = await fetchData(tabToSet.url, { searchTerm });
        setResult(result);

        setSelectedTab(tabToSet);
    };

    const onClickPagination = async (page: number) => {
        const result = await fetchData(selectedTab.url, { searchTerm, page });

        setResult(result);
    };

    const handleSearch = async (searchTerm: string) => {
        setSearchTerm(searchTerm);
        const result = await fetchData(selectedTab.url, { searchTerm });

        setResult(result);
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
