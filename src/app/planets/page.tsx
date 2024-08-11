import React from 'react';
import MainPageWrapper from '@/components/MainPageWrapper';
import { getData } from '@/api';
import { BASE_URL } from '@/constants/commonConstants';

const Planets: React.FC<{
    searchParams: { [key: string]: string | undefined };
    url: URL;
}> = async ({ searchParams }) => {
    const planetsInitialResponse = await getData(
        `${BASE_URL}/planets?page=${searchParams.page || '1'}${searchParams.search ? `&search=${searchParams.search}` : ''}`,
    );

    let itemDetails;

    if (searchParams.details) {
        try {
            itemDetails = await getData(`${BASE_URL}/planets/${searchParams.details}`);
        } catch {
            console.log('Failed to fetch details');
        }
    }

    return <MainPageWrapper itemListData={planetsInitialResponse} itemDetails={itemDetails} />;
};

export default Planets;
