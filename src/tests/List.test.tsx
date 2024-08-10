import React from 'react';
import { screen } from '@testing-library/react';
import List from '../components/List/List';
import { BASE_URL } from '@/constants/commonConstants';
import { renderWithProviders } from '@/testUtils';

const mockPush = jest.fn();
jest.mock('next/router', () => ({
    useRouter: jest.fn(() => ({
        pathname: '/',
        query: {},
        push: mockPush,
    })),
}));

describe('List Component', () => {
    test('renders loading state', () => {
        renderWithProviders(<List loading={true} data={[]} />);
        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    test('renders no data state', () => {
        renderWithProviders(<List loading={false} data={[]} />);
        expect(screen.getByText('No data available')).toBeInTheDocument();
    });

    test('renders list items', () => {
        const mockData = [
            { name: 'Item 1', url: `${BASE_URL}/people/11/` },
            { name: 'Item 2', url: `${BASE_URL}/people/12/` },
        ];
        renderWithProviders(<List loading={false} data={mockData} />);

        mockData.forEach((item) => {
            expect(screen.getByText(item.name)).toBeInTheDocument();
        });
    });
});
