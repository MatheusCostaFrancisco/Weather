import axios from "axios";

const api = axios;

api.defaults.baseURL = "https://api.weatherapi.com/v1/";
axios.defaults.headers.post["Content-Type"] = "application/json;charset=utf-8";
axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

export default api;
