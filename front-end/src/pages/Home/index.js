import React, { lazy } from "react";
import FilterProvider from "../../context/Recipes/Filters";

export default function Home() {
  const HeaderHome = lazy(() => import("../../components/Header"));
  const Search = lazy(() => import("../../components/Home/Opening"));
  const Recipes = lazy(() => import("./../../components/Home/Recipes"));
  const Reviews = lazy(() => import("./../../components/Home/Reviews"));
  const GetStarted = lazy(() => import("./../../components/Home/GetStarted"));
  const Footer = lazy(() => import("./../../components/Footer"));

  return (
    <>
      <HeaderHome />
      <Search />
      <FilterProvider>
        <Recipes />
      </FilterProvider>
      <Reviews />
      <GetStarted />
      <Footer />
    </>
  );
}
