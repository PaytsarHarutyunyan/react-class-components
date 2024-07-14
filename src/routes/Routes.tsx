import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import HeaderButtons from '../components/HeaderButtons/HeaderButtons';
import List from '../components/List/List';
import Pagination from '../components/Pagination/Pagination';
import Search from '../components/Search/Search';
import NotFound from '../components/NotFound/NotFound';
import styles from '../components/App/App.module.css';
import { Tab, Result } from '@/types';
import { ITEMS_PER_PAGE_COUNT } from '@/constants/commonConstants';
import Details from '@/components/Details/Details';
interface RoutesProps {
    selectedTab: Tab;
    result: Result;
    loading: boolean;
    searchTerm: string;
    handleSearch: (searchTerm: string) => Promise<void>;
    headerBtnAction: (tabName: string) => Promise<void>;
    onClickPagination: (page: number) => Promise<void>;
}

const RoutesComponent: React.FC<RoutesProps> = ({
    selectedTab,
    result,
    loading,
    searchTerm,
    handleSearch,
    headerBtnAction,
    onClickPagination,
}) => {
    return (
        <Routes>
            <Route
                path='/'
                element={
                    <>
                        <Search searchTerm={searchTerm} onSearch={handleSearch} />
                        <div className={styles.content}>
                            <HeaderButtons
                                selectedTabName={selectedTab.name}
                                action={headerBtnAction}
                            />
                            <List data={result.data} loading={loading} />
                            <Pagination
                                pageCount={Math.ceil(result.count / ITEMS_PER_PAGE_COUNT)}
                                action={onClickPagination}
                            />
                        </div>
                        <Outlet />
                    </>
                }
            >
                <Route path='/' element={<Details selectedTabPath={selectedTab.url} />} />
            </Route>
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
};

export default RoutesComponent;
