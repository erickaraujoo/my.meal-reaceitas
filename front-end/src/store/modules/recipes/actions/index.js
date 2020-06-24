import types from "../../types";

export function fetchRecipes({
  category,
  search,
  ingredient,
  currentPage,
  size,
  sort,
}) {

  console.log({ category, search, ingredient, currentPage, size, sort })
  return {
    type: types.FETCHING_RECIPES,
    params: { category, search, ingredient, currentPage, size, sort },
  };
}
