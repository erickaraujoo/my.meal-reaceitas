import { combineReducers } from "redux";

import recipes from "./modules/recipes/reducers";
import createRecipe from "./modules/createRecipe/reducers";

const rootReducer = combineReducers({
  recipes,
  createRecipe,
});

export default rootReducer;
