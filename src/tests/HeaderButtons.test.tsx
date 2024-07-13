import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import HeaderButtons from '../components/HeaderButtons/HeaderButtons';

const mockTabs = [
    { name: 'People', url: '/people' },
    { name: 'Planets', url: '/planets' },
];

describe('HeaderButtons Component', () => {
    test('renders header buttons and handles click', () => {
        const mockAction = jest.fn();
        render(<HeaderButtons tabs={mockTabs} selectedTabName='People' action={mockAction} />);

        const peopleButton = screen.getByText('People');
        const planetsButton = screen.getByText('Planets');

        expect(peopleButton).toBeInTheDocument();
        expect(planetsButton).toBeInTheDocument();

        fireEvent.click(planetsButton);
        expect(mockAction).toHaveBeenCalledWith('Planets');
    });
});
