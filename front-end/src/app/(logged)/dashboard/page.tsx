"use client"

import { useUserCtx } from "@/app/context/userContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { api } from "../../../../utils/api";
import { PrivateRouter } from "@/app/components/PrivateRouter";
import { User } from "@/app/types/User";
import { Essay } from "@/app/types/Essays";
import { mean, sum } from "lodash";

export default function Dashboard() {

  const router = useRouter();
  const [essays, setEssays] = useState<Essay[]>([]);
  const userCtx = useUserCtx()

  const goToAddEssay = () => {
    router.push("/add");
  }

  const handleChangeToEssay = (idEssay: number) => {
    localStorage.setItem("IdEssay", JSON.stringify(idEssay));
    router.push(`/essay/${idEssay}`);
  }

  const fetchEssays = async (userId:number, token: string) => {
    try{
      const res = await api.get("/essays", {
      headers: {
        Authorization: `Bearer ${token}`
      },
      
      params: {
        userId
      }
    });
    setEssays(res.data.essays);
    }
    catch(e) {
      console.error("Erro ao buscar redações");
    }
  }

  useEffect(() => {
    
    const userData: User = JSON.parse((localStorage.getItem("user") as string))
    const token = localStorage.getItem("token") as string;
    userCtx.setfullUser(userData);
    fetchEssays(userData.id, token);
    
  },[])

  const averageGrade = (essays: Essay[]) => {
  const gradesList = essays
    .filter((essay) => essay.status === "CORRIGIDA" && typeof essay.grade === "number")
    .map((essay) => essay.grade);

  if (gradesList.length === 0) return "—"; 

  const average = mean(gradesList);
  return average.toFixed(2); 
  }
  
  return (
    <PrivateRouter>
      <div className="min-h-screen bg-gray-100 p-6 ">
        
         <header>
            <h1 className="text-3xl font-bold text-gray-800">📊 Dashboard - RedaAI</h1>
            <p className="text-gray-600 text-xl p-2">Bem-vindo de volta, {userCtx.fullUser?.name}</p>
        </header>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <div className="bg-white shadow rounded-xl p-6">
            <p className="text-black">Redações Enviadas</p>
            <h2 className="text-2xl font-bold text-black ">{essays.length}</h2>
          </div>
          <div className="bg-white shadow rounded-xl p-6">
            <p className="text-black">Corrigidas</p>
            <h2 className="text-2xl font-bold text-black">{essays.filter((item) => item.status === "CORRIGIDA").length}</h2>
          </div>
          <div className="bg-white shadow rounded-xl p-6">
            <p className="text-black">Média de nota</p>
            <h2 className="text-2xl font-bold text-black">{averageGrade(essays)}</h2>
          </div>
          <div className="bg-white shadow rounded-xl p-6">
            <p className="text-black">Último envio</p>
            <h2 className="text-black text-2xl font-bold">{essays.length === 0 ? "---" : new Date(essays[0]?.createdAt).toLocaleDateString("pt-BR")}</h2>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Suas redações</h2>
            <button 
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition cursor-pointer"
              onClick={goToAddEssay}>
            
              + Nova Redação
            </button>
          </div>
          <table className="w-full table-auto text-left">
            <thead>
              <tr className="border-b text-black">
                <th className="py-2">Título</th>
                <th className="py-2">Data de Envio</th>
                <th className="py-2">Nota</th>
                <th className="py-2">Status</th>
              </tr>
            </thead>
            <tbody>

              {essays.map((userEssay) =>
                <tr className="border-b hover:bg-gray-200 cursor-pointer " key={userEssay.id} onClick={() => handleChangeToEssay(userEssay.id)}>
                  <td className="py-3 text-black">{userEssay.title}</td>
                  <td className="text-black">{new Date(userEssay.createdAt).toLocaleDateString("pt-BR")}</td>
                  <td className="text-black">
                    {userEssay.status === "ENVIADA" ? "---": userEssay.grade}
                  </td>
                  <td><span className="text-green-600 font-semibold">{userEssay.status}</span></td>
                </tr>
              )}
        
            </tbody>
          </table>
        </div>
      </div>
  </PrivateRouter>  
  )
}
