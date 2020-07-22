import { takeLatest, put, all, call } from "redux-saga/effects";
import types from "./../../modules/types";
import { users } from "./../../../services/api";

function apiCreate(payload) {
  try {
    return users.create({ payload });
  } catch (err) {
    return err;
  }
}

function apiGetById({ userId }) {
  try {
    return users.selectById({ userId });
  } catch (err) {
    return err;
  }
}

function apiGetByLogin(payload) {
  try {
    return users.selectByLogin({ payload });
  } catch (err) {
    return err;
  }
}

function* createUser(actions) {
  try {
    const { data } = yield call(apiCreate, actions.payload);

    yield put({ type: types.SUCCESS_CREATED_USER, payload: { data } });
  } catch (err) {
    console.log(err);
    yield put({ type: types.FAILURE_CREATE_USER });
  }
}

function* getUserById(actions) {
  try {
    const { data } = yield call(apiGetById, actions.params);

    yield put({ type: types.SUCCESS_FETCH_USER, payload: { data } });
  } catch (err) {
    if (err.response && err.response.status === 401)
      yield put({
        type: types.FAILURE_FETCH_USER,
        payload: { data: err.response.data },
      });
    else yield put({ type: types.FAILURE_FETCH_USER, payload: [] });
  }
}

function* getUserByLogin(actions) {
  try {
    const { data } = yield call(apiGetByLogin, actions.payload);

    yield put({ type: types.SUCCESS_FETCH_USER, payload: { data } });
  } catch (err) {
    if (err.response && err.response.status === 401)
      yield put({
        type: types.FAILURE_FETCH_USER,
        payload: { data: err.response.data },
      });
    else yield put({ type: types.FAILURE_FETCH_USER, payload: [] });
  }
}

export function* createUserSaga() {
  yield all([
    takeLatest(types.CREATING_USER, createUser),
    takeLatest(types.FETCHING_USER, getUserById),
    takeLatest(types.FETCHING_USER_LOGIN, getUserByLogin),
  ]);
}
