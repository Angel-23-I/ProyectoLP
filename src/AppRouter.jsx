import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage, CategoryPage, MapPage, PaisajesPage, CategoryPageImgs, GastronomiaPage } from "./pages";
import { Navbar } from "./components";


export const AppRouter = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/category/:category" element={<CategoryPage />} />
                <Route path="/map" element={<MapPage />} />
                <Route path="/paisajes" element={<PaisajesPage />} />
                <Route path="/category2/:category" element={<CategoryPageImgs />} />
                <Route path="/gastronomia" element={<GastronomiaPage />} />
            </Routes>
        </>
    );
};