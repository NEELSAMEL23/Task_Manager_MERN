// src/context/AuthContext.jsx
import { createContext, useContext, useEffect, useState } from "react";
import { getProfileService, loginService, registerService } from "../services/authService";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        const saved = localStorage.getItem("authUser");
        return saved ? JSON.parse(saved) : null;
    });
    const [token, setToken] = useState(() => localStorage.getItem("authToken"));
    const [loading, setLoading] = useState(true);

    // Load profile on first mount if token exists
    useEffect(() => {
        const loadUser = async () => {
            try {
                if (token && !user) {
                    const data = await getProfileService();
                    setUser(data);
                    localStorage.setItem("authUser", JSON.stringify(data));
                }
            } catch (e) {
                console.error(e);
                logout();
            } finally {
                setLoading(false);
            }
        };
        loadUser();
    }, [token]); // eslint-disable-line

    const login = async (email, password) => {
        const data = await loginService({ email, password });
        setToken(data.token);
        localStorage.setItem("authToken", data.token);
        setUser({
            _id: data._id,
            name: data.name,
            email: data.email,
        });
        localStorage.setItem(
            "authUser",
            JSON.stringify({
                _id: data._id,
                name: data.name,
                email: data.email,
            })
        );
        return data;
    };

    const register = async (payload) => {
        const data = await registerService(payload);
        setToken(data.token);
        localStorage.setItem("authToken", data.token);
        setUser({
            _id: data._id,
            name: data.name,
            email: data.email,

        });
        localStorage.setItem(
            "authUser",
            JSON.stringify({
                _id: data._id,
                name: data.name,
                email: data.email,
            })
        );
        return data;
    };

    const logout = () => {
        setUser(null);
        setToken(null);
        localStorage.removeItem("authToken");
        localStorage.removeItem("authUser");
    };

    return (
        <AuthContext.Provider value={{ user, token, loading, login, register, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
