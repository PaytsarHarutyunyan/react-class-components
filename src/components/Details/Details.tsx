import React from 'react';

interface DetailsProps {
    singleResult: { [key: string]: string } | null;
    drawSingleResult: () => JSX.Element | null;
}

const Details: React.FC<DetailsProps> = ({ singleResult, drawSingleResult }) => {
    if (!singleResult) return <span>No details available</span>;

    return (
        <div className={styles.details}>
            <h2>Details</h2>
            {drawSingleResult()}
        </div>
    );
};

export default Details;
