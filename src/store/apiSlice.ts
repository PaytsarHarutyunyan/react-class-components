import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '@/constants/commonConstants';
import { Result, ResultItem } from '@/types';

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getItems: builder.query<Result, { path: string; searchTerm?: string; page?: number }>({
            query: ({ path, searchTerm, page }) => {
                const params = new URLSearchParams();
                if (searchTerm) params.append('search', searchTerm);
                if (page) params.append('page', String(page));
                return `${path}?${params.toString()}`;
            },
        }),
        getItemDetails: builder.query<ResultItem, { path: string; id: number }>({
            query: ({ path, id }) => `${path}/${id}`,
        }),
    }),
});

export const { useGetItemsQuery, useGetItemDetailsQuery } = apiSlice;
