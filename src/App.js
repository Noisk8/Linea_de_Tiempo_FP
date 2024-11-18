import React from "react";
import "./index.css";
import Footer from "./Componentes/Footer";
import Header from "./Componentes/Header";
import Home from "./Paginas/Home";
import { Routes, Route } from "react-router-dom";
import Linea1 from "./Paginas/Linea1";
import Linea2 from "./Paginas/Linea2";
import Linea3 from "./Paginas/Linea3";
import Linea4 from "./Paginas/Linea4";
import Notas from "./Paginas/Notas";
import Timeline from "./Paginas/Timeline";
import Referencias from "./Paginas/Referencias";



function App() {
  return (
    <div className="App bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text min-h-screen flex flex-col items-center">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/notas" element={<Notas />} />
        <Route path="/referencias" element={<Referencias />} />
        <Route path="/linea1" element={<Linea1 />} />
        <Route path="/linea2" element={<Linea2 />} />
        <Route path="/linea3" element={<Linea3 />} />
        <Route path="/linea4" element={<Linea4 />} />
      </Routes>


      <Footer />
    </div>
  );
}

export default App;
