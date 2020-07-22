import React, { useState, useMemo, useEffect, useContext, createContext } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from 'react-router-dom';

import { fetchRecipes } from "../../store/modules/recipes/actions";

const FiltersContext = createContext();

export default function FiltersProvider({ children }) {
  const dispatch = useDispatch();
  const location = useLocation();

  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [size] = useState(10);

  useMemo(() => {
    if(location.params) setSearch(location.params);
  }, [location.params]);

  useEffect(() => {
    let arrayIngredients = Object.values(ingredients).map(({ name }) => {
      return name;
    });
    arrayIngredients = arrayIngredients.join(',');

    dispatch(
      fetchRecipes({
        category,
        search,
        arrayIngredients,
        currentPage,
        size,
        sort,
      })
    );
  }, [category, currentPage, dispatch, ingredients, search, size, sort]);

  return (
    <FiltersContext.Provider
      value={{
        category,
        setCategory,
        ingredients,
        setIngredients,
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
  const { ingredients, setIngredients } = context;
  return { ingredients, setIngredients };
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
