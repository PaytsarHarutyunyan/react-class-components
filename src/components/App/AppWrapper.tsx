import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';
import store from '@/store';
import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from '../../context/ThemeProvider';

const AppWrapper = () => {
    return (
        <Router>
            <ThemeProvider>
                <Provider store={store}>
                    <ErrorBoundary>
                        <App />
                    </ErrorBoundary>
                </Provider>
            </ThemeProvider>
        </Router>
    );
};

export default AppWrapper;
