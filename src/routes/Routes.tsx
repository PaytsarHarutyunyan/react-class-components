import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import UncontrolledFormPage from '../pages/UncontrolledFormPage';
import ControlledFormPage from '../pages/ControlledFormPage';

function AppRoutes() {
    return (
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/uncontrolled' element={<UncontrolledFormPage />} />
            <Route path='/controlled' element={<ControlledFormPage />} />
        </Routes>
    );
}

export default AppRoutes;
