import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import styles from './Pagination.module.css';
import { Link } from 'react-router-dom';
import { useQueryParams } from '../../hooks/useQueryParams';

interface PaginationProps {
    pageCount: number;
}

const Pagination: React.FC<PaginationProps> = ({ pageCount }) => {
    const { getSelectedPage } = useQueryParams();
    const selectedPage = getSelectedPage();

    const getPageLink = (pageNumber: number) => `${location.pathname}?page=${pageNumber}`;

    const [paginationItems, setPaginationItems] = useState<number[]>([]);
    const [nextPage, setNextPage] = useState<number>(selectedPage + 1);
    const [prevPage, setPrevPage] = useState<number>(selectedPage - 1);

    useEffect(() => {
        const items = new Array(pageCount).fill(null).map((_, index) => index + 1);
        setPaginationItems(items);
        setNextPage(selectedPage === pageCount ? pageCount : selectedPage + 1);
        setPrevPage(selectedPage === 1 ? 1 : selectedPage - 1);
    }, [selectedPage, pageCount]);

    const drawPaginationItems = () =>
        paginationItems.map((paginationItem) => (
            <button
                className={classNames({
                    [styles.item]: true,
                    [styles.itemSelected]: paginationItem === selectedPage,
                })}
                key={paginationItem}
            >
                <Link
                    style={{ display: 'block', color: '#ffffff', textDecoration: 'none' }}
                    to={getPageLink(paginationItem)}
                >
                    {paginationItem}
                </Link>
            </button>
        ));

    return (
        <div className={styles.container}>
            <div className={styles.itemContainer}>
                <button className={styles.item}>
                    <Link
                        style={{ display: 'block', color: '#ffffff', textDecoration: 'none' }}
                        to={getPageLink(1)}
                    >
                        &lt;&lt;
                    </Link>
                </button>
                <button className={styles.item}>
                    <Link
                        style={{ display: 'block', color: '#ffffff', textDecoration: 'none' }}
                        to={getPageLink(prevPage)}
                    >
                        &lt;
                    </Link>
                </button>
                {paginationItems.length ? drawPaginationItems() : 'No data available'}
                <button className={styles.item}>
                    <Link
                        style={{ display: 'block', color: '#ffffff', textDecoration: 'none' }}
                        to={getPageLink(nextPage)}
                    >
                        &gt;
                    </Link>
                </button>
                <button className={styles.item}>
                    <Link
                        style={{ display: 'block', color: '#ffffff', textDecoration: 'none' }}
                        to={getPageLink(pageCount)}
                    >
                        &gt;&gt;
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default Pagination;
