import React, { PropsWithChildren } from 'react';
import { screen, waitFor, render } from '@testing-library/react';
import MainPage from '../components/MainPageWrapper';
import fetchMock from 'jest-fetch-mock';
import peopleMock from './mocks/peopleMock.json';

// Initialize fetchMock
fetchMock.enableMocks();

const mockTabs = [
    { name: 'People', url: '/people' },
    { name: 'Planets', url: '/planets' },
    { name: 'Species', url: '/species' },
    { name: 'Starships', url: '/starships' },
    { name: 'Vehicles', url: '/vehicles' },
];

const mockPush = jest.fn();
jest.mock('next/router', () => ({
    useRouter: jest.fn(() => ({
        pathname: '/',
        query: {},
        push: mockPush,
    })),
}));

jest.mock('next/navigation', () => ({
    useRouter: jest.fn(() => ({
        push: mockPush,
    })),
    redirect: jest.fn(),
    usePathname: jest.fn(() => '/people'),
    useSearchParams: jest.fn(() => ({ get: jest.fn() })),
}));

jest.mock('next/link', () => {
    const Link = ({ children, ...props }: PropsWithChildren) => <a {...props}>{children}</a>;
    Link.displayName = 'MockedLink';
    return Link;
});

// Mock the necessary hooks
jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn(),
    useSelector: jest.fn(() => []),
}));

// Mock the selectItem and unselectItem actions
jest.mock('@/store/selectedItemsSlice', () => ({
    selectItem: jest.fn(),
    unselectItem: jest.fn(),
}));

jest.mock('@/hooks/useQueryParams', () => ({
    useQueryParams: jest.fn(() => ({
        getSelectedPage: jest.fn(() => 1),
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

describe('App Component', () => {
    beforeEach(() => {
        fetchMock.resetMocks(); // Reset mocks before each test
    });

    test('should render correctly', () => {
        fetchMock.mockResponse(
            JSON.stringify({ results: peopleMock, count: 10, prev: null, next: null }),
        );
        const { container } = render(
            <MainPage itemListData={{ count: peopleMock.length, results: peopleMock }} />,
        );

        expect(container).toMatchSnapshot();
    });

    test('renders header buttons', async () => {
        fetchMock.mockResponse(
            JSON.stringify({ results: peopleMock, count: 10, prev: null, next: null }),
        );

        render(<MainPage itemListData={{ count: peopleMock.length, results: peopleMock }} />);
        mockTabs.forEach(async (tab) => {
            await waitFor(() => expect(screen.getByText(tab.name)).toBeInTheDocument());
        });
    });
});
