import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

import { Home } from "./pages/home";
import { ShoppingCart } from "./pages/ShoppingCart"; // Verifique se o nome está correto
// Se for usar MovieCard, adicione uma rota para ele
// import { MovieCard } from "./pages/category"; 

export const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/card" element={<Home />} />
                <Route path="/shoppingCart" element={<ShoppingCart/>} />
                {/* Adicione a rota para MovieCard se necessário */}
                {/* <Route path="/movie/:id" element={<MovieCard />} /> */}
            </Routes>
        </BrowserRouter>
    );
};
