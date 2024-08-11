import React from 'react';
import MainPageWrapper from '@/components/MainPageWrapper';
import { getData } from '@/api';
import { BASE_URL } from '@/constants/commonConstants';

const Species: React.FC<{
    searchParams: { [key: string]: string | undefined };
    url: URL;
}> = async ({ searchParams }) => {
    const speciesInitialResponse = await getData(
        `${BASE_URL}/species?page=${searchParams.page || '1'}${searchParams.search ? `&search=${searchParams.search}` : ''}`,
    );

    let itemDetails;

    if (searchParams.details) {
        try {
            itemDetails = await getData(`${BASE_URL}/species/${searchParams.details}`);
        } catch {
            console.log('Failed to fetch details');
        }
    }

    return <MainPageWrapper itemListData={speciesInitialResponse} itemDetails={itemDetails} />;
};

export default Species;
