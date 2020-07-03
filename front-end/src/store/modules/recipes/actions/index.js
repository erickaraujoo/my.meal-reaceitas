import types from "../../types";

export function fetchRecipes({
  category,
  search,
  arrayIngredients,
  currentPage,
  size,
  sort,
}) {
  const page = currentPage - 1;
  const ingredients = arrayIngredients;

  return {
    type: types.FETCHING_RECIPES,
    params: { category, search, ingredients, page, size, sort },
  };
}
