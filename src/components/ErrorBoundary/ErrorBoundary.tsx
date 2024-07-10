import React, { Component, ErrorInfo, ReactNode } from 'react';
import styles from '../ErrorBoundary/ErrorBoundary.module.css';

interface ErrorBoundaryState {
    hasError: boolean;
}

interface ErrorBoundaryProps {
    children: ReactNode;
}

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    state: ErrorBoundaryState = {
        hasError: false,
    };

    static getDerivedStateFromError() {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Error caught by ErrorBoundary: ', error, errorInfo);
    }

    handleThrowError = () => {
        this.setState({
            hasError: true,
        });
        throw new Error('Test error thrown');
    };

    render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h1>Something went wrong.</h1>
                    <button onClick={() => window.location.reload()}>Reload</button>
                </div>
            );
        }

        return (
            <div>
                {this.props.children}
                <button className={styles.error} onClick={this.handleThrowError}>
                    Throw Error
                </button>
            </div>
        );
    }
}
