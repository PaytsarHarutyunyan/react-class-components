import React, { ReactElement } from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from './store';

import { ThemeProvider } from './context/ThemeContext';

export const renderWithProviders = (ui: ReactElement) => {
    return render(
        <Provider store={store}>
            <ThemeProvider>{ui}</ThemeProvider>
        </Provider>,
    );
};
