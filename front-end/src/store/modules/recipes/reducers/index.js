import types from "../../types";

import produce from "immer";

const INITIAL_STATE = {
  data: { content: [] },
  loading: false,
  success: false,
  error: false,
};

const recipes = (state = INITIAL_STATE, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.FETCHING_RECIPES:
        draft.data.content = [];
        draft.loading = true;
        draft.success = false;
        draft.error = false;
        break;
      case types.SUCCESS_FECTH_RECIPES:
        draft.data = action.payload.data;
        draft.loading = false;
        draft.success = true;
        draft.error = false;
        break;
      case types.FAILURE_RECIPES:
        draft.data.content = [];
        draft.loading = false;
        draft.success = false;
        draft.error = true;
        break;
      case types.FETCHING_RECIPE:
        draft.data.content = [];
        draft.loading = true;
        draft.success = false;
        draft.error = false;
        break;
      case types.SUCCESS_FECTH_RECIPE:
        draft.data = action.payload.data;
        draft.loading = false;
        draft.success = true;
        draft.error = false;
        break;
      case types.FAILURE_FETCH_RECIPE:
        draft.data = [];
        draft.loading = false;
        draft.success = false;
        draft.error = true;
        break;
      case types.DELETING_RECIPE:
        draft.data.content = [];
        draft.loading = true;
        draft.success = false;
        draft.error = false;
        break;
      case types.SUCCESS_DELETE_RECIPE:
        draft.data.content = action.payload;
        draft.loading = false;
        draft.success = true;
        draft.error = false;
        break;
      case types.FAILURE_DELETE_RECIPE:
        draft.data.content = [];
        draft.loading = false;
        draft.success = false;
        draft.error = true;
        break;
      default:
        return state;
    }
  });

export default recipes;
