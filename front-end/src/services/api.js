import axios from "axios";

const api = axios.create({
  baseURL: "http://25.61.13.110:8080/api/v1/",
});

export const recipes = {
  selectAll: ({ category, ordenation, search, ingredient, page }) => {
    return api.get(
      `/receitas/${category}/${search}/${ingredient}/${ordenation}`,
      { page }
    );
  },
};

export default api;
