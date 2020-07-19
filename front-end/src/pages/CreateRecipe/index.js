import React, { lazy } from "react";
import { useSelector } from "react-redux";

import { Main } from "./styles";

import CreateRecipeProvider from "./../../context/Recipes/Create";
import { ProgressLoadingPage } from "./../../components/LoadingPage/index";
import { ModalSuccess, ModalError } from "../../components/Elements/Modal";

export default function CreateRecipe() {
  const Header = lazy(() => import("../../components/CreateRecipe/Header"));
  const GeneralData = lazy(() =>
    import("../../components/CreateRecipe/GeneralData")
  );
  const MethodPreparation = lazy(() =>
    import("../../components/CreateRecipe/MethodPreparation")
  );
  const Ingredients = lazy(() =>
    import("../../components/CreateRecipe/Ingredients")
  );
  const SendRecipe = lazy(() =>
    import("../../components/CreateRecipe/SendRecipe")
  );
  const Footer = lazy(() => import("../../components/Footer"));
  const { loading, success, error } = useSelector(
    (state) => state.createRecipe
  );

  return (
    <>
      <ProgressLoadingPage loading={loading} />
      <ModalSuccess
        success={success}
        width={"750px"}
        height={"auto"}
        padding={"60px 80px 50px"}
        borderRadius={"10px"}
        titleModal={"Receita criada com Sucesso!"}
        textModal={
          "Você acaba de cadastrar uma nova receita! Clique no botão abaixo para prosseguir"
        }
        textButton={"Concluir"}
        widthButton={"300px"}
        heightButton={"50px"}
      />
      <Main>
        <Header />
        <CreateRecipeProvider>
          <ModalError
            error={error}
            createRecipe={true}
            width={"750px"}
            height={"auto"}
            padding={"60px 80px 50px"}
            borderRadius={"10px"}
            titleModal={"Erro ao cadastrar nova Receita!"}
            textModal={
              "Ocorreu algum erro inesperado quando você tentou criar uma receita, tente novamente mais tarde!"
            }
            textButton={"Fechar"}
            widthButton={"300px"}
            heightButton={"50px"}
          />
          <GeneralData />
          <MethodPreparation />
          <Ingredients />
          <SendRecipe />
        </CreateRecipeProvider>
        <Footer />
      </Main>
    </>
  );
}
