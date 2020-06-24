import { all } from "redux-saga/effects";

import { fetchRecipesSaga } from "./recipes";

export default function* rootSaga() {
  yield all([fetchRecipesSaga()]);
}
