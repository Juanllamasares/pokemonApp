import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { MyPokemons } from "../pages/MyPokemons";
import { PokemonPage } from "../pages/PokemonPage";

export const PokemonsRoutes = () => {
  return (
    
      <Routes>
        <Route path="/*" element={<HomePage />} />
        <Route path="/pokemon/:id" element={<PokemonPage />} />
        <Route path="/mypokemons" element={<MyPokemons />} />
      </Routes>
  
  );
};
