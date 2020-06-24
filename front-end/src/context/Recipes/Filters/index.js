import React, { useState, useEffect, useContext, createContext } from "react";
import { useDispatch } from "react-redux";

import { fetchRecipes } from "./../../../store/modules/recipes/actions";

const FiltersContext = createContext();

export default function FiltersProvider({ children }) {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [ingredient, setIngredient] = useState([]);
  const [size] = useState(10);

  useEffect(() => {
    dispatch(
      fetchRecipes({ category, search, ingredient, currentPage, size, sort })
    );
  }, [category, currentPage, dispatch, ingredient, search, size, sort]);

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
        currentPage,
        setCurrentPage,
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

export function useCurrentPage() {
  const context = useContext(FiltersContext);
  const { currentPage, setCurrentPage } = context;
  return { currentPage, setCurrentPage };
}
