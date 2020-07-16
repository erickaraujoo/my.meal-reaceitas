import React, { lazy } from "react";
import { useSelector } from 'react-redux';

import { Main } from "./styles";

import CreateRecipeProvider from "./../../context/Recipes/Create";

export default function NewRecipe() {
  const Header = lazy(() => import("../../components/CreateRecipe/Header"));
  const GeneralData = lazy(() => import("../../components/CreateRecipe/GeneralData"));
  const MethodPreparation = lazy(() => import("../../components/CreateRecipe/MethodPreparation"));
  const Ingredients = lazy(() => import("../../components/CreateRecipe/Ingredients"));
  const SendRecipe = lazy(() => import("../../components/CreateRecipe/SendRecipe"));
  const Footer = lazy(() => import("../../components/Footer"));

  return (
    <Main>
      <Header />
      <CreateRecipeProvider>
        <GeneralData />
        <MethodPreparation />
        <Ingredients />
        <SendRecipe />
      </CreateRecipeProvider>
      <Footer />
    </Main>
  );
}
