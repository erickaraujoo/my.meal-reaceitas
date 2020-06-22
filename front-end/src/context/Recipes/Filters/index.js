import React, { useState, useEffect, useContext, createContext } from "react";
import { useDispatch } from "react-redux";

import { fetchRecipes } from "./../../../store/modules/recipes/actions";

const FiltersContext = createContext();

export default function FiltersProvider({ children }) {
  const dispatch = useDispatch();
  const [category, setCategory] = useState(1);
  const [sort, setSort] = useState("default");
  const [search, setSearch] = useState("");
  const [ingredient, setIngredient] = useState([]);
  const [page] = useState(0);
  const [size] = useState(10);

  useEffect(() => {
    dispatch(fetchRecipes(category, search, ingredient, page, size, sort));
  }, [category, sort, search, ingredient, page, size, dispatch]);

  return (
    <FiltersContext.Provider
      value={{
        category,
        setCategory,
        ingredient,
        setIngredient,
        sort,
        setSort,
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
  const { sort, setSort } = context;
  return { sort, setSort };
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
    sort,
    setSort,
    search,
    setSearch,
  } = context;

  return {
    category,
    setCategory,
    ingredient,
    setIngredient,
    sort,
    setSort,
    search,
    setSearch,
  };
}
