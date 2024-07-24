import React from 'react';
import { renderWithProvidersAndRouter } from '../testUtils'; // Custom render function
import { screen } from '@testing-library/react';
import Details from '../components/Details/Details';
import { useGetItemDetailsQuery } from '@/store/apiSlice'; // Import the hook to mock

// Mock the useGetItemDetailsQuery hook
jest.mock('@/store/apiSlice', () => ({
    ...jest.requireActual('@/store/apiSlice'),
    useGetItemDetailsQuery: jest.fn(),
}));

jest.mock('@reduxjs/toolkit/query/react', () => ({
    ...jest.requireActual('@reduxjs/toolkit/query/react'),
    fetchBaseQuery: jest.fn(),
}));

describe('Details Component', () => {
    const mockData = {
        name: 'Test Item',
        description: 'This is a test item description',
    };

    it('displays loading state', () => {
        (useGetItemDetailsQuery as jest.Mock).mockReturnValue({ data: null, isFetching: true });

        renderWithProvidersAndRouter(
            <Details selectedTabPath='path' itemId={1} selectedPage={1} />,
        );

        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    it('displays details', () => {
        (useGetItemDetailsQuery as jest.Mock).mockReturnValue({
            data: mockData,
            isFetching: false,
        });

        renderWithProvidersAndRouter(
            <Details selectedTabPath='path' itemId={1} selectedPage={1} />,
        );

        expect(screen.getByTestId('details-container')).toBeInTheDocument();
        expect(screen.getByText('Details')).toBeInTheDocument();
        expect(screen.getByText('name:')).toBeInTheDocument();
        expect(screen.getByText('Test Item')).toBeInTheDocument();
        expect(screen.getByText('description:')).toBeInTheDocument();
        expect(screen.getByText('This is a test item description')).toBeInTheDocument();
    });

    it('renders nothing when no details are available', () => {
        (useGetItemDetailsQuery as jest.Mock).mockReturnValue({ data: null, isFetching: false });

        const { container } = renderWithProvidersAndRouter(
            <Details selectedTabPath='path' itemId={1} selectedPage={1} />,
        );

        expect(container.firstChild).toBeNull();
    });
});
