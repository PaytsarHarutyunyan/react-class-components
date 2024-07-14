import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { screen, fireEvent, render } from '@testing-library/react';
import Pagination from '../components/Pagination/Pagination';

describe('Pagination Component', () => {
    test('renders pagination and handles page change', () => {
        const mockAction = jest.fn();

        const history = createMemoryHistory();
        history.push = jest.fn();

        render(
            <Router location={history.location} navigator={history}>
                <Pagination pageCount={5} action={mockAction} />
            </Router>,
        );

        const page2Link = screen.getByText('2');
        expect(page2Link).toBeInTheDocument();

        fireEvent.click(page2Link);
        expect(mockAction).toHaveBeenCalledWith(2);

        expect(history.push).toHaveBeenCalledTimes(1);
        expect(history.push).toHaveBeenCalledWith(
            {
                hash: '',
                pathname: '/',
                search: '?page=2',
            },
            undefined,
            expect.any(Object),
        );
    });
});
