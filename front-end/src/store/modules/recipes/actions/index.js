import types from "./../types";

export function fetchRecipes(category, ordenation, search, ingredient, page) {
  return {
    type: types.FETCHING_RECIPES,
    params: { category, ordenation, search, ingredient, page },
  };
}
