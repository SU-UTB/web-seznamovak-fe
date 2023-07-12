import axios from "axios";

axios.defaults.withCredentials = true;

const api = axios.create({
  baseURL: "http://sdtest.wz.cz/api/reservations",
  timeout: 15000,
  headers: {
    "Content-type": "application/json",
  },
});

export default api;