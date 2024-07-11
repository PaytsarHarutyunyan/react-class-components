// index.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import AppWrapper from './components/App/AppWrapper.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <AppWrapper />
    </React.StrictMode>,
);
