import React, { FC, ReactElement } from 'react';
import styles from '@/styles/Details.module.css';
import Link from 'next/link';

type DetailsProps = {
    itemDetails: Record<string, unknown>;
    selectedPage: number;
};

const Details: FC<DetailsProps> = ({ selectedPage, itemDetails: details }) => {
    return (
        <div
            data-testid='details-container'
            className={styles.detailsContainer}
            onClick={(e) => {
                e.stopPropagation();
            }}
        >
            <Link className={styles.detailsLink} href={`${location.pathname}?page=${selectedPage}`}>
                X
            </Link>
            <div>
                <h2 className={styles.details}>Details</h2>
                {Object.entries(details).map(([key, value]) => (
                    <div className={styles.detailsContent} key={key}>
                        <h4 className={styles.detailsKey}>{key}:</h4>
                        <div className={styles.detailsValue}>{value as ReactElement}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Details;
