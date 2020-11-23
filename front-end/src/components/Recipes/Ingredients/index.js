import React from "react";

import { FilterByIngredient } from "./styles";

import ImageFilter from "./../../../assets/recipes/filter.png";

import { useDisplay } from "./../../../context/Modal/ModalRecipes";

export default function FilterByIngredients() {
  const { setOnScreen } = useDisplay();

  const handleScreen = value => setOnScreen(value);

  return (
    <>
      <FilterByIngredient className="filter-ingredients" onClick={() => handleScreen(true)}>
        <img src={ImageFilter} alt={"Filtro"} />
        <p>Filtrar por ingrediente</p>
      </FilterByIngredient>
    </>
  );
}
