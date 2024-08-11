import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from '../app/not-found/page';

describe('NotFound Component', () => {
    test('renders 404 message', () => {
        render(<NotFound />);
        expect(screen.getByText('404 - Not Found')).toBeInTheDocument();
        expect(
            screen.getByText('The page you are looking for does not exist.'),
        ).toBeInTheDocument();
    });
});
