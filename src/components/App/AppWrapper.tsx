import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorBoundary from '../ErrorBoundary/ErrorBoundary';

const AppWrapper = () => {
    return (
        <Router>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </Router>
    );
};

export default AppWrapper;
