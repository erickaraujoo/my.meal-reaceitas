import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux';

import { useSearch } from "../../../context/Recipes/Filters.js";

export default function FetchRecipes() {
  const [totalRecipes, setTotalRecipes] = useState(0);
  const { search } = useSearch();
  const { totalElements } = useSelector((state) => state.recipes.data);

  useEffect(() => {
    totalElements ? setTotalRecipes(totalElements) : setTotalRecipes(0);
  }, [totalElements]);

  return (
    <>
      {search && <h1>Você pesquisou por: {search}</h1>}
      <p className="pTotal-recipes">
        { totalRecipes === 1 ? (
          <> Foi encontrado {totalRecipes} receita </>
        ) : (
          <> Foram encontrados {totalRecipes} receitas </>
        )}
      </p>
    </>
  );
}
