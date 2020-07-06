import { all } from "redux-saga/effects";

import { fetchRecipesSaga } from "./recipes";
import { createNewRecipe } from "./createRecipes";

export default function* rootSaga() {
  yield all([
    fetchRecipesSaga(),
    createNewRecipe()
  ]);
}
