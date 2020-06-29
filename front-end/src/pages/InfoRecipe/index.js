import React, { lazy } from "react";

export default function InfoRecipe() {
  const HeaderHome = lazy(() => 
  import("./../../components/HeaderHome"));
  const GeneralInfo = lazy(() =>
    import("./../../components/InfoRecipe/GeneralInfo")
  );
  const GeneralAuthorInfo = lazy(() =>
    import("./../../components/InfoRecipe/GeneralAuthorInfo")
  );

  return (
    <>
      <HeaderHome />
      <GeneralInfo />
      <GeneralAuthorInfo />
    </>
  );
}
