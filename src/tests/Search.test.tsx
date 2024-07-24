import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Search from '../components/Search/Search';

describe('Search Component', () => {
    test('handles search input and button click', () => {
        const mockOnSearch = jest.fn();
        render(<Search searchTerm='' onSearch={mockOnSearch} />);

        const input = screen.getByPlaceholderText('Search...');
        const button = screen.getByText('Search');

        fireEvent.change(input, { target: { value: 'test' } });
        fireEvent.click(button);

        expect(mockOnSearch).toHaveBeenCalledWith('test');
    });
});
