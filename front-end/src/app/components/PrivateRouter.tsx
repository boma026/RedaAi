"use client"

import { useRouter } from "next/navigation"
import { ReactNode, useEffect } from "react"
import { api } from "../../../utils/api"

type PrivateRouterProps = {
    children: ReactNode
}

export const PrivateRouter = ({children}: PrivateRouterProps) => {
    const router = useRouter();

    const verifyToken = async (token: string) => {
        try{const res = await api.get("/verify", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        console.log(res.data.status);

        }
        catch(e) {
            console.log(e);
            localStorage.removeItem("token");
            router.push("/login")
        }
    }

    useEffect(() => {
        const token = localStorage.getItem("token") as string;
        if (!token){
            router.push("/login");
        }
        verifyToken(token);
       
    },[])

    return(
        <div>
            {children}
        </div>
    )
}