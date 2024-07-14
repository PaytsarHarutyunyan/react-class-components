import React, { FC, useEffect, useState } from 'react';
import { useQueryParams } from '@/hooks/useQueryParams';
import { BASE_URL } from '@/constants/commonConstants';
import { getData } from '@/api';
import { ResultItem } from '@/types';
import { Link } from 'react-router-dom';
import styles from './Details.module.css';

type DetailsProps = {
    selectedTabPath: string;
};

const Details: FC<DetailsProps> = ({ selectedTabPath }) => {
    const [loading, setLoading] = useState(false);
    const [details, setDetails] = useState<ResultItem | null>(null);

    const { getItemId, getSelectedPage } = useQueryParams();
    const itemId = getItemId();

    useEffect(() => {
        if (!itemId) return undefined;
        setLoading(true);
        getData(`${BASE_URL}${selectedTabPath}\\${itemId}`).then((result) => {
            setLoading(false);
            setDetails(result);
        });
    }, [itemId, selectedTabPath]);

    if (loading) {
        return <span>Loading...</span>;
    }

    if (!itemId || !details) return null;

    return (
        <div
            className={styles.detailsContainer}
            onClick={(e) => {
                e.stopPropagation();
            }}
        >
            <Link
                className={styles.detailsLink}
                onClick={() => {
                    setDetails(null);
                }}
                to={`${location.pathname}?page=${getSelectedPage()}`}
            >
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
