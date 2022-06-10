import axios from "axios";

const baseURL = 'https://api.weatherapi.com/v1/';
const api = axios.create({baseURL});

export default api;

