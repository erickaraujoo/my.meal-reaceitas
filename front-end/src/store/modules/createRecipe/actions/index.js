import types from "./../../types";

export function createNewRecipe({ uploadedFiles }) {
  return {
    type: types.CREATING_RECIPE,
    payload: { uploadedFiles },
  };
}
