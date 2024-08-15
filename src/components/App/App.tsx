import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import AppRoutes from '../../routes/Routes';
import '../App/App.module.css';

function App() {
    return (
        <Router>
            <nav>
                <ul>
                    <li>
                        <Link to='/'>Main</Link>
                    </li>
                    <li>
                        <Link to='/uncontrolled'>Uncontrolled Form</Link>
                    </li>
                    <li>
                        <Link to='/controlled'>Controlled Form</Link>
                    </li>
                </ul>
            </nav>
            <AppRoutes />
        </Router>
    );
}

export default App;
