import { takeLatest, put, all, call } from "redux-saga/effects";
import { recipes } from "./../../../services/api";

import types from "./../../modules/types";

function apiPostImage(payload) {
  try {
    return recipes.createImageRecipe({ payload });
  } catch (err) {
    return err;
  }
}

function apiPostRecipe(recipe) {
  try {
    return recipes.createRecipe({ recipe });
  } catch (err) {
    return err;
  }
}

function* apiPostMethodPreparation({ idReceita, methodPreparation }) {
  try {
    const topicsMap = methodPreparation.map(({ text }) => {
      return recipes.createMethodPreparation({ etapa: text, idReceita });
    });

    yield Promise.all(topicsMap);

    return topicsMap;
  } catch (err) {
    console.log(err);
    return err;
  }
}

function* apiPostIngredients({ idReceita, ingredients }) {
  try {
    const ingredientsMap = ingredients.map(({ name }) => {
      return recipes.createIngredients({ nome: name, idReceita });
    });

    yield Promise.all(ingredientsMap);

    return ingredientsMap;
  } catch (err) {
    return err;
  }
}

function* newImage(actions) {
  try {
    const { data } = yield call(apiPostImage, actions.payload.uploadedFiles);

    yield put({ type: types.SUCCESS_CREATED_IMAGE, payload: { data } });
  } catch (err) {
    console.log(err);
    yield put({ type: types.FAILURE_CREATE_IMAGE });
  }
}

function* newRecipe(actions) {
  try {
    const { data } = yield call(apiPostRecipe, actions.recipe);
    // yield call(apiPostMethodPreparation, {
    //   ...actions.methodPreparation,
    //   idReceita: data.idReceita,
    // });
    // yield call(apiPostIngredients, {
    //   ...actions.ingredients,
    //   idReceita: data.idReceita,
    // });

    yield put({ type: types.SUCCESS_CREATED_RECIPE, payload: { data } });
  } catch (err) {
    console.log(err);
    yield put({ type: types.FAILURE_CREATE_RECIPE });
  }
}

export function* createNewRecipe() {
  yield all([
    takeLatest(types.CREATING_IMAGE_RECIPE, newImage),
    takeLatest(types.CREATING_RECIPE, newRecipe),
  ]);
}
