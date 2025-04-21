import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <header className="bg-white py-5 flex justify-center">
            <Link to="/">
                <h1 className="text-black text-2xl font-bold hover:scale-110 transition-all duration-500">Aprendiendo sobre mi geografía</h1>
            </Link>
        </header>
    );
};