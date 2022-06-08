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
        //code to signIn
    };

    const signOut = () => {
        //code to signOut
    };

    const updateUserData = (data) => {
        //code to updateData
    };

    return {
        user,
        signIn,
        signOut,
        updateUserData,
    };
}
