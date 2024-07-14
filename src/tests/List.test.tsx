import React from 'react';
import { screen } from '@testing-library/react';
import List from '../components/List/List';
import { BASE_URL } from '@/constants/commonConstants';
import { renderWithRouter } from '@/testUtils';

describe('List Component', () => {
    test('renders loading state', () => {
        renderWithRouter(<List loading={true} data={[]} />);
        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    test('renders no data state', () => {
        renderWithRouter(<List loading={false} data={[]} />);
        expect(screen.getByText('No data available')).toBeInTheDocument();
    });

    test('renders list items', () => {
        const mockData = [
            { name: 'Item 1', url: `${BASE_URL}/people/11/` },
            { name: 'Item 2', url: `${BASE_URL}/people/12/` },
        ];
        renderWithRouter(<List loading={false} data={mockData} />);

        mockData.forEach((item) => {
            expect(screen.getByText(item.name)).toBeInTheDocument();
        });
    });
});
