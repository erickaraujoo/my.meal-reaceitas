import React from "react";

import { FilterByIngredient } from './styles';

// import { useIngredients } from '../../../context/Recipes/Filters';

import ImageFilter from './../../../assets/recipes/filter.png';

export default function FilterByIngredients() {

  // const { ingredients, setIngredients } = useIngredients();

  return (
    <FilterByIngredient className="filter-ingredients">
      <img src={ImageFilter} alt={'Filtro'}/>
      <p>Filtrar por ingrediente</p>
    </FilterByIngredient>
  );
}