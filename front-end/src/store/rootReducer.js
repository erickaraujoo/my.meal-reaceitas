import { combineReducers } from "redux";

import recipes from "./modules/recipes/reducers";

const rootReducer = combineReducers({
  recipes,
});

export default rootReducer;
