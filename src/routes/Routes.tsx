import React from 'react';
import { Routes, Route, Outlet, useNavigate } from 'react-router-dom';
import HeaderButtons from '../components/HeaderButtons/HeaderButtons';
import List from '../components/List/List';
import Pagination from '../components/Pagination/Pagination';
import Search from '../components/Search/Search';
import NotFound from '../components/NotFound/NotFound';
import styles from '../components/App/App.module.css';
import { Tab, Result } from '@/types';
import { ITEMS_PER_PAGE_COUNT } from '@/constants/commonConstants';
import Details from '@/components/Details/Details';
import { useQueryParams } from '@/hooks/useQueryParams';

interface RoutesProps {
    selectedTab: Tab;
    result: Result | undefined;
    loading: boolean;
    searchTerm: string;
    handleSearch: (searchTerm: string) => Promise<void>;
    headerBtnAction: (tabName: string) => Promise<void>;
}

const RoutesComponent: React.FC<RoutesProps> = ({
    selectedTab,
    result,
    loading,
    searchTerm,
    handleSearch,
    headerBtnAction,
}) => {
    const { getItemId, getSelectedPage } = useQueryParams();
    const itemId = getItemId();
    const backdropStyles = itemId ? { opacity: 0.2 } : {};
    const navigate = useNavigate();
    const selectedPage = getSelectedPage();

    return (
        <Routes>
            <Route
                path='/'
                element={
                    <div
                        style={{ position: 'relative' }}
                        onClick={() => {
                            if (!itemId) return;
                            navigate(`${location.pathname}?page=${selectedPage}`);
                        }}
                    >
                        <div style={backdropStyles}>
                            <Search searchTerm={searchTerm} onSearch={handleSearch} />
                            <div className={styles.content}>
                                <HeaderButtons
                                    selectedTabName={selectedTab.name}
                                    action={headerBtnAction}
                                />
                                <List data={result ? result.results : []} loading={loading} />
                                <Pagination
                                    pageCount={
                                        result ? Math.ceil(result.count / ITEMS_PER_PAGE_COUNT) : 0
                                    }
                                />
                            </div>
                        </div>
                        <Outlet />
                    </div>
                }
            >
                <Route
                    path='/'
                    element={
                        itemId ? (
                            <Details
                                selectedTabPath={selectedTab.url}
                                itemId={itemId}
                                selectedPage={selectedPage}
                            />
                        ) : null
                    }
                />
            </Route>
            <Route path='*' element={<NotFound />} />
        </Routes>
    );
};

export default RoutesComponent;
