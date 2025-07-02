import getFormData from "@/actions/getFormData";
import { useState } from "react";

export default function Forms() {
    
    const [usuario, setUsuario] = useState<string>();
    const [password, setPassword] = useState<string>();
    
    const handleVerifyLogin = () => {
        
    }
    
    return (
        <div className="w-full min-h-screen flex justify-center items-center">
            <div className="bg-white text-gray-900 rounded-lg shadow-xl p-10 max-w-2xl w-full text-center">
            <h1 className="font-bold text-3xl mb-10 text-center">Login</h1>

            <form action={getFormData} className="grid grid-cols-1 gap-x-8 gap-y-6">
                <input
                type="text"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                placeholder="Digite seu usuário"
                className="p-5 text-lg border border-gray-300 rounded w-full"
                />
                <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Digite sua senha"
                className="p-5 text-lg border border-gray-300 rounded w-full"
                />
                <div className="col-span-2">
                <input
                    type="submit"
                    value="Enviar"
                    className="w-full bg-blue-600 text-white text-xl py-4 rounded hover:bg-blue-700 transition duration-200 cursor-pointer"
                    onClick={handleVerifyLogin}
                />
                </div>
            </form>
            </div>
        </div>
  );
}
