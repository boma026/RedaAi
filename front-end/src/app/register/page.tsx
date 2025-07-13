"use client"

import Forms from "../components/Forms"
import { UserContextProvider } from "../context/userContext"

export default function Register () {
    
    return (
        <UserContextProvider>
            <div className="w-full min-h-screen flex justify-center items-center">
                <Forms/>
            </div>
        </UserContextProvider>
    )
}