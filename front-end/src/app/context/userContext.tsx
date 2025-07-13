"use client"

import { createContext, ReactNode, useContext, useState } from "react";
import { User } from "../types/User";

type userContextType = {
    fullUser: User | null,
    setfullUser: (user: User) => void, 
    name: string,
    setName: (name: string) => void,
    user: string,
    setUser: (usuario: string) => void,
    email: string,
    setEmail: (email: string) => void,
    password: string,
    setPassword: (password: string) => void,

}

const userContext = createContext<userContextType | null>(null);

type Props = {
    children:ReactNode;
}

export const UserContextProvider = ({children}: Props) => {

    const [user, setUser] = useState<string>("");
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [fullUser, setfullUser] = useState<User | null>(null);
    
    return(
        <userContext.Provider value={{user, setUser,name, setName, email, setEmail, password, setPassword, fullUser, setfullUser}}>
            {children}
        </userContext.Provider>
    )
}

export const useUserCtx = () => {
    const context = useContext(userContext);
    if(!context) {
        throw new Error("Context must be used within userContextProvider")
    }
    return context;
}

