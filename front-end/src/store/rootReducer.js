import { combineReducers } from "redux";

import recipes from "./modules/recipes/reducers";
import createRecipe from "./modules/createRecipe/reducers";
import createImages from "./modules/createImages/reducers";
import user from "./modules/user/reducers";

const rootReducer = combineReducers({
  recipes,
  createRecipe,
  createImages,
  user,
});

export default rootReducer;
