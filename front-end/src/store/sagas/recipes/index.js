import { takeLatest, put, all, call } from "redux-saga/effects";
import { recipes } from "./../../../services/api";

import types from "../../modules/types";

function apiGetAll(params) {
  try {
    return recipes.selectAll({ params });
  } catch (err) {
    return err;
  }
}

function apiGetById({ id }) {
  try {
    return recipes.selectById({ id });
  } catch (err) {
    return err;
  }
}

function* getRecipes(action) {
  try {
    const { data } = yield call(apiGetAll, action.params);

    yield put({ type: types.SUCCESS_FECTH_RECIPES, payload: { data } });
  } catch (err) {
    yield put({ type: types.FAILURE_RECIPES });
  }
}

function* getRecipeById(actions) {
  try {
    const { data } = yield call (apiGetById, actions.params);

    yield put({ type: types.SUCCESS_FECTH_RECIPE, payload: { data } });
  } catch (err) {
    yield put({ type: types.FAILURE_FETCH_RECIPE });
  }
}

export function* fetchRecipesSaga() {
  yield all([
    takeLatest(types.FETCHING_RECIPES, getRecipes),
    takeLatest(types.FETCHING_RECIPE, getRecipeById),
  ]);
}
