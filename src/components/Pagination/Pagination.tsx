import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import classNames from 'classnames';
import styles from '../../styles/Pagination.module.css';
import { useQueryParams } from '../../hooks/useQueryParams';
import Link from 'next/link';

interface PaginationProps {
    pageCount: number;
}

const Pagination: React.FC<PaginationProps> = ({ pageCount }) => {
    const { getSelectedPage } = useQueryParams();
    const selectedPage = getSelectedPage();

    const router = useRouter();

    // Function to generate the page link
    const getPageLink = (pageNumber: number) => {
        return `${router.pathname}?page=${pageNumber}`;
    };

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
                style={{ position: 'relative' }}
                className={classNames({
                    [styles.item]: true,
                    [styles.itemSelected]: paginationItem === selectedPage,
                })}
                key={paginationItem}
            >
                <Link
                    style={{
                        display: 'flex',
                        color: '#ffffff',
                        textDecoration: 'none',
                        position: 'absolute',
                        margin: 'auto',
                        top: '0',
                        left: '0',
                        right: '0',
                        bottom: '0',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                    href={getPageLink(paginationItem)}
                >
                    {paginationItem}
                </Link>
            </button>
        ));

    return (
        <div className={styles.container}>
            <div className={styles.itemContainer}>
                <button className={styles.item} style={{ position: 'relative' }}>
                    <Link
                        style={{
                            display: 'flex',
                            color: '#ffffff',
                            textDecoration: 'none',
                            position: 'absolute',
                            margin: 'auto',
                            top: '0',
                            left: '0',
                            right: '0',
                            bottom: '0',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        href={getPageLink(1)}
                    >
                        &lt;&lt;
                    </Link>
                </button>
                <button className={styles.item} style={{ position: 'relative' }}>
                    <Link
                        style={{
                            display: 'flex',
                            color: '#ffffff',
                            textDecoration: 'none',
                            position: 'absolute',
                            margin: 'auto',
                            top: '0',
                            left: '0',
                            right: '0',
                            bottom: '0',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        href={getPageLink(prevPage)}
                    >
                        &lt;
                    </Link>
                </button>
                {paginationItems.length ? drawPaginationItems() : 'No data available'}
                <button className={styles.item} style={{ position: 'relative' }}>
                    <Link
                        style={{
                            display: 'flex',
                            color: '#ffffff',
                            textDecoration: 'none',
                            position: 'absolute',
                            margin: 'auto',
                            top: '0',
                            left: '0',
                            right: '0',
                            bottom: '0',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        href={getPageLink(nextPage)}
                    >
                        &gt;
                    </Link>
                </button>
                <button className={styles.item} style={{ position: 'relative' }}>
                    <Link
                        style={{
                            display: 'flex',
                            color: '#ffffff',
                            textDecoration: 'none',
                            position: 'absolute',
                            margin: 'auto',
                            top: '0',
                            left: '0',
                            right: '0',
                            bottom: '0',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        href={getPageLink(pageCount)}
                    >
                        &gt;&gt;
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default Pagination;
