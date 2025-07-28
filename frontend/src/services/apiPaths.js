export const BASEURL = "http://localhost:8000";

export const API_PATHS = {
    AUTH: {
        REGISTER: "/api/auth/register",
        LOGIN: "/api/auth/login",
        GET_PROFILE: "/api/auth/profile",
    },
    TASK: {
        GET_ALL: "/api/task",
        CREATE: "/api/task",
        GET_SINGLE: (id) => `/api/task/${id}`,
        UPDATE: (id) => `/api/task/${id}`,
        DELETE: (id) => `/api/task/${id}`,
        GET_RECENT: "/api/task/recent", // 👈 Added this
    }
};
