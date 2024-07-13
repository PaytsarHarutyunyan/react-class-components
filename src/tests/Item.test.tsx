import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Item from '../components/Item/Item';

describe('Item Component', () => {
    test('renders item and handles click', () => {
        const mockAction = jest.fn();
        render(<Item item={{ name: 'Test Item' }} action={mockAction} />);

        const itemButton = screen.getByText('Test Item');
        expect(itemButton).toBeInTheDocument();

        fireEvent.click(itemButton);
        expect(mockAction).toHaveBeenCalled();
    });
});
