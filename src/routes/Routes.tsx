import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HeaderButtons from '../components/HeaderButtons/HeaderButtons';
import List from '../components/List/List';
import Pagination from '../components/Pagination/Pagination';
import Search from '../components/Search/Search';
import NotFound from '../components/NotFound/NotFound';
import styles from '../components/App/App.module.css';

interface RoutesProps {
    tabs: Tab[];
    selectedTab: Tab;
    result: Result;
    loading: boolean;
    singleResult: boolean | { [key: string]: string } | null;
    selectedPage: number;
    perPageCount: number;
    searchTerm: string;
    handleSearch: (searchTerm: string) => Promise<void>;
    headerBtnAction: (tabName: string) => Promise<void>;
    onClickItem: (id: string) => Promise<void>;
    onClickPagination: (page: number) => Promise<void>;
    drawSingleResult: () => React.ReactNode;
}

const RoutesComponent: React.FC<RoutesProps> = ({
    tabs,
    selectedTab,
    result,
    loading,
    singleResult,
    selectedPage,
    perPageCount,
    searchTerm,
    handleSearch,
    headerBtnAction,
    onClickItem,
    onClickPagination,
    drawSingleResult,
}) => {
    return (
        <Routes>
            <Route
                path='/'
                element={
                    !singleResult ? (
                        <div className={styles.hero}>
                            <Search searchTerm={searchTerm} onSearch={handleSearch} />
                            <div className={styles.container}>
                                <div className={styles.content}>
                                    <HeaderButtons
                                        tabs={tabs}
                                        selectedTabName={selectedTab.name}
                                        action={headerBtnAction}
                                    />
                                    <List
                                        data={result.data}
                                        loading={loading}
                                        selectedPage={selectedPage}
                                        itemAction={onClickItem}
                                    />
                                    <Pagination
                                        pageCount={Math.ceil(result.count / perPageCount)}
                                        selectedPage={selectedPage}
                                        action={onClickPagination}
                                    />
                                </div>
                            </div>
                        </div>
                    ) : (
                        drawSingleResult()
                    )
                }
            />
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
};

export default RoutesComponent;
