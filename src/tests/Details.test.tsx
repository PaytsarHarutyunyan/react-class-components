import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Details from '../components/Details/Details';
import { BASE_URL } from '@/constants/commonConstants';
import { getData } from '@/api';
import itemsDetailsMock from './mocks/itemDetails.json';

jest.mock('@/api', () => ({
    getData: jest.fn(() => Promise.resolve(itemsDetailsMock)),
}));

jest.mock('@/hooks/useQueryParams', () => ({
    useQueryParams: () => ({
        getItemId: () => '1',
        getSelectedPage: () => '1',
    }),
}));

describe('Details Component', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('Check that a loading indicator is displayed while fetching data', async () => {
        render(
            <Router>
                <Details selectedTabPath='/people' />
            </Router>,
        );

        expect(screen.getByText(/Loading.../i)).toBeInTheDocument();

        await waitFor(() => {
            expect(getData).toHaveBeenCalledWith(`${BASE_URL}/people\\1`);
        });
    });

    test('Make sure the detailed card component correctly displays the detailed card data', async () => {
        const { container, getByText } = render(
            <Router>
                <Details selectedTabPath='/people' />
            </Router>,
        );

        await waitFor(() => {
            expect(getByText('Details')).toBeInTheDocument();
        });

        expect(container).toMatchSnapshot();
    });

    test('Ensure that clicking the close button hides the component', async () => {
        render(
            <Router>
                <Details selectedTabPath='/people' />
            </Router>,
        );

        await waitFor(() => {
            expect(screen.getByText(/Details/i)).toBeInTheDocument();
        });

        fireEvent.click(screen.getByText(/X/i));

        await waitFor(() => {
            expect(screen.queryByText(/Details/i)).not.toBeInTheDocument();
        });
    });
});
