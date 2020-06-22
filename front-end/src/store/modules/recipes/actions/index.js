import types from "./../types";

export function fetchRecipes(category, search, ingredient, page, size, sort) {
  return {
    type: types.FETCHING_RECIPES,
    params: { category, search, ingredient, page, size, sort },
  };
}
