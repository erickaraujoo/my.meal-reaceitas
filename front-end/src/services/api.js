import axios from "axios";

const api = axios.create({
  baseURL: "http://25.61.13.110:8080/api/v1/",
});

export const recipes = {
  selectAll: ({ params }) => {
    return api.get('/receitas', { params })
    // const { category, search, ingredient, ordenation, page } = params;
    // return api.get(
    //   `/receitas/${ordenation}`,
    //   { page }
    // );
  },
};

export default api;