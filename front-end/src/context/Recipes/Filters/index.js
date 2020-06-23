import React, { useState, useEffect, useContext, createContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchRecipes } from "./../../../store/modules/recipes/actions";

const FiltersContext = createContext();

export default function FiltersProvider({ children }) {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState(1);
  const [sort, setSort] = useState('');
  const [search, setSearch] = useState("");
  const [ingredient, setIngredient] = useState([]);
  const [size] = useState(10);
  const [totalPage, setTotalPage] = useState(0);
  
  const pages = useSelector((state) => state.recipes.data.totalPages);

  useEffect(() => {
    setTotalPage(pages);
    dispatch(
      fetchRecipes(category, search, ingredient, currentPage - 1, size, sort)
    );
  }, [category, sort, search, ingredient, currentPage, size, pages, dispatch]);

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
        totalPage,
        setTotalPage,
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

export function useTotalPage() {
  const context = useContext(FiltersContext);
  const { totalPage, setTotalPage } = context;
  return { totalPage, setTotalPage };
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
