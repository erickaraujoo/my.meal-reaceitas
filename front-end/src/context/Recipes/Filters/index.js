import React, { useState, useEffect, useContext, createContext } from "react";
import { useDispatch } from "react-redux";

import { fetchRecipes } from "./../../../store/modules/recipes/actions";

const FiltersContext = createContext();

export default function FiltersProvider({ children }) {
  const dispatch = useDispatch();
  const [category, setCategory] = useState("");
  const [ordenation, setOrdenation] = useState("default");
  const [search, setSearch] = useState("");
  const [ingredient, setIngredient] = useState([]);
  const [page] = useState(0);

  useEffect(() => {
    dispatch(fetchRecipes(category, ordenation, search, ingredient, page));
  }, [category, ordenation, search, ingredient, page, dispatch]);

  return (
    <FiltersContext.Provider
      value={{
        category,
        setCategory,
        ingredient,
        setIngredient,
        ordenation,
        setOrdenation,
        search,
        setSearch,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}

export function useCategory() {
  const context = useContext(FiltersContext);
  const { category, setCategory } = context;
  return { category, setCategory };
}

export function useIngredients() {
  const context = useContext(FiltersContext);
  const { ingredient, setIngredient } = context;
  return { ingredient, setIngredient };
}

export function useOrdenation() {
  const context = useContext(FiltersContext);
  const { ordenation, setOrdenation } = context;
  return { ordenation, setOrdenation };
}

export function useSearch() {
  const context = useContext(FiltersContext);
  const { search, setSearch } = context;
  return { search, setSearch };
}

export function useStates() {
  const context = useContext(FiltersContext);
  const {
    category,
    setCategory,
    ingredient,
    setIngredient,
    ordenation,
    setOrdenation,
    search,
    setSearch,
  } = context;

  return {
    category,
    setCategory,
    ingredient,
    setIngredient,
    ordenation,
    setOrdenation,
    search,
    setSearch,
  };
}
