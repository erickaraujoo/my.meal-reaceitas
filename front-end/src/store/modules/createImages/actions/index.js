import types from "./../../types/index";

export function createImage({ uploadedFiles }) {
  return {
    type: types.CREATING_IMAGE_RECIPE,
    payload: { uploadedFiles },
  };
}