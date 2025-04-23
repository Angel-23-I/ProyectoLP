import React from "react";
//import { Link } from "react-router-dom";
import { imgs, categories } from "../data2";
import { CategoryCard } from './CategoryCard';
import  MapCard  from "./MapCard";

const [
	imgRegiones,
] = imgs;

export const CategoryList = () => {
    return (
		<div className='flex flex-colum flex-wrap justify-center gap-4 mt-10'>
			<div className='flex flex-row flex-wrap justify-center gap-4 mt-10'>
				<h1 className="text-white">En esta version tenemos 1 modulo de aprendizaje y 1 de practicar, se van a agregar mas modulos de cada tipo en la versión final</h1>
			</div>
			<div className='flex flex-row flex-wrap justify-center gap-4 mt-10'>
			<h1 className="text-white text-2xl font-bold hover:scale-110 transition-all duration-500">Aprender</h1>
			{/* Category Link Geografia */}
			{/* Mapa como una tarjeta */}
			<MapCard />
			<MapCard />
			<MapCard />
			<MapCard />
			
			</div>
			<div className='flex flex-row flex-wrap justify-center gap-4 mt-10'>
			<h1 className="text-white text-2xl font-bold hover:scale-110 transition-all duration-500">Practicar</h1>
			{/* Category Link Geografia */}
			<CategoryCard 
				category={categories.regiones}
				src={imgRegiones}
				alt={`Categoría ${categories.regiones}`}
				gradientColor='from-cyan-200 to-lime-200'
			/>
			<CategoryCard 
				category={categories.regiones}
				src={imgRegiones}
				alt={`Categoría ${categories.regiones}`}
				gradientColor='from-cyan-200 to-lime-200'
			/>
			<CategoryCard 
				category={categories.regiones}
				src={imgRegiones}
				alt={`Categoría ${categories.regiones}`}
				gradientColor='from-cyan-200 to-lime-200'
			/>
			<CategoryCard 
				category={categories.regiones}
				src={imgRegiones}
				alt={`Categoría ${categories.regiones}`}
				gradientColor='from-cyan-200 to-lime-200'
			/>
			</div>
		</div>
	);
};