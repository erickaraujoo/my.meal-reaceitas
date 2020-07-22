import { takeLatest, put, all, call } from "redux-saga/effects";
import {comments } from "../../../services/api";

import types from "../../modules/types";

function apiPostComment(payload) {
  try {
    return comments.create({ payload });
  } catch (err) {
    return err;
  }
}

function* sendComment(actions) {
  try {
    const { data } = yield call (apiPostComment, actions.payload);

    yield put({ type: types.SUCCESS_CREATED_COMMENT, payload: { data } });
  } catch (err) {
    yield put({ type: types.FAILURE_CREATE_COMMENT });
  }
}

export function* commentSaga() {
  yield all([
    takeLatest(types.CREATING_COMMENT, sendComment ),
  ]);
}