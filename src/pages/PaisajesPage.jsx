import paisajes from '../paisajesData.js';
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export const PaisajesPage = () => {
  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <h1 className="text-4xl font-bold text-center text-green-700 mb-8">
        Tipos de Paisajes Naturales
      </h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {paisajes.map((paisaje) => (
          <div
            key={paisaje.nombre}
            className="bg-white rounded-xl shadow-md overflow-hidden transform hover:scale-105 transition-all"
          >
            <img
              src={paisaje.imagen}
              alt={paisaje.nombre}
              className="w-full h-36 object-cover"
            />
            <div className="p-3 text-center bg-yellow-100">
              <h2 className="text-lg font-semibold text-gray-800">{paisaje.nombre}</h2>
              <p className="text-sm text-gray-600">{paisaje.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <Link
          to="/"
          className="bg-green-600 text-white px-5 py-2 rounded-full hover:bg-green-700 transition"
        >
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
};

