import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "./auth/Provider";

export const useAuth = () => {
  return useContext(AuthContext);
};

export const useAxios = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "http://127.0.0.1:8000/api/",
    headers: { Authorization: "Bearer " + token },
  });
};

export const baseApiUrl = "http://127.0.0.1:8000/";
