import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import Item from '../components/Item/Item';
import { useRouter } from 'next/router';
import { renderWithProviders } from '../testUtils';
import { useDispatch, useSelector } from 'react-redux';
import { selectItem, unselectItem } from '@/store/selectedItemsSlice';
import { useQueryParams } from '@/hooks/useQueryParams';

// Mock the necessary hooks
jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
}));

jest.mock('@/hooks/useQueryParams', () => ({
    useQueryParams: jest.fn(),
}));

// Mock the selectItem and unselectItem actions
jest.mock('@/store/selectedItemsSlice', () => ({
    selectItem: jest.fn(),
    unselectItem: jest.fn(),
}));

const mockPush = jest.fn();
jest.mock('next/router', () => ({
    useRouter: jest.fn(() => ({
        pathname: '/',
        query: {},
        push: mockPush,
    })),
}));

jest.mock('@/store/apiSlice', () => ({
    apiSlice: {
        reducerPath: 'api',
        reducer: jest.fn(() => ({})), // Mock the reducer
        middleware: jest.fn(
            () => (next: (a: () => void) => void) => (action: () => void) => next(action),
        ), // Mock the middleware
        endpoints: {
            getItems: jest.fn(),
            getItemDetails: jest.fn(),
        },
    },
    useGetItemsQuery: jest.fn(), // Mock the hook
    useGetItemDetailsQuery: jest.fn(), // Mock the hook
}));

jest.mock('next/navigation', () => ({
    useRouter: jest.fn(() => ({
        push: mockPush,
    })),
    redirect: jest.fn(),
    usePathname: jest.fn(() => '/people'),
    useSearchParams: jest.fn(() => ({ get: jest.fn() })),
}));

describe('Item Component', () => {
    const mockItem = {
        name: 'Test Item',
        url: 'https://swapi.dev/api/people/1/',
    };

    const mockDispatch = jest.fn();
    const mockGetSelectedPage = jest.fn();

    beforeEach(() => {
        (useDispatch as unknown as jest.Mock).mockReturnValue(mockDispatch);
        (useSelector as unknown as jest.Mock).mockImplementation((selector) =>
            selector({
                selectedItems: {
                    items: [],
                },
            }),
        );
        (useQueryParams as jest.Mock).mockReturnValue({
            getSelectedPage: mockGetSelectedPage,
        });
        mockGetSelectedPage.mockReturnValue(1);

        (useRouter as jest.Mock).mockReturnValue({
            pathname: '/',
            query: {},
            push: mockPush,
        });
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders item with correct name and link', () => {
        renderWithProviders(<Item item={mockItem} />);

        expect(screen.getByText('Test Item')).toBeInTheDocument();
        expect(screen.getByRole('link')).toHaveAttribute('href', '/people?page=1&details=1');
    });

    it('checkbox is checked if item is selected', () => {
        (useSelector as unknown as jest.Mock).mockImplementation((selector) =>
            selector({
                selectedItems: {
                    items: [mockItem],
                },
            }),
        );

        renderWithProviders(<Item item={mockItem} />);

        expect(screen.getByRole('checkbox')).toBeChecked();
    });

    it('checkbox is not checked if item is not selected', () => {
        renderWithProviders(<Item item={mockItem} />);

        expect(screen.getByRole('checkbox')).not.toBeChecked();
    });

    it('dispatches selectItem when checkbox is clicked and item is not selected', () => {
        renderWithProviders(<Item item={mockItem} />);

        fireEvent.click(screen.getByRole('checkbox'));

        expect(mockDispatch).toHaveBeenCalledWith(selectItem(mockItem));
    });

    it('dispatches unselectItem when checkbox is clicked and item is selected', () => {
        (useSelector as unknown as jest.Mock).mockImplementation((selector) =>
            selector({
                selectedItems: {
                    items: [mockItem],
                },
            }),
        );

        renderWithProviders(<Item item={mockItem} />);

        fireEvent.click(screen.getByRole('checkbox'));

        expect(mockDispatch).toHaveBeenCalledWith(unselectItem(Number(1)));
    });
});
