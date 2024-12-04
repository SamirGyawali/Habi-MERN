import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({childern})=>{
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user"))
    );

    return <AuthContext.Provider value={{}}>{childern}</AuthContext.Provider>;
}