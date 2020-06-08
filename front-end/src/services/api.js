import axios from 'axios';

const api = axios.create({
  baseURL: "http://25.61.13.110:8080/api/v1/"
});

export default api;