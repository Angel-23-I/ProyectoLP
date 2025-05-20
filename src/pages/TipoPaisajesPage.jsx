import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const paisajes = [
  { nombre_paisaje: 'playa', tipo: 'Natural', descripcion: 'Playa con arena y mar' },
  { nombre_paisaje: 'ciudad', tipo: 'Cultural', descripcion: 'Ciudad con edificios y calles' },
  { nombre_paisaje: 'montaña', tipo: 'Natural', descripcion: 'Montaña con nieve en la cima' },
  { nombre_paisaje: 'parque_diversiones', tipo: 'Cultural', descripcion: 'Parque con juegos mecánicos' },
  { nombre_paisaje: 'bosque', tipo: 'Natural', descripcion: 'Bosque con árboles y animales' },
  { nombre_paisaje: 'iglesia', tipo: 'Cultural', descripcion: 'Iglesia antigua en un pueblo' },
  { nombre_paisaje: 'rio', tipo: 'Natural', descripcion: 'Río que cruza un valle' },
  { nombre_paisaje: 'carretera', tipo: 'Cultural', descripcion: 'Carretera entre ciudades' },
  { nombre_paisaje: 'volcán', tipo: 'Natural', descripcion: 'Volcán rodeado de vegetación' },
  { nombre_paisaje: 'zona_arqueologica', tipo: 'Cultural', descripcion: 'Zona arqueológica con ruinas' },
];

export const TipoPaisajesPage = () => {
const naturales = paisajes.filter(p => p.tipo === 'Natural');
  const culturales = paisajes.filter(p => p.tipo === 'Cultural');

  return (
    <div style={{ padding: '2rem', backgroundColor: '#fffde7', minHeight: '100vh' }}>
      <h1 style={{ textAlign: 'center', color: '#d84315', fontSize: '2.5rem' }}>
        Explorando los Tipos de Paisaje
      </h1>
      <p style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '1.5rem' }}>
        Observa las diferencias entre los paisajes naturales y culturales
      </p>

      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '3rem' }}>
        {/* Naturales */}
        <div style={{ flex: 1 }}>
          <h2 style={{ color: '#388e3c', textAlign: 'center', fontSize: '2rem' }}>Naturales</h2>
          {naturales.map(p => (
            <div key={p.nombre_paisaje} style={cardRowStyle}>
              <img
                src={`/images/${p.nombre_paisaje}.png`}
                alt={p.descripcion}
                style={imgStyle}
              />
              <p style={descStyle}>{p.descripcion}</p>
            </div>
          ))}
        </div>

        {/* Culturales */}
        <div style={{ flex: 1 }}>
          <h2 style={{ color: '#1976d2', textAlign: 'center', fontSize: '2rem' }}>Culturales</h2>
          {culturales.map(p => (
            <div key={p.nombre_paisaje} style={cardRowStyle}>
              <img
                src={`/images/${p.nombre_paisaje}.png`}
                alt={p.descripcion}
                style={imgStyle}
              />
              <p style={descStyle}>{p.descripcion}</p>
            </div>
          ))}
        </div>
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

const cardRowStyle = {
  display: 'flex',
  alignItems: 'center',
  backgroundColor: 'white',
  borderRadius: '1rem',
  padding: '1rem',
  margin: '1rem 0',
  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  gap: '1.5rem',
};

const imgStyle = {
  width: '120px',
  height: 'auto',
  borderRadius: '0.5rem',
};

const descStyle = {
  fontSize: '1.4rem',
  color: '#333',
  margin: 0,
};




