import React from 'react';
import { render, screen } from '@testing-library/react';
import List from '../components/List/List';

describe('List Component', () => {
    test('renders loading state', () => {
        render(<List loading={true} data={[]} itemAction={jest.fn()} />);
        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    test('renders no data state', () => {
        render(<List loading={false} data={[]} itemAction={jest.fn()} />);
        expect(screen.getByText('No data available')).toBeInTheDocument();
    });

    test('renders list items', () => {
        const mockData = [{ name: 'Item 1' }, { name: 'Item 2' }];
        render(<List loading={false} data={mockData} itemAction={jest.fn()} />);

        mockData.forEach((item) => {
            expect(screen.getByText(item.name)).toBeInTheDocument();
        });
    });
});
