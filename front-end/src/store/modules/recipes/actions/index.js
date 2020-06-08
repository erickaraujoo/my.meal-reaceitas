import types from './../types';

export function fetchRecipes() {
  return {
    type: types.FETCHING_RECIPES
  }
}