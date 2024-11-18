import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import Layout from "./Layout";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between items-center w-full max-w-4xl mx-auto pt-16">
        <h1 className="text-6xl font-bold mb-4 text-center w-full p-8 leading-relaxed">
          <a href="/">⚽ Los presidentes y el fútbol en Colombia 🇨🇴 ⚽</a>
        </h1>
        <ThemeSwitch />
      </div>
      <Layout />
    </div>
  );
};

export default Header;