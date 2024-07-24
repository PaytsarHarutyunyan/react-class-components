import React from 'react';
import { screen, fireEvent, render } from '@testing-library/react';
import Item from '../components/Item/Item';
import { Provider } from 'react-redux';
import store from '../store';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { renderWithProvidersAndRouter } from '../testUtils';
import { useDispatch, useSelector } from 'react-redux';
import { selectItem, unselectItem } from '@/store/selectedItemsSlice';
import { useQueryParams } from '@/hooks/useQueryParams';

// Mock the necessary hooks
jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
    useStore: jest.fn(),
}));

jest.mock('@/hooks/useQueryParams', () => ({
    useQueryParams: jest.fn(),
}));

// Mock the selectItem and unselectItem actions
jest.mock('@/store/selectedItemsSlice', () => ({
    ...jest.requireActual('react-redux'),
    selectItem: jest.fn(),
    unselectItem: jest.fn(),
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
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('renders item with correct name and link', () => {
        renderWithProvidersAndRouter(<Item item={mockItem} />);

        expect(screen.getByText('Test Item')).toBeInTheDocument();
        expect(screen.getByRole('link')).toHaveAttribute(
            'href',
            `${location.pathname}?page=1&details=1`,
        );
    });

    it('checkbox is checked if item is selected', () => {
        (useSelector as unknown as jest.Mock).mockImplementation((selector) =>
            selector({
                selectedItems: {
                    items: [mockItem],
                },
            }),
        );

        renderWithProvidersAndRouter(<Item item={mockItem} />);

        expect(screen.getByRole('checkbox')).toBeChecked();
    });

    it('checkbox is not checked if item is not selected', () => {
        renderWithProvidersAndRouter(<Item item={mockItem} />);

        expect(screen.getByRole('checkbox')).not.toBeChecked();
    });

    it('dispatches selectItem when checkbox is clicked and item is not selected', () => {
        renderWithProvidersAndRouter(<Item item={mockItem} />);

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

        renderWithProvidersAndRouter(<Item item={mockItem} />);

        fireEvent.click(screen.getByRole('checkbox'));

        expect(mockDispatch).toHaveBeenCalledWith(unselectItem(Number(1)));
    });

    it('renders item and handles click', () => {
        const history = createMemoryHistory();
        history.push = jest.fn();

        render(
            <Provider store={store}>
                <Router location={history.location} navigator={history}>
                    <Item item={mockItem} />
                </Router>
            </Provider>,
        );

        const itemLink = screen.getByText('Test Item');
        expect(itemLink).toBeInTheDocument();

        fireEvent.click(itemLink);

        expect(history.push).toHaveBeenCalledTimes(1);
        expect(history.push).toHaveBeenCalledWith(
            {
                hash: '',
                pathname: '/',
                search: '?page=1&details=1',
            },
            undefined,
            expect.any(Object),
        );
    });
});
