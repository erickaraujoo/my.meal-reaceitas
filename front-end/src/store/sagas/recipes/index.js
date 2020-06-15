import { takeLatest, put, all, call } from 'redux-saga/effects';
import api, { recipes } from './../../../services/api';

import types from './../../modules/recipes/types';

function apiGet() {
  try {
    return recipes.selectAll( { page: 0 } );
  } catch(err) {
    return err;
  }
};

function* getRecipes() {
  try {
    const { data } = yield call(apiGet);

    yield put({ type: types.SUCCESS_FECTH_RECIPES, payload: { data } });
  } catch(err) {
    yield put({ type: types.FAILURE_RECIPES })
  }
}

export function* fetchRecipesSaga() {
  yield all([
    takeLatest('recipes/FETCHING_RECIPES', getRecipes),
  ]);
}