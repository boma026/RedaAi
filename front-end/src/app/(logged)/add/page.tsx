"use client"

import { FormEvent, useEffect, useState } from "react";
import { api } from "../../../../utils/api";
import { PrivateRouter } from "@/app/components/PrivateRouter";
import { useUserCtx } from "@/app/context/userContext";
import { User } from "@/app/types/User";
import { useRouter } from "next/navigation";

export default function AddEssay () {

    const [essayTitle, setEssayTitle] = useState<string>("");
    const [essayBody, setEssayBody] = useState<string>("");
    const [userId, setUserId] = useState<number>();
    const [token, setToken] = useState<string>("");
    const router = useRouter();
    const userCtx = useUserCtx();

    const handleSendEssay = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

      try{
        const res = await api.post("/essay", {
        essayBody,
        essayTitle,
        userId,
        },
        {
          headers: { Authorization: `Bearer ${token}` }       
        }
      )
        setEssayTitle("");
        setEssayBody("");
        router.push("/dashboard");

      }catch(e) {
        console.error("erro ao enviar redaçao");
      }
    }

    useEffect(() => {
      const userData = localStorage.getItem("user")
      const token = localStorage.getItem("token");

      if(userData && token){
        setToken(token);
        const user: User = JSON.parse(userData);
        userCtx.setfullUser(user);
        setUserId(user.id);
      }
    },[])

    if(!token) {
      return (
        <div>carregando...</div>
      )
    }

    return (
      <PrivateRouter>
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
          <div className="max-w-3xl w-full bg-white rounded-xl shadow-md p-10">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Envie sua Redação, {userCtx.fullUser?.name}</h1>
            <form className="space-y-6" onSubmit={(e) => handleSendEssay(e)}>
              <div>
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  Digite sua redação abaixo:
                </label>
                <input
                placeholder="Digite aqui o titulo da sua redação"
                className="w-full p-5 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                value={essayTitle}
                onChange={(e) => setEssayTitle(e.target.value)}
                />
                <textarea
                  rows={20}
                  placeholder="Escreva ou cole sua redação aqui..."
                  className="w-full p-5 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
                  value={essayBody}
                  onChange={(e) => setEssayBody(e.target.value)}
              />
              </div>

              <button
                type="submit"
                disabled={!token}
                className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold rounded-lg transition duration-200 disabled:bg-gray-400"
              >
                Enviar Redação
              </button>
            </form>
          </div>
        </div>
      </PrivateRouter>
  );
    
}