import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import styles from './Pagination.module.css';

interface PaginationProps {
    selectedPage: number;
    pageCount: number;
    action: (page: number) => Promise<void>;
}

const Pagination: React.FC<PaginationProps> = ({ selectedPage, pageCount, action }) => {
    const [paginationItems, setPaginationItems] = useState<number[]>([]);
    const [nextPage, setNextPage] = useState<number>(selectedPage + 1);
    const [prevPage, setPrevPage] = useState<number>(selectedPage - 1);

    useEffect(() => {
        const items = new Array(pageCount).fill(null).map((_, index) => index + 1);
        setPaginationItems(items);
        setNextPage(selectedPage === pageCount ? pageCount : selectedPage + 1);
        setPrevPage(selectedPage === 1 ? selectedPage : selectedPage - 1);
    }, [selectedPage, pageCount]);

    const drawPaginationItem = () =>
        paginationItems.map((paginationItem) => (
            <button
                className={classNames({
                    [styles.item]: true,
                    [styles.itemSelected]: paginationItem === selectedPage,
                })}
                key={paginationItem}
                onClick={() => action(paginationItem)}
            >
                {paginationItem}
            </button>
        ));

    return (
        <div className={styles.container}>
            <div className={styles.itemContainer}>
                <button className={styles.item} onClick={() => action(1)}>
                    &lt;&lt;
                </button>
                <button className={styles.item} onClick={() => action(prevPage)}>
                    &lt;
                </button>
                {paginationItems.length ? drawPaginationItem() : 'No data available'}
                <button className={styles.item} onClick={() => action(nextPage)}>
                    &gt;
                </button>
                <button className={styles.item} onClick={() => action(pageCount)}>
                    &gt;&gt;
                </button>
            </div>
        </div>
    );
};

export default Pagination;
