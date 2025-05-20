import React from "react";
import { Link } from "react-router-dom";
import { imgs, categories } from "../data2";
import { CategoryCard } from './CategoryCard';
import MapCard from "./MapCard";
import { CategoryCardImg } from "./CategoryCardImg";

const [
	imgRegiones,
	imgPaisaje,
	imgGastronomia,
	imgTipo_de_Paisaje
] = imgs;

export const CategoryList = () => {
	return (
		<div className='flex flex-colum flex-wrap justify-center gap-4 mt-10'>
			<div className='flex flex-row flex-wrap justify-center gap-4 mt-10'>
				
			</div>
			<div className='flex flex-row flex-wrap justify-center gap-4 mt-10'>
				<h1 className="text-white text-2xl font-bold hover:scale-110 transition-all duration-500">Aprender</h1>
				{/* Category Link Geografia */}
				{/* Mapa como una tarjeta */}
				<MapCard />
				<Link
					to="/paisajes"
					className="flex flex-col justify-between basis-1/4 bg-slate-500 rounded-2xl overflow-hidden bg-gradient-to-r from-yellow-300 to-orange-400 transition-all hover:scale-105"
				>
					<div className='flex-grow relative'>
						<img
							src="/images/paisaje.png"
							alt="Paisajes"
							className='object-cover w-full h-full'
						/>
					</div>
					<h1 className="text-2xl font-semibold text-stone-100 bg-orange-600 bg-opacity-60 p-3 px-5">
						Paisajes Naturales
					</h1>
				</Link>
				<Link
					to="/gastronomia"
					className="flex flex-col justify-between basis-1/4 bg-slate-500 rounded-2xl overflow-hidden bg-gradient-to-r from-yellow-300 to-orange-400 transition-all hover:scale-105"
				>
					<div className='flex-grow relative'>
						<img
							src="/images/gastronomia.png"
							alt="Gastronomia"
							className='object-cover w-full h-full'
						/>
					</div>
					<h1 className="text-2xl font-semibold text-stone-100 bg-orange-600 bg-opacity-60 p-3 px-5">
						Gastronomia
					</h1>
				</Link>
				<Link
					to="/tipo-paisajes"
					className="flex flex-col justify-between basis-1/4 bg-slate-500 rounded-2xl overflow-hidden bg-gradient-to-r from-yellow-300 to-orange-400 transition-all hover:scale-105"
				>
					<div className='flex-grow relative'>
						<img
							src="/images/tipo-de-paisaje.png"
							alt="Gastronomia"
							className='object-cover w-full h-full'
						/>
					</div>
					<h1 className="text-2xl font-semibold text-stone-100 bg-orange-600 bg-opacity-60 p-3 px-5">
						Paisajes naturales y culturales
					</h1>
				</Link>


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
					category={categories.paisaje}
					src={imgPaisaje}
					alt={`Categoría ${categories.paisaje}`}
					gradientColor='from-cyan-200 to-lime-200'
				/>
				<CategoryCardImg
					category={categories.gastronomia}
					src={imgGastronomia}
					alt={`Categoría ${categories.gastronomia}`}
					gradientColor='from-cyan-200 to-lime-200'
				/>
				<CategoryCard
					category={categories.tipopaisaje}
					src={imgTipo_de_Paisaje}
					alt={`Categoría ${categories.tipopaisaje}`}
					gradientColor='from-cyan-200 to-lime-200'
				/>
			</div>
		</div>
	);
};