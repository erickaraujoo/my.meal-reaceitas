import types from "../../types";

import produce from "immer";

const INITIAL_STATE = {
  data: [],
  loading: false,
  success: false,
  error: false,
};

const user = (state = INITIAL_STATE, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.CREATING_USER:
        draft.data = [];
        draft.loading = true;
        draft.success = false;
        draft.error = false;
        break;
      case types.SUCCESS_CREATED_USER:
        draft.data = action.payload;
        draft.loading = false;
        draft.success = true;
        draft.error = false;
        break;
      case types.FAILURE_CREATE_USER:
        draft.data = [];
        draft.loading = false;
        draft.success = false;
        draft.error = true;
        break;
      case types.FETCHING_USER_LOGIN:
        draft.data = [];
        draft.loading = true;
        draft.success = false;
        draft.error = false;
        break;
      case types.SUCCESS_FETCH_USER:
        draft.data = action.payload;
        draft.loading = false;
        draft.success = true;
        draft.error = false;
        break;
      case types.FAILURE_FETCH_USER:
        draft.data = action.payload;
        draft.loading = false;
        draft.success = false;
        draft.error = true;
        break;
      default:
        return state;
    }
  });

export default user;
