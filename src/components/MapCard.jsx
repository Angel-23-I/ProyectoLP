// src/components/MapCard.jsx
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export const MapCard = () => {
	useEffect(() => {
		const script1 = document.createElement("script");
		script1.src = "/simplemap/mapdata.js";
		script1.async = false;
		document.body.appendChild(script1);

		const script2 = document.createElement("script");
		script2.src = "/simplemap/countrymap.js";
		script2.async = false;
		document.body.appendChild(script2);

		return () => {
			document.body.removeChild(script1);
			document.body.removeChild(script2);
		};
	}, []);

	return (
		<Link
      to="/map"
      className="flex flex-col justify-between basis-1/4 bg-slate-500 rounded-2xl overflow-hidden bg-gradient-to-r from-yellow-300 to-orange-400 transition-all hover:scale-105"
    >
	  <div className='flex-grow relative'>
				<img
					src="/images/regiones.png"
					alt="Mapa interactivo"
					className='object-cover w-full h-full'
				/>
		</div>
      <h1 className="text-2xl font-semibold text-stone-100 bg-orange-600 bg-opacity-60 p-3 px-5">
        Explorar Mapa
      </h1>
    </Link>
	);
};

export default MapCard;