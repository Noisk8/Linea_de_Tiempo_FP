import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Timeline from "../Paginas/Timeline";
import Notas from "../Paginas/Notas";
import Linea1 from "../Paginas/Linea1";
import Linea2 from "../Paginas/momentos/Linea2";
import Linea3 from "../Paginas/momentos/Linea3";
import Linea4 from "../Paginas/momentos/Linea4";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center w-full max-w-4xl mx-auto pt-16 ">
        <h1 className="text-6xl font-bold mb-4 text-center w-full p-8">
          ⚽ Futbol y Presidentes en Colombia 🇨🇴  ⚽
        </h1>
        <ThemeSwitch />
      </div>

      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="timeline" element={<Timeline />} />
            <Route path="notas" element={<Notas />} />
            <Route path="linea1" element={<Linea1 />} />
            <Route path="linea2" element={<Linea2 />} />
            <Route path="linea3" element={<Linea3 />} />
            <Route path="linea4" element={<Linea4 />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default Header;