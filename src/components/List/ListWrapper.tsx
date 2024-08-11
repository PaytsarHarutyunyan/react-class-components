import React from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import useLocalStorage from '@/hooks/useLocalStorage';
import { useQueryParams } from '../../hooks/useQueryParams';
import { Result } from '@/types';
import { useTheme } from '../../context/ThemeContext';
import SelectedItemsFlyout from '../../components/SelectedItemsFlyout/SelectedItemsFlyout';
import { ITEMS_PER_PAGE_COUNT } from '@/constants/commonConstants';
import ItemsCategoryTabs from '@/components/ItemsCategoryTabs';
import Search from '@/components/Search';
import List from '@/components/List';
import Pagination from '@/components/Pagination';
import Details from '../../components/Details';
import styles from '../../styles/App.module.css';

const ListWrapper: React.FC<{ itemListData: Result; itemDetails?: Record<string, unknown> }> = ({
    itemListData,
    itemDetails,
}) => {
    const [searchTerm, setSearchTerm] = useLocalStorage<string>('searchTerm', '');
    const { getSelectedPage } = useQueryParams();

    const selectedPage = getSelectedPage();
    const pathname = usePathname();

    const { theme, setTheme } = useTheme();
    const searchParams = useSearchParams();

    const handleSearch = async (term: string) => {
        setSearchTerm(term);

        const newSearchParams = new URLSearchParams(searchParams.toString());
        newSearchParams.set('search', term);

        router.push(`?${newSearchParams.toString()}`);
    };

    const handleThemeChange = (newTheme: 'light' | 'dark') => {
        setTheme(newTheme);
    };

    const router = useRouter();
    const backdropStyles = itemDetails ? { opacity: 0.2 } : {};

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
                            if (!itemDetails) return;
                            const newSearchParams = new URLSearchParams(searchParams.toString());
                            newSearchParams.delete('details');
                            router.push(`${pathname}?${newSearchParams.toString()}`);
                        }}
                    >
                        <div style={backdropStyles}>
                            <Search searchTerm={searchTerm} onSearch={handleSearch} />
                            <div className={styles.content}>
                                <ItemsCategoryTabs />
                                <List
                                    data={itemListData ? itemListData.results : []}
                                    loading={false}
                                />
                                <Pagination
                                    pageCount={
                                        itemListData
                                            ? Math.ceil(itemListData.count / ITEMS_PER_PAGE_COUNT)
                                            : 0
                                    }
                                />
                            </div>
                        </div>
                        {itemDetails && (
                            <Details itemDetails={itemDetails} selectedPage={selectedPage} />
                        )}
                    </div>
                </div>
                <SelectedItemsFlyout />
            </div>
        </div>
    );
};

export default ListWrapper;
