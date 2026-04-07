import axios from "axios";

const API = axios.create({
    baseURL: "https://localhost:7022/api/",
});

export const loginUser = (data) => {
  return API.post("/Register/Login", data);
};