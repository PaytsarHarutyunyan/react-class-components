import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import Pagination from '../components/Pagination/Pagination';
import { renderWithRouter } from '@/testUtils';

describe('Pagination Component', () => {
    test('renders pagination and handles page change', () => {
        const mockAction = jest.fn();

        renderWithRouter(<Pagination pageCount={5} action={mockAction} />);

        const page2Link = screen.getByText('2');
        expect(page2Link).toBeInTheDocument();

        fireEvent.click(page2Link);
        expect(mockAction).toHaveBeenCalledWith(2);
    });
});
