import { createContext, useState, useEffect } from "react";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect( ()=> {
        const storedUser = sessionStorage.getItem("User");
        if(storedUser){
            setUser(JSON.parse(storedUser));
        }
        setLoading(false);
    }, []);

    const login = (userData) => {
        sessionStorage.setItem("User", JSON.stringify(userData));
        setUser(userData);
    };

    const logout = () => {
        sessionStorage.removeItem("User");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {!loading && children}
        </AuthContext.Provider>
    );
};