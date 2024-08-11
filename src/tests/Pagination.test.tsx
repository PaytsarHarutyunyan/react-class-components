import React from 'react';
import { screen, render } from '@testing-library/react';
import Pagination from '../components/Pagination/Pagination';

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

describe('Pagination Component', () => {
    test('renders pagination and handles page change', () => {
        const { container } = render(<Pagination pageCount={5} />);

        const page2Link = screen.getByText('2');
        expect(page2Link).toBeInTheDocument();

        expect(container).toMatchSnapshot();
    });
});
