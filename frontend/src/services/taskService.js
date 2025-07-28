// src/services/taskService.js
import axiosInstance from "./axiosInstance";
import { API_PATHS } from "./apiPaths";

export const createTaskService = async (payload) => {
    const { data } = await axiosInstance.post(API_PATHS.TASK.CREATE, payload);
    return data;
};

export const getTasksService = async (search = "") => {
    const { data } = await axiosInstance.get(API_PATHS.TASK.GET_ALL, {
        params: { search }
    });
    return data;
};

export const getRecentTasksService = async () => {
    const { data } = await axiosInstance.get(API_PATHS.TASK.GET_RECENT);
    return data;
};


export const getSingleTaskService = async (id) => {
    const { data } = await axiosInstance.get(API_PATHS.TASK.GET_SINGLE(id));
    return data;
};

export const updateTaskService = async (id, payload) => {
    const { data } = await axiosInstance.put(API_PATHS.TASK.UPDATE(id), payload);
    return data;
};

export const deleteTaskService = async (id) => {
    const { data } = await axiosInstance.delete(API_PATHS.TASK.DELETE(id));
    return data;
};
