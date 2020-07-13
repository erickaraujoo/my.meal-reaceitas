import React, { lazy, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useDispatch } from "react-redux";

import { fetchRecipeById } from "./../../store/modules/recipes/actions";

export default function InfoRecipe(props) {
  console.log("CHAMADO");
  const dispatch = useDispatch();
  const GeneralAuthorInfo = lazy(() =>
    import("../../components/InfoRecipe/AuthorInfo")
  );
  const GeneralInfo = lazy(() =>
    import("./../../components/InfoRecipe/GeneralInfo")
  );
  const GeneralData = lazy(() =>
    import("../../components/InfoRecipe/MethodPreparationAndIngredients")
  );
  const Comments = lazy(() =>
    import("./../../components/InfoRecipe/Comments")
  );
  const HeaderHome = lazy(() => 
    import("../../components/Header")
  );
  const Footer = lazy(() => 
    import("./../../components/Footer")
  );

  const { id } = useParams();

  useEffect(() => {
    dispatch(
      fetchRecipeById({ id })
    );
  }, [dispatch, id]);

  return (
    <>
      <HeaderHome />
      <GeneralInfo />
      <GeneralAuthorInfo />
      <GeneralData />
      <Comments />
      <Footer />
    </>
  );
}
