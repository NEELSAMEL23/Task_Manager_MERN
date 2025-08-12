// src/config/apiPaths.js

export const BASEURL = import.meta.env.VITE_API_URL || "http://localhost:8080";

export const API_PATHS = {
    AUTH: {
        REGISTER: `${BASEURL}/api/auth/register`,
        LOGIN: `${BASEURL}/api/auth/login`,
        GET_PROFILE: `${BASEURL}/api/auth/profile`,
    },
    TASK: {
        GET_ALL: `${BASEURL}/api/task`,
        CREATE: `${BASEURL}/api/task`,
        GET_SINGLE: (id) => `${BASEURL}/api/task/${id}`,
        UPDATE: (id) => `${BASEURL}/api/task/${id}`,
        DELETE: (id) => `${BASEURL}/api/task/${id}`,
        GET_RECENT: `${BASEURL}/api/task/recent`,
    }
};
