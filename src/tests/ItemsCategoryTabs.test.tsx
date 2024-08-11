import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ItemsCategoryTabs from '../components/ItemsCategoryTabs/ItemsCategoryTabs';

const mockPush = jest.fn();
jest.mock('next/navigation', () => ({
    useRouter: jest.fn(() => ({
        push: mockPush,
    })),
    redirect: jest.fn(),
    usePathname: jest.fn(() => '/people'),
    useSearchParams: jest.fn(() => ({ get: jest.fn() })),
}));

describe('ItemsCategoryTabs Component', () => {
    test('renders header buttons and handles click', () => {
        const { container } = render(<ItemsCategoryTabs />);

        const peopleButton = screen.getByText('People');
        const planetsButton = screen.getByText('Planets');

        expect(peopleButton).toBeInTheDocument();
        expect(planetsButton).toBeInTheDocument();

        fireEvent.click(planetsButton);

        expect(container).toMatchSnapshot();
    });
});
