'use client'; // Add this line to mark the component as a Client Component

import React from 'react';
import { Provider } from 'react-redux';
import store from '@/store';
import { ThemeProvider } from '../../context/ThemeContext';
import ErrorBoundary from '@/components/ErrorBoundary';
import ListWrapper from '../List/ListWrapper';
import { Result } from '@/types';

const MainPageWrapper: React.FC<{ itemListData: Result; itemDetails?: Record<string, unknown> }> = (
    props,
) => {
    return (
        <ThemeProvider>
            <ErrorBoundary>
                <Provider store={store}>
                    <ListWrapper {...props} />
                </Provider>
            </ErrorBoundary>
        </ThemeProvider>
    );
};

export default MainPageWrapper;
