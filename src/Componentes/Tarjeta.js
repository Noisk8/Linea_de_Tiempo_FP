import React from "react";

const Tarjeta = ({ titulo, imagen, parrafos, imagenesAdicionales = [], descripcionesAdicionales = [] , links = []}) => {
    return (
        <div className="bg-light-card dark:bg-gray-800 shadow-md rounded-lg overflow-hidden max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100 text-center">{titulo}</h2>
            <img src={imagen} alt={titulo} className="w-1/2 h-1/2 mx-auto" />
            <div className="p-6">
                {parrafos.map((parrafo, index) => (
                    <p 
                        key={index} 
                        className="text-gray-700 dark:text-gray-300 mb-2 text-2xl"
                        dangerouslySetInnerHTML={{ __html: parrafo }}
                    />
                ))}
                {imagenesAdicionales.length > 0 && (
                    <div className="mt-4">
                        {imagenesAdicionales.map((img, index) => (
                            <div key={index} className="mb-4">
                                <img src={img} alt={`${titulo} adicional ${index + 1}`} className="w-1/2 h-1/2 mx-auto" />
                                {descripcionesAdicionales[index] && (
                                    <p className="text-gray-600 dark:text-gray-400 text-center mt-2 text-sm">
                                        <a href={links[index]}  className="text-blue-500 hover:underline" target="_blank">
                                            {descripcionesAdicionales[index]}
                                        </a>
                                    </p>

                                
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Tarjeta;