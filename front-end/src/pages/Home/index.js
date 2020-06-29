import React, { lazy } from "react";

import FiltersProvider from "./../../context/Recipes/Filters.js";
import RecipesProvider from "./../../context/Home/Recipes.js";

export default function Home() {
  const HeaderHome = lazy(() => import("./../../components/HeaderHome"));
  const Search = lazy(() => import("./../../components/Home/Search"));
  const Category = lazy(() => import("./../../components/Home/Category"));
  const Recipes = lazy(() => import("./../../components/Home/Recipes"));
  const Reviews = lazy(() => import("./../../components/Home/Reviews"));
  const GetStarted = lazy(() => import("./../../components/Home/GetStarted"));
  const Footer = lazy(() => import("./../../components/Footer"));

  return (
    <>
      <HeaderHome />
      <Search />

      <FiltersProvider>
        <Category />
      </FiltersProvider>

      <RecipesProvider>
        <Recipes />
      </RecipesProvider>
      
      <Reviews />
      <GetStarted />

      <Footer />
    </>
  );
}
