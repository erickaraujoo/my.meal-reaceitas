import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export default function FetchRecipes() {
  
  const query = new URLSearchParams(useLocation().search);
  const search = query.get("search");

  return <>{search && <h1>Você pesquisou por: {search} </h1>}</>;
}
