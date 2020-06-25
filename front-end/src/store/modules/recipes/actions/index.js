import types from "../../types";

export function fetchRecipes({
  category,
  search,
  ingredient,
  currentPage,
  size,
  sort,
}) {
  const page = currentPage - 1;

  return {
    type: types.FETCHING_RECIPES,
    params: { category, search, ingredient, page, size, sort },
  };
}
