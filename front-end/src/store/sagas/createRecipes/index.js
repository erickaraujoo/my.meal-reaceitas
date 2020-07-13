import { takeLatest, put, all, call } from "redux-saga/effects";
import { recipes } from "./../../../services/api";

import types from "./../../modules/types";

function apiPostImage(payload) {
  try {
    return recipes.createImageRecipe({ payload });
  } catch (err) {
    return err;
  }
}

function* newImage(actions) {
  try {
    const { data } = yield call(apiPostImage, actions.payload.uploadedFiles);

    yield put({ type: types.SUCCESS_CREATED_RECIPE, payload: { data } });
  } catch (err) {
    yield put({ type: types.FAILURE_CREATE_RECIPE });
  }
}

function* newRecipe(actions) {
  yield console.log(actions.payload);
}

export function* createNewRecipe() {
  yield all([
    takeLatest(types.CREATING_IMAGE_RECIPE, newImage),
    takeLatest(types.CREATING_RECIPE, newRecipe),
  ]);
}
