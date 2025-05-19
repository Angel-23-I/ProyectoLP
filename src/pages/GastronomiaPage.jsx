import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const platos = [
    {
        nombre: 'Arepa de huevo',
        region: 'Caribe',
        descripcion: 'Una arepa frita rellena con un huevo, típica del Caribe colombiano.',
    },
    {
        nombre: 'Sancocho de pescado',
        region: 'Caribe',
        descripcion: 'Una sopa deliciosa hecha con pescado y verduras, popular en la costa.',
    },
    {
        nombre: 'Ajiaco',
        region: 'Andina',
        descripcion: 'Una sopa espesa con pollo, papa y mazorca muy tradicional de Bogotá.',
    },
    {
        nombre: 'Bandeja paisa',
        region: 'Andina',
        descripcion: 'Un plato abundante con frijoles, arroz, carne, chicharrón y huevo.',
    },
    {
        nombre: 'Encocado de pescado',
        region: 'Pacífico',
        descripcion: 'Pescado cocinado con leche de coco y especias, típico del Pacífico.',
    },
    {
        nombre: 'Arroz con camarones',
        region: 'Pacífico',
        descripcion: 'Plato sabroso de arroz mezclado con camarones y condimentos.',
    },
    {
        nombre: 'Mamona',
        region: 'Orinoquía',
        descripcion: 'Carne asada al estilo llanero, tradicional en los Llanos orientales.',
    },
    {
        nombre: 'Hayacas',
        region: 'Orinoquía',
        descripcion: 'Masa rellena de carne, envuelta en hojas y cocida lentamente.',
    },
    {
        nombre: 'Mojojoy',
        region: 'Amazonía',
        descripcion: 'Larva comestible considerada un manjar exótico de la selva.',
    },
    {
        nombre: 'Pescado moqueado',
        region: 'Amazonía',
        descripcion: 'Pescado envuelto en hojas y cocido al fuego lento, típico del Amazonas.',
    },
    {
        nombre: 'Rondon',
        region: 'Insular',
        descripcion: 'Plato isleño con pescado, plátano y leche de coco.',
    },
    {
        nombre: 'Empanadas de cangrejo',
        region: 'Insular',
        descripcion: 'Empanadas rellenas de cangrejo, típicas de las islas del Caribe colombiano.',
    },
];

export const GastronomiaPage = () => {
    const [paginaActual, setPaginaActual] = useState(1);
    const platosPorPagina = 6;

    const totalPaginas = Math.ceil(platos.length / platosPorPagina);
    const inicio = (paginaActual - 1) * platosPorPagina;
    const platosEnPagina = platos.slice(inicio, inicio + platosPorPagina);

    const formatearNombre = (nombre) =>
        nombre.toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/\s+/g, '-');

    return (
        <div className="min-h-screen bg-yellow-100 p-10">
            <h1 className="text-4xl font-bold text-center text-orange-700 mb-10">
                Descubre la Gastronomía de Colombia
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {platosEnPagina.map((plato) => (
                    <div
                        key={plato.nombre}
                        className="bg-white rounded-2xl shadow-lg p-5 text-center transition hover:scale-105"
                    >
                        <img
                            src={`/images/${formatearNombre(plato.nombre)}.png`}
                            alt={plato.nombre}
                            className="w-full h-48 object-contain mb-4"
                        />
                        <h2 className="text-xl font-bold text-orange-600">{plato.nombre}</h2>
                        <p className="text-sm text-gray-500 italic mb-2">Región: {plato.region}</p>
                        <p className="text-gray-700">{plato.descripcion}</p>
                    </div>
                ))}
            </div>

            {/* Navegación de páginas */}
            <div className="flex justify-center gap-4 mt-10">
                <button
                    className={`px-4 py-2 rounded-lg font-semibold ${paginaActual === 1 ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-orange-500 text-white hover:bg-orange-600'}`}
                    onClick={() => setPaginaActual(paginaActual - 1)}
                    disabled={paginaActual === 1}
                >
                    ← Anterior
                </button>
                <span className="text-lg font-bold text-orange-700">
                    Página {paginaActual} de {totalPaginas}
                </span>
                <button
                    className={`px-4 py-2 rounded-lg font-semibold ${paginaActual === totalPaginas ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-orange-500 text-white hover:bg-orange-600'}`}
                    onClick={() => setPaginaActual(paginaActual + 1)}
                    disabled={paginaActual === totalPaginas}
                >
                    Siguiente →
                </button>
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