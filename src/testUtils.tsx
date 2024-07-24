import React, { ReactElement } from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './store';
import { MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeProvider';

export const renderWithProvidersAndRouter = (ui: ReactElement, { route = '/' } = {}) => {
    return render(
        <Provider store={store}>
            <ThemeProvider>
                <MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>
            </ThemeProvider>
        </Provider>,
    );
};
