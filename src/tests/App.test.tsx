import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import App from '../components/App/App';
import fetchMock from 'jest-fetch-mock';
import { renderWithProvidersAndRouter } from '@/testUtils';
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

describe('App Component', () => {
    beforeEach(() => {
        fetchMock.resetMocks(); // Reset mocks before each test
    });

    test('should render correctly', () => {
        fetchMock.mockResponse(
            JSON.stringify({ results: peopleMock, count: 10, prev: null, next: null }),
        );
        const { container } = renderWithProvidersAndRouter(<App />);

        expect(container).toMatchSnapshot();
    });

    test('renders header buttons', async () => {
        fetchMock.mockResponse(
            JSON.stringify({ results: peopleMock, count: 10, prev: null, next: null }),
        );

        renderWithProvidersAndRouter(<App />);
        mockTabs.forEach(async (tab) => {
            await waitFor(() => expect(screen.getByText(tab.name)).toBeInTheDocument());
        });
    });
});
