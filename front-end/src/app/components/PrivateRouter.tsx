"use client"

import { useRouter } from "next/navigation"
import { ReactNode, useEffect } from "react"

type PrivateRouterProps = {
    children: ReactNode
}

export const PrivateRouter = ({children}: PrivateRouterProps) => {
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (!token){
            router.push("/login");
        }
    },[])

    return(
        <div>
            {children}
        </div>
    )
}