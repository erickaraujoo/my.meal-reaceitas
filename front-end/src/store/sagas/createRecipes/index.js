import { takeLatest, put, all, call } from "redux-saga/effects";
import { recipes } from "./../../../services/api";

import types from "./../../modules/types";

function apiPost(payload) {
  try {
    return recipes.create({ payload });
  } catch (err) {
    return err;
  }
}

function* newRecipe(actions) {
  try {
    const { data } = yield call(apiPost, actions.payload.uploadedFiles);

    yield put({ type: types.SUCCESS_CREATED_RECIPE, payload: { data } });
  } catch (err) {
    yield put({ type: types.FAILURE_CREATE_RECIPE });
  }
}

export function* createNewRecipe() {
  yield all([takeLatest(types.CREATING_RECIPE, newRecipe)]);
}
