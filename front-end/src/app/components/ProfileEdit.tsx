"use client"
import { useEffect, useState } from "react";
import { useUserCtx } from "../context/userContext"
import { PrivateRouter } from "./PrivateRouter";
import { api } from "../../../utils/api";

export const ProfileEdit = () => {

    const useCtx = useUserCtx();
    const [newPassword, setNewPassword] = useState<string>("")

    const updateUser = async (token: string, password: string, email:string, emailVerify: string ) => {
      if(email === emailVerify){
        const res = await api.put("/user", {
          headers: {
            Authorization : `Bearer ${token}`
          },
          password
        })
        console.log(res.data.status)
      }
      else{
        alert("Email nao confere!");
      }
    }

    useEffect(() => {
      const token = localStorage.getItem("token");
      const userData = JSON.parse(localStorage.getItem("user") as string);
      //updateUser()
      
    }, [])
        
    if(!useCtx.fullUser) {
      return(
        <PrivateRouter>
          <div className="min-h-screen flex items-center justify-center text-gray-600">
            Carregando redação...
          </div>
        </PrivateRouter>
      )
    }

    return(
      <PrivateRouter>
        <div className="min-h-screen bg-gray-100 p-8 flex justify-center items-center">
          <form className="bg-white p-8 rounded-xl shadow max-w-xl w-full space-y-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Editar Perfil</h1>

            <div>
              <label className="block text-gray-600 mb-1"></label>
              <input
                type="text"
                className="w-full border border-gray-300 rounded px-4 py-2 text-lg"
                placeholder="Confirme seu email"
                value={useCtx.email}
                onChange={(e) => useCtx.setEmail(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-1"></label>
              <input
                type="email"
                className="w-full border border-gray-300 rounded px-4 py-2 text-lg"
                placeholder="Digite sua senha antiga"
                value={useCtx.email}
                onChange={(e) => useCtx.setPassword(e.target.value)}
              />
            </div>

            <div>
              <label className="block text-gray-600 mb-1"></label>
              <input
                type="password"
                className="w-full border border-gray-300 rounded px-4 py-2 text-lg"
                placeholder="Digite sua nova senha"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white w-full py-3 rounded hover:bg-blue-700 transition"
            >
              Salvar Alterações
            </button>
          </form>
        </div>
      </PrivateRouter>
    )
}