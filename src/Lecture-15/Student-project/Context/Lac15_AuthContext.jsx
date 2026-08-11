import { createContext, useState } from "react";

export const AuthContext = createContext();

function AuthProvider({ children }) {

    const [isLogin, setIsLogin] = useState(false);

    const [user, setUser] = useState(null);

    function login() {

        setIsLogin(true);

        setUser({
            name: "Kavy Patel",
            email: "kavy@gmail.com"
        });
    }

    function logout() {

        setIsLogin(false);

        setUser(null);
    }

    return (
        <AuthContext.Provider
            value={{
                isLogin,
                user,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;