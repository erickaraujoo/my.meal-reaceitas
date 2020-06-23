import React, { lazy } from "react";
import { useSelector } from "react-redux";

import InputSearchRecipe from "../../components/Recipes/SearchRecipes";

import FiltersProvider from "./../../context/Recipes/Filters";

import { Main, ContainerCategory } from "./styles";

function Recipes() {
  const ListCategory = lazy(() =>
    import("../../components/Recipes/FilterByCategory")
  );
  const ListRecipes = lazy(() =>
    import("./../../components/Recipes/ListRecipes")
  );
  const FilterByIngredients = lazy(() =>
    import("../../components/Recipes/FilterByIngredients")
  );
  const OrderRecipesBy = lazy(() =>
    import("../../components/Recipes/OrderRecipesBy")
  );
  const FetchRecipes = lazy(() =>
    import("./../../components/Recipes/FetchRecipes")
  );
  const PaginationRecipes = lazy(() =>
    import("./../../components/Recipes/Pagination")
  );
  const Footer = lazy(() => import("./../../components/Footer"));

  const recipes = useSelector((state) => state.recipes);

  return (
    <>
      <Main>
        <div className="blue_background"></div>

        <FiltersProvider>
          <FetchRecipes totalElements={recipes.data.totalElements} />
        </FiltersProvider>

        <section className="section-data-classification">
          <div className="content-wrap">
            <FiltersProvider>
              <FilterByIngredients />
            </FiltersProvider>
            <FiltersProvider>
              <OrderRecipesBy />
            </FiltersProvider>
            <FiltersProvider>
              <InputSearchRecipe
                width={100}
                height={45}
                type={"text"}
                placeholder={"Pesquisar..."}
              />
            </FiltersProvider>
          </div>
        </section>

        <ContainerCategory className="section-category">
          <div className="category-container">
            <FiltersProvider>
              <ListCategory />
            </FiltersProvider>
          </div>
        </ContainerCategory>

        <section className="section_recipes">
          <ListRecipes
            recipes={recipes.data}
            loading={recipes.loading}
            error={recipes.error}
          />
          <FiltersProvider>
            <PaginationRecipes
              totalPages={recipes.data.totalPages}
              loading={recipes.loading}
              error={recipes.error}
            />
          </FiltersProvider>
        </section>
      </Main>
      <Footer />
    </>
  );
}

export default Recipes;
