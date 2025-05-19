import { Link } from "react-router-dom";
import React from "react";

export const CategoryCardImg = ({
	category,
	alt,
	src,
	gradientColor,
}) => {
	return (
		<Link
			to={`/category2/${category}`}
			className={`flex flex-col justify-between basis-1/4 bg-slate-500 rounded-2xl overflow-hidden bg-gradient-to-r ${gradientColor} transition-all hover:scale-105`}
		>
			<div className='flex-grow relative'>
				<img
					src={src}
					alt={alt}
					className='object-cover w-full h-full'
				/>
			</div>

			<h1 className='text-2xl font-semibold text-stone-100 bg-green-600 bg-opacity-60 p-3 px-5'>
				{category}
			</h1>
		</Link>
	);
};
