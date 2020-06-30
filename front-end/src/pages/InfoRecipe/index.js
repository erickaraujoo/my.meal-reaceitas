import React, { lazy } from "react";

export default function InfoRecipe() {
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
    import("./../../components/HeaderHome")
  );
  const Footer = lazy(() => 
    import("./../../components/Footer")
  );

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
