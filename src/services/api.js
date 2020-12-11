import axios from "axios";

const token = localStorage.getItem("authToken");

const api = axios.create({
  baseURL: "https://kenziehub.me/",
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default api;
