// src/services/authService.js
import axiosInstance from "./axiosInstance";
import { API_PATHS } from "./apiPaths";

export const registerService = async (payload) => {
  const { data } = await axiosInstance.post(API_PATHS.AUTH.REGISTER, payload);
  return data;
};

export const loginService = async (payload) => {
  const { data } = await axiosInstance.post(API_PATHS.AUTH.LOGIN, payload);
  return data;
};

export const getProfileService = async () => {
  const { data } = await axiosInstance.get(API_PATHS.AUTH.GET_PROFILE);
  return data;
};

