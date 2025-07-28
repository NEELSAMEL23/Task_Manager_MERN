import axios from "axios";
import { BASEURL } from "./apiPaths";

const axiosInstance = axios.create({
  baseURL: BASEURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json"
  },
});

// Add token from localStorage to every request
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken"); // ✅ match key used in Login.js
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error)  ;
  }
);

// Handle common response errors
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      const status = error.response.status;

      if (status === 401) {
        localStorage.removeItem('authToken');
        window.location.href = '/login';  
      } else if (status === 500) {
        console.error("Server error occurred. Please try again later.");
      }
    } else if (error.code === "ECONNABORTED") {
      console.error("Request timeout. Please check your internet connection.");
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;
