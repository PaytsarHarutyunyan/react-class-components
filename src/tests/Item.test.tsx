import React from 'react';
import { screen, fireEvent, render } from '@testing-library/react';
import Item from '../components/Item/Item';
import { BASE_URL } from '@/constants/commonConstants';
// import { renderWithRouter } from '@/testUtils';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

describe('Item Component', () => {
    test('renders item and handles click', () => {
        const history = createMemoryHistory();
        history.push = jest.fn();

        render(
            <Router location={history.location} navigator={history}>
                <Item item={{ name: 'Test Item', url: `${BASE_URL}/people/12/` }} />
            </Router>,
        );

        const itemLink = screen.getByText('Test Item');
        expect(itemLink).toBeInTheDocument();

        fireEvent.click(itemLink);

        expect(history.push).toHaveBeenCalledTimes(1);
        expect(history.push).toHaveBeenCalledWith(
            {
                hash: '',
                pathname: '/',
                search: '?page=1&details=12',
            },
            undefined,
            expect.any(Object),
        );
    });
});
