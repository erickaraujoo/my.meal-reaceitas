import types from "../../types";

import produce from "immer";

const INITIAL_STATE = {
  data: [],
  loading: false,
  success: false,
  error: false,
};

const comments = (state = INITIAL_STATE, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.CREATING_COMMENT:
        draft.data = [];
        draft.loading = true;
        draft.success = false;
        draft.error = false;
        break;
      case types.SUCCESS_CREATED_COMMENT:
        draft.data = action.payload.data;
        draft.loading = false;
        draft.success = true;
        draft.error = false;
        break;
      case types.FAILURE_CREATE_COMMENT:
        draft.data = [];
        draft.loading = false;
        draft.success = false;
        draft.error = true;
        break;
      default:
        return state;
    }
  });

export default comments;
