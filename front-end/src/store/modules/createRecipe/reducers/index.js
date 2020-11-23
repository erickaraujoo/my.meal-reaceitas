import types from "./../../types/index";

import produce from 'immer';

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
  success: false,
};

const createRecipe = (state = INITIAL_STATE, action) => 
  produce(state, (draft) => {
    switch (action.type) {
      case types.CREATING_RECIPE:
        draft.data = [];
        draft.loading = true;
        draft.error = false;
        draft.success = false;
        break;
      case types.SUCCESS_CREATED_RECIPE:
        draft.data = action.payload.data;
        draft.loading = false;
        draft.error = false;
        draft.success = true;
        break;
      case types.FAILURE_CREATE_RECIPE:
        draft.data = [];
        draft.loading = false;
        draft.error = true;
        draft.success = false;
        break;
      default:
        return state;
    }
  });

export default createRecipe;