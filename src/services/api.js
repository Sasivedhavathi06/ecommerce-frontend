import axios from "axios";

const API = axios.create({
  baseURL: "https://ecommerce-backend-production-f415.up.railway.app/api"
});

export default API;
