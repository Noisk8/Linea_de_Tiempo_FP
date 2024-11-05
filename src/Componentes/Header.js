import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Timeline from "../Paginas/Timeline";
import Notas from "../Paginas/Notas";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center w-full max-w-4xl mx-auto pt-16 ">
        <h1 className="text-3xl font-bold mb-4 text-center w-full p-8">
          ⚽ Futbol y Presidentes en Colombia ⚽
        </h1>
        <ThemeSwitch />
      </div>

      <div>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route  path="timeline" element={<Timeline />} />
            <Route path="notas" element={<Notas />} />
         
          </Route>
        </Routes>
      </div>
    </div>
  );
};

export default Header;