import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import store from '@/store';
import ErrorBoundary from '@/components/ErrorBoundary/ErrorBoundary';
import { ThemeProvider } from '@/context/ThemeProvider';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <ThemeProvider>
            <Provider store={store}>
                <ErrorBoundary>
                    <Component {...pageProps} />
                </ErrorBoundary>
            </Provider>
        </ThemeProvider>
    );
};

export default MyApp;
