import axios from "axios";
import { setupInterceptorsTo } from "./axios-interceptor.js";
import { getSessionStorage } from "@/configs/asyncSessionStorage.jsx";
import { explodeObject } from "@/configs/utils.jsx";
const baseUrl = import.meta.env.VITE_REACT_APP_API_KEY;
setupInterceptorsTo(axios);

export const login = (data) => {
  // const params = new URLSearchParams();
  // params.append("username", data.username);
  // params.append("password", data.password);

  return new Promise(async (resolve, reject) => {
    try {
      let response = await axios.post(`${baseUrl}api/v1/auth/login`, data);
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const axiosGet = (
  url,
  query = {},
  token = getSessionStorage("token")
) => {
  return new Promise(async (resolve, reject) => {
    console.log(typeof query, query);
    let params = typeof query == "string" ? query : explodeObject(query);
    try {
      let response = await axios.get(`${baseUrl}${url}?${params}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const axiosPost = (
  url,
  data = {},
  token = getSessionStorage("token")
) => {
  return new Promise(async (resolve, reject) => {
    try {
      let response = await axios.post(`${baseUrl}${url}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const axiosPut = (url, data, token = getSessionStorage("token")) => {
  return new Promise(async (resolve, reject) => {
    try {
      let response = await axios.put(`${baseUrl}${url}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const axiosDelete = (url, token = getSessionStorage("token")) => {
  return new Promise(async (resolve, reject) => {
    try {
      let response = await axios.delete(`${baseUrl}${url}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};

export const axiosDeleteWithBody = (
  url,
  data,
  token = getSessionStorage("token")
) => {
  return new Promise(async (resolve, reject) => {
    try {
      let response = await axios.delete(`${baseUrl}${url}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: data,
      });
      resolve(response);
    } catch (error) {
      reject(error);
    }
  });
};
