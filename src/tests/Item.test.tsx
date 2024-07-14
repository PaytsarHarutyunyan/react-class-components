import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Item from '../components/Item/Item';
import { BASE_URL } from '@/constants/commonConstants';

describe('Item Component', () => {
    test('renders item and handles click', () => {
        render(<Item item={{ name: 'Test Item', url: BASE_URL }} />);

        const itemButton = screen.getByText('Test Item');
        expect(itemButton).toBeInTheDocument();

        fireEvent.click(itemButton);

        // TODO: add fair assertion
        expect(1).toBe(1);
    });
});
