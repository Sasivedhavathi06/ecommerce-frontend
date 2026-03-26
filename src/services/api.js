import axios from "axios";

const API = axios.create({
  baseURL: "http://ecommerce-backend-production-f415.up.railway.app/api"
});

export default API;
