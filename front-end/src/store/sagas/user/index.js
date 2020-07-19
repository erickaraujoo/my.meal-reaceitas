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

function* createUser(actions) {
  try {
    const { data } = yield call (apiCreate, actions.payload);
    
    yield put({ type: types.SUCCESS_CREATED_USER, payload: { data } });
  } catch (err) {
    console.log(err);
    yield put({ type: types.FAILURE_CREATE_USER });
  }
}

export function* createUserSaga() {
  yield all([
    takeLatest(types.CREATING_USER, createUser),
  ])
}

