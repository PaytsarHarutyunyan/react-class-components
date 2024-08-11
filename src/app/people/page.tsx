import React from 'react';
import MainPageWrapper from '@/components/MainPageWrapper';
import { getData } from '@/api';
import { BASE_URL } from '@/constants/commonConstants';

const People: React.FC<{
    searchParams: { [key: string]: string | undefined };
    url: URL;
}> = async ({ searchParams }) => {
    const peopleInitialResponse = await getData(
        `${BASE_URL}/people?page=${searchParams.page || '1'}${searchParams.search ? `&search=${searchParams.search}` : ''}`,
    );

    let itemDetails;

    if (searchParams.details) {
        try {
            itemDetails = await getData(`${BASE_URL}/people/${searchParams.details}`);
        } catch {
            console.log('Failed to fetch details');
        }
    }

    return <MainPageWrapper itemListData={peopleInitialResponse} itemDetails={itemDetails} />;
};

export default People;
