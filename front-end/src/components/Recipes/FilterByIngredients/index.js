import React from "react";

import { FilterByIngredient } from "./styles";

import ImageFilter from "./../../../assets/recipes/filter.png";

export default function FilterByIngredients() {
  return (
    <FilterByIngredient className="filter-ingredients">
      <img src={ImageFilter} alt={"Filtro"} />
      <p>Filtrar por ingrediente</p>
    </FilterByIngredient>
  );
}
