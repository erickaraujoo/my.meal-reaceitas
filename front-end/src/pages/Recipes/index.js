import React, { useState, useEffect, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";

import { InputSearchRecipe } from "./../../components/Input";
import { fetchRecipes } from "./../../store/modules/recipes/actions";

import { Main, ContainerCards } from "./styles";

function Recipes() {
  const ListCategory = lazy(() =>
    import("./../../components/Recipes/ListCategory")
  );
  const ListRecipes = lazy(() =>
    import("./../../components/Recipes/ListRecipes")
  );
  const FilterByIngredients = lazy(() =>
    import("../../components/Recipes/Filters/FilterByIngredients")
  );
  const OrderRecipesBy = lazy(() =>
    import("../../components/Recipes/Filters/OrderRecipesBy")
  );
  const FetchRecipes = lazy(() => import("./../../components/Recipes/FetchRecipes"));
  const Footer = lazy(() => import("./../../components/Footer"));

  const dispatch = useDispatch();
  const [totalRecipes, setTotalRecipes] = useState(0);
  const recipes = useSelector((state) => state.recipes);

  useEffect(() => {
    dispatch(fetchRecipes());
  }, [dispatch]);

  useEffect(() => {
    recipes.data.totalElements
      ? setTotalRecipes(recipes.data.totalElements)
      : setTotalRecipes(0);
  }, [recipes.data.totalElements]);

  return (
    <>
      <Main>
        <div className="blue_background"></div>

        <FetchRecipes />
        <p className="pTotal-recipes">
          Foram encontrados {totalRecipes} receitas
        </p>

        <section className="section-data-classification">
          <div className="content-wrap">
            <FilterByIngredients />
            <OrderRecipesBy />
            <InputSearchRecipe
              width={100}
              height={45}
              type={"text"}
              placeholder={"Pesquisar..."}
            />
          </div>
        </section>

        <ContainerCards className="section-category-cards">
          <div className="content-wrap">
            <div className="category-container">
              <ListCategory />
            </div>

            <div className="card-container">
              <ListRecipes
                recipes={recipes.data.content}
                loading={recipes.loading}
                error={recipes.error}
              />
            </div>
          </div>
        </ContainerCards>
      </Main>
      <Footer />
    </>
  );
}

export default Recipes;
