import { all } from "redux-saga/effects";

import { fetchRecipesSaga } from "./recipes";
import { createNewRecipe } from "./createRecipes";
import { createUserSaga } from "./user";
import { commentSaga } from "./comments";

export default function* rootSaga() {
  yield all([
    fetchRecipesSaga(),
    createNewRecipe(),
    createUserSaga(),
    commentSaga(),
  ]);
}
