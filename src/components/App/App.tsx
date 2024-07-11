import React, { useState, useEffect } from 'react';
import styles from './App.module.css';
import { getData } from '../../api/index';
import { BASE_URL } from '../../constants/index';
import useLocalStorage from '../../hooks/useLocalStorage';
import Routes from '../../routes/Routes';
import { useSelectedPage } from '../../hooks/useGetSelectedPage';

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
    const [perPageCount] = useState<number>(10);
    const [selectedTab, setSelectedTab] = useState<Tab>({ name: 'People', url: '/people' });
    const [tabs] = useState<Tab[]>([
        { name: 'People', url: '/people' },
        { name: 'Planets', url: '/planets' },
        { name: 'Species', url: '/species' },
        { name: 'Starships', url: '/starships' },
        { name: 'Vehicles', url: '/vehicles' },
    ]);
    const [singleResult, setSingleResult] = useState<{ [key: string]: string } | null>(null);
    const [searchTerm, setSearchTerm] = useLocalStorage<string>('searchTerm', '');

    const { getSelectedPage } = useSelectedPage();
    const selectedPage = getSelectedPage();

    useEffect(() => {
        fetchData(selectedTab.url, { page: selectedPage });
    }, [selectedTab.url, selectedPage]);

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
    };

    const onClickItem = async (id: string) => {
        const result = await fetchData(`${selectedTab.url}/${id}`);
        setSingleResult(result);
    };

    const onClickPagination = async (page: number) => {
        await fetchData(selectedTab.url, { searchTerm, page });
    };

    const handleSearch = async (searchTerm: string) => {
        setSearchTerm(searchTerm);
        await fetchData(selectedTab.url, { searchTerm });
    };

    const drawSingleResult = () => {
        if (!singleResult) return null;
        return Object.keys(singleResult).map((key) => (
            <span key={key}>
                <h4 className={styles.key}>{key}:</h4>
                <span>{singleResult[key]}</span>
            </span>
        ));
    };

    return (
        <div className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <Routes
                        tabs={tabs}
                        selectedTab={selectedTab}
                        result={result}
                        loading={loading}
                        singleResult={singleResult}
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
    );
};

export default App;
