import React from 'react';
import { screen, render } from '@testing-library/react';
import Details from '../components/Details/Details';

describe('Details Component', () => {
    const mockData = {
        name: 'Test Item',
        description: 'This is a test item description',
    };

    it('displays details', () => {
        render(<Details itemDetails={mockData} selectedPage={1} />);

        expect(screen.getByTestId('details-container')).toBeInTheDocument();
        expect(screen.getByText('Details')).toBeInTheDocument();
        expect(screen.getByText('name:')).toBeInTheDocument();
        expect(screen.getByText('Test Item')).toBeInTheDocument();
        expect(screen.getByText('description:')).toBeInTheDocument();
        expect(screen.getByText('This is a test item description')).toBeInTheDocument();
    });
});
