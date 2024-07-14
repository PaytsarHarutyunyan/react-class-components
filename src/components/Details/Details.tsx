import React, { FC, useEffect, useState } from 'react';
import { useQueryParams } from '@/hooks/useSelectedPage';
import { BASE_URL } from '@/constants/commonConstants';
import { getData } from '@/api';
import { ResultItem } from '@/types';

type DetailsProps = {
    selectedTabPath: string;
};

const Details: FC<DetailsProps> = ({ selectedTabPath }) => {
    const [loading, setLoading] = useState(false);
    const [details, setDetails] = useState<ResultItem>();

    const { getItemIdForDetailsPage } = useQueryParams();
    const itemId = getItemIdForDetailsPage();
    console.log({ selectedTabPath });
    useEffect(() => {
        if (!itemId) return undefined;
        setLoading(true);
        console.log('should fetch details');
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
        <div>
            <h2>Details</h2>
            {Object.entries(details).map(([key, value]) => (
                <span key={key}>
                    <h4>{key}:</h4>
                    <span>{value}</span>
                </span>
            ))}
        </div>
    );
};

export default Details;
