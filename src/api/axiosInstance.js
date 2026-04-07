import axios from "axios";

const API = axios.create({
    baseURL: "https://localhost:7022/api/",
});

API.interceptors.request.use((req) => {
    
    return req;
});

export default API;