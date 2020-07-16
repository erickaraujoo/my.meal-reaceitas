import types from "./../../types";

export function createRecipe({
  name,
  description,
  methodPreparation,
  observation,
  preparationTime,
  revenue,
  ingredients,
  creationData,
  userId,
}) {
  const nome = name;
  const descricao = description;
  const acessos = 0;
  const observacao = observation;
  const tempo_preparo = preparationTime;
  const rendimento = revenue;
  const data_criacao = creationData;
  const usuario = { id_usuario: userId };
  const imagem = 'https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/5/d/1/3/5d138386cb0ff237d0f65cd6a9905ab4.jpg';

  return {
    type: types.CREATING_RECIPE,
    recipe: {
      nome,
      descricao,
      observacao,
      tempo_preparo,
      rendimento,
      imagem,
      acessos,
      data_criacao,
      usuario,
    },
    ingredients: { ingredients },
    methodPreparation: { methodPreparation },
  };
}
