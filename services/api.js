import axios from "axios";

const api = axios.create({
    baseURL: "http://financasback.azurewebsites.net/"
});

export default api;