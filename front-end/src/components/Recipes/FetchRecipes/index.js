import React, { useState, useEffect } from "react";

import { useSearch } from './../../../context/Recipes/Filters';

export default function FetchRecipes({ totalElements }) {

  const [totalRecipes, setTotalRecipes] = useState(0);
  const { search } = useSearch();

  useEffect(() => {
    totalElements
      ? setTotalRecipes(totalElements)
      : setTotalRecipes(0);
  }, [totalElements]);
  
  // const query = new URLSearchParams(useLocation().search);
  // const search = query.get("search");

  // return <>{search && <h1>Você pesquisou por: {search} </h1>}</>;

  return (
    <>
      {search && <h1>Você pesquisou por: { search }</h1>}
      <p className="pTotal-recipes">
        Foram encontrados {totalRecipes} receitas
      </p>
    </>
  )
}
