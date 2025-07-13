"use client"

import { FormEvent, useEffect, useState } from "react";
import { api } from "../../../../utils/api";
import { PrivateRouter } from "@/app/components/PrivateRouter";
import { Essay } from "@/app/types/Essays";
import { useUserCtx } from "@/app/context/userContext";
import { User } from "@/app/types/User";
import { useRouter } from "next/navigation";

export default function AddEssay () {

    const [essayTitle, setEssayTitle] = useState<string>("");
    const [essayBody, setEssayBody] = useState<string>("");
    const [userId, setUserId] = useState<number>();
    const router = useRouter();
    const userCtx = useUserCtx();

    const handleSendEssay = async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const res = await api.post("/essay", {
        essayBody,
        essayTitle,
        userId
      })
      console.log(res.data);
      setEssayTitle("");
      setEssayBody("");
      router.push("/dashboard");
    }

    useEffect(() => {
      const userData = (localStorage.getItem("user"))
      
      if(userData){
        const user: User = JSON.parse(userData);
        userCtx.setfullUser(user);
        setUserId(user.id);
      }
    },[])

    return (
      <PrivateRouter>
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
          <div className="max-w-3xl w-full bg-white rounded-xl shadow-md p-10">
            <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Envie sua Redação, {userCtx.fullUser?.name}</h1>
            <form className="space-y-6" onSubmit={handleSendEssay}>
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
                className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white text-lg font-semibold rounded-lg transition duration-200"
              >
                Enviar Redação
              </button>
            </form>
          </div>
        </div>
      </PrivateRouter>
  );
    
}