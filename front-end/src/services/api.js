import axios from "axios";

const api = axios.create({ baseURL: "http://25.61.13.110:8080/api/v1/" });

export const recipes = {
  selectAll: ({ params }) => api.get("/receitas", { params }),
  selectById: ({ id }) => api.get(`/receitas/${id}`),
  createImageRecipe: ({ payload }) => api.post(`/receitas/imagem`, payload),
  createRecipe: ({ recipe }) => api.post(`/receitas`, recipe),
  createMethodPreparation: ({ etapa, idReceita }) =>
    api.post(`/modopreparo`, { etapa, idReceita }),
  createIngredients: ({ idReceita, nome }) =>
    api.post(`/ingredientes`, { idReceita, nome }),
    deleteRecipe: ({ id }) => api.put(`/receitas/excluir`, id),
};

export const comments = {
  create: ({ payload }) => api.post(`/avaliacoes`, payload),
};

export const users = {
  selectById: ({ userId }) => api.get(`/usuarios/${userId}`),
  selectByLogin: ({ payload }) => api.post(`/usuarios/login`, payload),
  create: ({ payload }) => api.post(`/usuarios`, payload),
  selectRecipes: ({ userId }) => api.get(`/usuario/${userId}/receitas`),
};

export default api;
