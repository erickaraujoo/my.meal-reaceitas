import axios from "axios";

const api = axios.create({ baseURL: "http://25.61.13.110:8080/api/v1/" });

export const recipes = {
  selectAll: ({ params }) => api.get("/receitas", { params }),
  selectById: ({ id }) => api.get(`/receitas/${id}`),
  createImageRecipe: ({ payload }) => api.post(`/receitas/imagem`, payload),
  createRecipe: ({ recipe }) => api.post(`/receitas`, recipe),
  createMethodPreparation: ({ etapa, id_receita }) =>
    api.post(`/modopreparo`, { etapa, id_receita }),
  createIngredients: ({ id_receita, nome }) =>
    api.post(`/ingredientes`, { id_receita, nome }),
};

export const users = {
  create: ({ payload }) => api.post(`/usuario`, payload),
};

export default api;
