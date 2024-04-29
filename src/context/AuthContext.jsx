import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);


// eslint-disable-next-line react/prop-types
export const AuthProvider = ({children})=>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);
    const login = (data)=>{
        setIsLoggedIn(true);
        setUser(data);
    }
    const logout = ()=>{
        setIsLoggedIn(false);
        setUser(null);
    }
    console.log(user);
    return(
        <AuthContext.Provider value={{isLoggedIn, user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
} 
