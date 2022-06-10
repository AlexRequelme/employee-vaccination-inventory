import { createContext, useContext, useState } from "react";
import API from "../api";

const authContext = createContext();

export function AuthProvider({ children }) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
    return useContext(authContext);
};

function useProvideAuth() {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

    const signIn = async (payload) => {
        const data = await API.post("/auth/login", payload);
        if (data) updateUserData(data);
    };

    const signOut = () => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("user");
        setUser(null);
    };

    const updateUserData = (userData) => {
        localStorage.setItem("user", JSON.stringify(userData));
        setUser(userData);
    };

    return {
        user,
        signIn,
        signOut,
        updateUserData,
    };
}
