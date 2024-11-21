import React from "react";

const Tarjeta = ({ titulo, imagen, parrafos, imagenesAdicionales = [], descripcionesAdicionales = [], links = [] }) => {
    // Combine paragraphs and additional images into a single array
    const combinedContent = [];
    const maxLength = Math.max(parrafos.length, imagenesAdicionales.length);

    for (let i = 0; i < maxLength; i++) {
        if (parrafos[i]) {
            combinedContent.push({ type: 'parrafo', content: parrafos[i] });
        }
        if (imagenesAdicionales[i]) {
            combinedContent.push({ type: 'imagen', content: imagenesAdicionales[i], descripcion: descripcionesAdicionales[i], link: links[i] });
        }
    }

    return (
        <div className="bg-light-card dark:bg-gray-800 shadow-md rounded-lg overflow-hidden max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100 text-center">{titulo}</h2>
            <img src={imagen} alt={titulo} className="w-1/2 h-1/2 mx-auto" />
            <div className="p-6">
                {combinedContent.map((item, index) => {
                    if (item.type === 'parrafo') {
                        return (
                            <p
                                key={index}
                                className="text-gray-700 dark:text-gray-300 mb-2 text-2xl"
                                dangerouslySetInnerHTML={{ __html: item.content }}
                            />
                        );
                    } else if (item.type === 'imagen') {
                        return (
                            <div key={index} className="mb-4">
                                <img src={item.content} alt={`${titulo} adicional ${index + 1}`} className="w-1/2 h-1/2 mx-auto" />
                                {item.descripcion && (
                                    <p className="text-gray-600 dark:text-gray-400 text-center mt-2 text-sm">
                                        <a href={item.link} className="text-blue-500 hover:underline" target="_blank">
                                            {item.descripcion}
                                        </a>
                                    </p>
                                )}
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    );
};

export default Tarjeta;