import React, { FC } from 'react';
import { useGetItemDetailsQuery } from '@/store/apiSlice';
import { Link } from 'react-router-dom';
import styles from './Details.module.css';

type DetailsProps = {
    selectedTabPath: string;
    itemId: number;
    selectedPage: number;
};

const Details: FC<DetailsProps> = ({ selectedTabPath, itemId, selectedPage }) => {
    const { data: details, isFetching } = useGetItemDetailsQuery({
        path: selectedTabPath,
        id: itemId,
    });

    if (isFetching) return <span>Loading...</span>;
    if (!details) return null;

    return (
        <div
            data-testid='details-container'
            className={styles.detailsContainer}
            onClick={(e) => {
                e.stopPropagation();
            }}
        >
            <Link className={styles.detailsLink} to={`${location.pathname}?page=${selectedPage}`}>
                X
            </Link>
            <div>
                <h2>Details</h2>
                {Object.entries(details).map(([key, value]) => (
                    <div className={styles.detailsContent} key={key}>
                        <h4 className={styles.detailsKey}>{key}:</h4>
                        <div className={styles.detailsValue}>{value}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Details;
