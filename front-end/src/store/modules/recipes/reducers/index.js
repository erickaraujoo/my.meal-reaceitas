import types from "../../types";

import produce from "immer";

const INITIAL_STATE = {
  data: {
    content: [],
  },
  loading: false,
  error: false,
};

const recipes = (state = INITIAL_STATE, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case types.FETCHING_RECIPES:
        draft.loading = true;
        break;
      case types.SUCCESS_FECTH_RECIPES:
        draft.data = action.payload.data;
        draft.loading = false;
        draft.error = false;
        // return { data: action.payload.data, loading: false, error: false };
        break;
      case types.FAILURE_RECIPES:
        draft.data = { ...state };
        draft.error = true;
        // return { ...state, loading: false, error: true };
        break;
      default:
        return state;
    }
  });

export default recipes;
