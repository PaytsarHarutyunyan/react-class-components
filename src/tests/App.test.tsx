import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import App from '../pages';
import fetchMock from 'jest-fetch-mock';
import { renderWithProviders } from '@/testUtils';
import peopleMock from './mocks/peopleMock.json';

// Initialize fetchMock
fetchMock.enableMocks();

const mockTabs = [
    { name: 'People', url: '/people' },
    { name: 'Planets', url: '/planets' },
    { name: 'Species', url: '/species' },
    { name: 'Starships', url: '/starships' },
    { name: 'Vehicles', url: '/vehicles' },
];

const mockPush = jest.fn();
jest.mock('next/router', () => ({
    useRouter: jest.fn(() => ({
        pathname: '/',
        query: {},
        push: mockPush,
    })),
}));

describe('App Component', () => {
    beforeEach(() => {
        fetchMock.resetMocks(); // Reset mocks before each test
    });

    test('should render correctly', () => {
        fetchMock.mockResponse(
            JSON.stringify({ results: peopleMock, count: 10, prev: null, next: null }),
        );
        const { container } = renderWithProviders(<App />);

        expect(container).toMatchSnapshot();
    });

    test('renders header buttons', async () => {
        fetchMock.mockResponse(
            JSON.stringify({ results: peopleMock, count: 10, prev: null, next: null }),
        );

        renderWithProviders(<App />);
        mockTabs.forEach(async (tab) => {
            await waitFor(() => expect(screen.getByText(tab.name)).toBeInTheDocument());
        });
    });
});
