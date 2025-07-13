"use client"

import { PrivateRouter } from "@/app/components/PrivateRouter";
import { useUserCtx } from "@/app/context/userContext";
import { useEffect, useState } from "react";
import { api } from "../../../../../utils/api";
import { User } from "@/app/types/User";
import { Essay } from "@/app/types/Essays";

export default function RedacaoPage() {
  
  const userCtx = useUserCtx();
  const [essay, setEssay] = useState<Essay | null>(null);
  
  const fetchEssay = async (userId: number, essayId: number) => {
    
    const res = await api.get("/essay", {
      params: { essayId, userId } })
      console.log(res.data);
      if(res.data.essay){
        setEssay(res.data.essay);
        console.log(res.data.essay);
        
      }
  } 

  useEffect(() => {
    const user: User = JSON.parse(localStorage.getItem("user") as string);
    const essayId = JSON.parse(localStorage.getItem("IdEssay") as string);
    console.log(essayId);
    userCtx.setfullUser(user);
    fetchEssay(user.id, essayId);
  }, [])

  if(!essay) {
    return(
      <PrivateRouter>
        <div className="min-h-screen flex items-center justify-center text-gray-600">
          Carregando redação...
        </div>
      </PrivateRouter>
    )
  }

  return (
    <PrivateRouter>
      <div className="min-h-screen bg-gray-100 p-8">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-8">
          {/* Cabeçalho */}
          <div className="mb-6 border-b pb-4">
            <h1 className="text-3xl font-bold text-gray-800">Redação: {essay.title}</h1>
            <p className="text-gray-500 mt-1">Enviada em  {essay.createdAt} <span className="text-green-600 font-semibold">{essay.status}</span></p>
          </div>

          {/* Texto da Redação */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-2 text-gray-700">Texto enviado</h2>
            <div className="bg-gray-50 p-5 rounded border text-justify leading-relaxed text-gray-800">
              {essay.body}
              {/* Texto longo continua aqui */}
            </div>
          </div>

          {/* Notas por competência */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Notas por competência</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-indigo-100 p-4 rounded">
                <p className="font-medium text-indigo-800">Competência 1</p>
                <p className="text-2xl font-bold text-indigo-900">{essay.competency1}</p>
              </div>
              <div className="bg-indigo-100 p-4 rounded">
                <p className="font-medium text-indigo-800">Competência 2</p>
                <p className="text-2xl font-bold text-indigo-900">{essay.competency2}</p>
              </div>
              <div className="bg-indigo-100 p-4 rounded">
                <p className="font-medium text-indigo-800">Competência 3</p>
                <p className="text-2xl font-bold text-indigo-900">{essay.competency3}</p>
              </div>
              <div className="bg-indigo-100 p-4 rounded">
                <p className="font-medium text-indigo-800">Competência 4</p>
                <p className="text-2xl font-bold text-indigo-900">{essay.competency4}</p>
              </div>
              <div className="bg-indigo-100 p-4 rounded">
                <p className="font-medium text-indigo-800">Competência 5</p>
                <p className="text-2xl font-bold text-indigo-900">{essay.competency5}</p>
              </div>
            </div>
          </div>

          {/* Comentários gerais */}
          <div>
            <h2 className="text-xl font-semibold mb-2 text-gray-700">Comentário da correção</h2>
            <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-400 text-gray-800">
              {essay.feedback}
            </div>
          </div>
        </div>
      </div>
  </PrivateRouter>);
}
