import React, { useState } from "react";
import { Link } from "react-router-dom"; 
import './Timeline.css';
import { Routes, Route } from "react-router-dom";
import Linea1 from "./momentos/Linea1";
import Linea2 from "./momentos/Linea2"; 
import Linea3 from "./momentos/Linea3";
import Linea4 from "./momentos/Linea4";

const Timeline = () => {



  const [expandedIndex, setExpandedIndex] = useState(null);

  const events = [
    {
      date: "1892 ⚽",
      title: "Miguel Antonio Caro",
      subtitle: "Primer partido de futból en Colombia",
      description:
        "Este presidente creo  las escuelas militares, en Junio de 1892, hace el primer partido del que se data en Colombia, creo  <br />  <br /> las escuelas militares,  en Junio de 1892  hace el primer partido del que se data en Colombia, creo  las escuelas militares, en Junio de 1892, hace el primer partido del que se data en Colombia ",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/5/5c/Miguel_Antonio_Caro_2.jpg",
      link: "/Linea1",
    },
    {
      date: "⚽ 1904",
      title: "Jose Manuel Marroquin",
      subtitle: "Nace el Decreto 419/3 ",
      description:
        "Crea el decreto 419/3, a partir de esto apareci el concepto de Educación Fisica",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/f/f2/Jos%C3%A9_Manuel_Marroqu%C3%ADn.jpg",
      link: "/Linea2",
    },
    {
      date: "1912 ⚽",
      title: "Carlos E Restrepo",
      subtitle: "Aplica el decreto 419",
      description:
        "Aplica el decreto 419, empieza a organizar  campeonatos deportivos, El primer campeonato de futbol del pais lo creo El y se llamo la Copa Carlos E Restrepo",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/2/2d/Carlos_Eugenio_Restrepo%2C_1918.jpg",
      link: "/Linea3",
    },
    {
      date: "⚽ 1925",
      title: "Pedro Nel Ospina",
      subtitle: "Ley 80 ",
      description:
        "Definio las comiciones nacionales de educación fisica, lo que años después pasaría a ser Coldeportes y despues el Ministerio de Deporte .",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/2/25/Gen._Pedro_Nel_Ospina%2C_Pres._Colombia_%28LOC%29.jpg",
        link: "/Linea4",
    },
    {
      date: "⚽ 1926",
      title: "Miguel Abadia Mendez",
      subtitle: "Primeras Olimpiadas de Colobia / Masacre de las bananeras",
      description:
        "Presiente de las masacres bananeras, Se dieron las primeras Olimpiadas que gano el Magdalena, habian reclamos  de los jugadores del equipo porqué habian familiares de ellos que fueron victimas de la masacre",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/f/f6/Miguel_Abad%C3%ADa_M%C3%A9ndez.jpg",
        link: "/Linea1",
    },
    {
      date: "⚽ 1930",
      title: "Enrique Olaya Herrera",
      subtitle: "Empieza la construcción de Estadios",
      description:
        "Es esta epoca se da la construcción de varios estadios en el pais, En la Epoca de EL FUTBÓL MARRON, una epoca de futbol descentralizado",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/7/7d/Enrique_Olaya_Herrera_by_Benjam%C3%ADn_de_la_Calle_%281910%29.jpg",
        link: "/Linea1",
    },
    {
      date: "⚽ 1946",
      title: "Mariano Ospina",
      subtitle: "El Bogotazo/ Pan y Circo",
      description:
        "Descripción larga del Evento 5. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://via.placeholder.com/150",
      link: "/Linea1",
    },
    {
      date: "⚽ 1962",
      title: "Alberto Lleras Camargo",
      subtitle: "Subtítulo 5",
      description:
        "Descripción larga del Evento 5. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://via.placeholder.com/150",
      link: "https://www.youtube.com/watch?v=ytvR7Y5d_lY",
    },
    {
      date: "⚽ 1968",
      title: "Carlos Lleras Restrepo",
      subtitle: "Subtítulo 5",
      description:
        "Descripción larga del Evento 5. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "https://via.placeholder.com/150",
      link: "https://www.youtube.com/watch?v=ytvR7Y5d_lY",
    },
  ];

  const toggleDescription = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="timeline relative flex flex-col items-center px-4 pt-8">
      <div className="absolute w-1 bg-gray-300 dark:bg-gray-600 h-full left-1/2 transform -translate-x-1/2"></div>
      {events.map((event, index) => (
        <div key={index} className="max-w-2xl w-full">
          <div
            className={`timeline-item flex flex-col items-center mb-16 w-full ${
              index % 2 === 0 ? "items-start" : "items-end"
            }`}
          >
            <button
              className={`timeline-date text-4xl bg-gray-200 font-bold dark:bg-gray-700 text-gray-700 dark:text-gray-300 py-1 px-3 rounded-full mb-4 ${
                index % 2 === 0 ? "mr-16 -ml-16" : "ml-16 -mr-16"
              }`}
            >
              {event.date}
            </button>
            <div
              className={`timeline-content bg-light-card dark:bg-dark-card text-light-text dark:text-dark-text p-4 rounded-lg shadow-md relative hover:shadow-lg transition-shadow duration-300 w-full`}
            >
              <h3 className="text-4xl font-bold mb-2 text-center pb-4 pt-4 text-yellow-700 ">
                {event.title}
              </h3>
              <img
                src={event.image}
                alt={event.title}
                className="mb-2 w-full h-auto"
              />
              <h4
                className="text-lg font-semibold mb-2 cursor-pointer text-center pt-8 pb-4 text-yellow-700 hover:text-yellow-900 "
                onClick={() => toggleDescription(index)}
              >
                {event.subtitle}
              </h4>
              {expandedIndex === index && (
                <div>
                  {" "}
                  <p
                    className="text-justify text-xl pb-8"
                    dangerouslySetInnerHTML={{ __html: event.description }}
                  ></p>
                  <a
                    href={event.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Link to={event.link}> </Link>
                    <button className="m-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300">
                      Ver más
                    </button>
                  </a>
                </div>
              )}
            </div>
          </div>
          <Routes>
         <Route path="linea1" element={<Linea1 />} />
            <Route path="linea2" element={<Linea2 />} />
            <Route path="linea3" element={<Linea3 />} />
            <Route path="linea4" element={<Linea4 />} />
        </Routes>

        </div>
      ))}
    </div>
  );
};

export default Timeline;
