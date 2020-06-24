import { takeLatest, put, all, call } from "redux-saga/effects";
import { recipes } from "./../../../services/api";

import types from "../../modules/types";

function apiGet(params) {
  try {
    return recipes.selectAll({ params });
  } catch (err) {
    return err;
  }
}

function* getRecipes(action) {
  try {
    const { data } = yield call(apiGet, action.params);

    yield put({ type: types.SUCCESS_FECTH_RECIPES, payload: { data } });
  } catch (err) {
    yield put({ type: types.FAILURE_RECIPES });
  }
}

export function* fetchRecipesSaga() {
  yield all([takeLatest(types.FETCHING_RECIPES, getRecipes)]);
}
