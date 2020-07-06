import { takeLatest, put, all, call } from "redux-saga/effects";

import types from "../../modules/types";

function* newRecipe(actions) {
  yield console.log(actions.payload);
}

export function* createNewRecipe() {
  yield all([takeLatest(types.CREATING_RECIPE, newRecipe)]);
}
