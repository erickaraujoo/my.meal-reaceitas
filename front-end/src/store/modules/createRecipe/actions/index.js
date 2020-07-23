import types from "./../../types";

export function createRecipe({
  name,
  description,
  methodPreparation,
  observation,
  preparationTime,
  revenue,
  ingredients,
  category,
  creationData,
  userId,
}) {
  const nome = name;
  const descricao = description;
  const acessos = 0;
  const observacao = observation;
  const tempoPreparo = preparationTime;
  const rendimento = revenue;
  const dataCriacao = creationData;
  const usuario = { idUsuario: userId };

  return {
    type: types.CREATING_RECIPE,
    recipe: {
      nome,
      descricao,
      observacao,
      tempoPreparo,
      rendimento,
      acessos,
      dataCriacao,
      usuario,
    },
    ingredients: { ingredients },
    methodPreparation: { methodPreparation },
  };
}
