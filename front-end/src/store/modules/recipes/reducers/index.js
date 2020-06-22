import types from '../types';

const INITIAL_STATE = {
  data: {
    content: [],
  },
  loading: false,
  error: false
};

export default function recipes(state = INITIAL_STATE, action) {
  switch(action.type) {
    case types.FETCHING_RECIPES:
      return { ...state, loading: true }
    case types.SUCCESS_FECTH_RECIPES:
      return { data: action.payload.data, loading: false, error: false }; 
    case types.FAILURE_RECIPES:
      return { data: { content: [] }, loading: false, error: true };
    default: 
      return state;
  }
}