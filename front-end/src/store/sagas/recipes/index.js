import { delay } from 'redux-saga/effects';
import { takeLatest, put, all, call, select } from 'redux-saga/effects';
import api from './../../../services/api';

function apiGet() {
  try {
    return api.get('receitas?page=0');
  } catch(err) {
    return err;
  }
};

function* getRecipes() {
  try {
    const { data } = yield call(apiGet);

    yield put({ type: 'recipes/SUCCESS_FETCH_RECIPES', payload: { data } });
  } catch(err) {
    yield put({ type: 'recipes/FAILURE_FETCH_RECIPES' })
  }
}

export function* fetchRecipesSaga() {
  yield all([
    takeLatest('recipes/FETCHING_RECIPES', getRecipes),
  ]);
}