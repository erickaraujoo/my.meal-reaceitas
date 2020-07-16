import types from "./../../types/index";

import produce from 'immer';

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
  success: false,
};

const createImages = (state = INITIAL_STATE, action) => 
  produce(state, (draft) => {
    switch (action.type) {
      case types.CREATING_IMAGE_RECIPE:
        console.log(action);
        draft.data = [];
        draft.loading = true;
        draft.error = false;
        draft.success = false;
        break;
      case types.SUCCESS_CREATED_IMAGE:
        draft.data = action.payload.data;
        draft.loading = false;
        draft.error = false;
        draft.success = true;
        break;
      case types.FAILURE_CREATE_IMAGE:
        draft.data = [];
        draft.loading = false;
        draft.error = true;
        draft.success = false;
        break;
      default:
        return state;
    }
  });

export default createImages;