import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

import { Home } from "./pages/home";



export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/card" element={<Home />} />
            </Routes>
        </BrowserRouter>
    );
};
