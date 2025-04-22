// src/pages/MapPage.jsx
import React, { useEffect } from "react";

export const MapPage = () => {
  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src = "/simplemap/mapdata.js";
    script1.async = true;

    const script2 = document.createElement("script");
    script2.src = "/simplemap/countrymap.js";
    script2.async = true;

    document.body.appendChild(script1);
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    /**<div className="p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Mapa Interactivo de Colombia</h1>
      <div id="map" style={{ width: "100%", height: "600px" }}></div>
    </div>**/
    <div className="flex-grow flex flex-col items-center justify-start min-h-screen bg-cyan-600">
			<h1 className="text-3xl font-bold text-center mt-6 text-white">Mapa de Colombia</h1>
			<div id="map" className="w-full max-w-4xl h-[600px] mx-auto bg-cyan-600" />
	</div>
  );
};

export default MapPage;