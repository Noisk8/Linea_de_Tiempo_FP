import React, { useState } from 'react';

const Timeline = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const events = [
    { date: '1892', title: 'Miguel Antonio Caro', subtitle: 'Primer partido de futból en Colombia', description: 'Este presidente creo  las escuelas militares, en Junio de 1892, hace el primer partido del que se data en Colombia, ', image: 'https://via.placeholder.com/150' },
    { date: '1904', title: 'Jose Manuel Marroquin', subtitle: 'Nace el Decreto 419/3 ', description: 'Crea el decreto 419/3, a partir de esto apareci el concepto de Educación Fisica', image: 'https://via.placeholder.com/150' },
    { date: '1912', title: 'Carlos E Restrepo', subtitle: 'Aplica el decreto 419', description: 'Aplica el decreto 419, empieza a organizar  campeonatos deportivos, El primer campeonato de futbol del pais lo creo El y se llamo la Copa Carlos E Restrepo', image: 'https://via.placeholder.com/150' },
    { date: '1925', title: 'Pedro Nel Ospina', subtitle: 'Ley 80 ', description: 'Definio las comiciones nacionales de educación fisica, lo que años después pasaría a ser Coldeportes y despues el Ministerio de Deporte .', image: 'https://via.placeholder.com/150' },
    { date: '1926', title: 'Miguel Abadia Mendez', subtitle: 'Primeras Olimpiadas de Colobia / Masacre de las bananeras', description: 'Presiente de las masacres bananeras, Se dieron las primeras Olimpiadas que gano el Magdalena, habian reclamos  de los jugadores del equipo porqué habian familiares de ellos que fueron victimas de la masacre', image: 'https://via.placeholder.com/150' },
  
    { date: '1998', title: 'Título 5', subtitle: 'Subtítulo 5', description: 'Descripción larga del Evento 5. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: 'https://via.placeholder.com/150' },
  
    { date: '1998', title: 'Título 5', subtitle: 'Subtítulo 5', description: 'Descripción larga del Evento 5. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', image: 'https://via.placeholder.com/150' },
  ];

  const toggleDescription = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="timeline relative flex flex-col items-center px-4">
      <div className="absolute w-1 bg-gray-300 dark:bg-gray-600 h-full left-1/2 transform -translate-x-1/2"></div>
      {events.map((event, index) => (
        <div key={index} className={`timeline-item flex flex-col items-center mb-16 w-full max-w-md ${index % 2 === 0 ? 'items-start' : 'items-end'}`}>
          <button className={`timeline-date bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-1 px-3 rounded-full mb-4 ${index % 2 === 0 ? 'mr-8 -ml-8' : 'ml-8 -mr-8'}`}>{event.date}</button>
          <div className={`timeline-content bg-light-card dark:bg-dark-card text-light-text dark:text-dark-text p-4 rounded-lg shadow-md relative hover:shadow-lg transition-shadow duration-300 max-w-xs`}>
            <h3 className="text-xl font-bold mb-2">{event.title}</h3>
            <img src={event.image} alt={event.title} className="mb-2 w-full h-auto" />
            <h4 className="text-lg font-semibold mb-2 cursor-pointer" onClick={() => toggleDescription(index)}>{event.subtitle}</h4>
            {expandedIndex === index && <p className="transition-all duration-300">{event.description}</p>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;