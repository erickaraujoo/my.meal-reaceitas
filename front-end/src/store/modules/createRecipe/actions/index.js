import types from "./../../types";

export function createNewRecipe({
  generalData,
  ingredients,
  methodPreparation,
}) {
  return {
    type: types.CREATING_RECIPE,
    payload: { generalData, ingredients, methodPreparation },
  };
}

export function createImage({ uploadedFiles }) {
  return {
    type: types.CREATING_IMAGE_RECIPE,
    payload: { uploadedFiles },
  };
}
