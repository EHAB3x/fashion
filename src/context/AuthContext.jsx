import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);


// eslint-disable-next-line react/prop-types
export const AuthProvider = ({children})=>{
    const [user, setUser] = useState(null);
    const login = (data)=>{
        setUser(data);
    }
    const logout = ()=>{
        setUser(null);
    }
    return(
        <AuthContext.Provider value={{ user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
} 
