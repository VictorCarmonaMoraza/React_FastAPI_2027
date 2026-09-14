import axios from "axios";

const urlBase = "http://localhost:8080/api/libros";

const api = axios.create({
  baseURL: urlBase
});

export { api, urlBase };