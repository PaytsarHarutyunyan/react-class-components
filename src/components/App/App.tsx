import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styles from './App.module.css';
import { getData } from '../../api/index';
import { BASE_URL } from '../../constants/index';
import useLocalStorage from '../../hooks/useLocalStorage';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import Routes from '../../routes/Routes';

interface Tab {
    name: string;
    url: string;
}

interface Result {
    count: number;
    data: { name: string }[];
}

const App: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);
    const [result, setResult] = useState<Result>({ count: 0, data: [] });
    const [selectedPage, setSelectedPage] = useState<number>(1);
    const [perPageCount] = useState<number>(10);
    const [selectedTab, setSelectedTab] = useState<Tab>({ name: 'People', url: '/people' });
    const [tabs] = useState<Tab[]>([
        { name: 'People', url: '/people' },
        { name: 'Planets', url: '/planets' },
        { name: 'Species', url: '/species' },
        { name: 'Starships', url: '/starships' },
        { name: 'Vehicles', url: '/vehicles' },
    ]);
    const [singleResult, setSingleResult] = useState<boolean | { [key: string]: string } | null>(
        null,
    );
    const [searchTerm, setSearchTerm] = useLocalStorage<string>('searchTerm', '');

    useEffect(() => {
        fetchData(selectedTab.url, { searchTerm });
    }, [selectedTab, searchTerm, selectedPage]);

    const fetchData = async (url: string, options?: { searchTerm?: string; page?: number }) => {
        setLoading(true);
        const { searchTerm, page } = options || {};

        const queryParams: Record<string, string> = {};
        if (searchTerm) queryParams['search'] = searchTerm;
        if (page) queryParams['page'] = String(page);

        const searchParams = new URLSearchParams(queryParams);
        const result = await getData(`${BASE_URL}${url}?${searchParams.toString()}`);
        setLoading(false);
        setResult({ data: result.results, count: result.count });
    };

    const headerBtnAction = async (tabName: string) => {
        const selectedTab = tabs.find((tab) => tab.name === tabName) || selectedTab;
        await fetchData(selectedTab.url, { searchTerm });
        setSelectedTab(selectedTab);
        setSelectedPage(1);
    };

    const onClickItem = async (id: string) => {
        const result = await fetchData(`${selectedTab.url}/${id}`);
        setSingleResult(result);
    };

    const onClickPagination = async (page: number) => {
        await fetchData(selectedTab.url, { searchTerm, page });
        setSelectedPage(page);
    };

    const handleSearch = async (searchTerm: string) => {
        setSearchTerm(searchTerm);
        await fetchData(selectedTab.url, { searchTerm });
    };

    const drawSingleResult = () => {
        const singleResultData = singleResult as { [key: string]: string };
        return Object.keys(singleResultData).map((key) => (
            <span key={key}>
                <h4 className={styles.key}>{key}:</h4>
                <span>{singleResultData[key]}</span>
            </span>
        ));
    };

    return (
        <Router>
            <ErrorBoundary>
                <div className={styles.hero}>
                    <div className={styles.container}>
                        <div className={styles.content}>
                            <Routes
                                tabs={tabs}
                                selectedTab={selectedTab}
                                result={result}
                                loading={loading}
                                singleResult={singleResult}
                                selectedPage={selectedPage}
                                perPageCount={perPageCount}
                                searchTerm={searchTerm}
                                handleSearch={handleSearch}
                                headerBtnAction={headerBtnAction}
                                onClickItem={onClickItem}
                                onClickPagination={onClickPagination}
                                drawSingleResult={drawSingleResult}
                            />
                        </div>
                    </div>
                </div>
            </ErrorBoundary>
        </Router>
    );
};

export default App;
