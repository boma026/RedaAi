"use client"

import { useRouter } from "next/navigation";

export default function Dashboard() {

  const router = useRouter();

  const handleAddEssay = () => {
    router.push("/add");
  }
  
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Header */}
      <header>
        <h1 className="text-3xl font-bold text-gray-800">📊 Dashboard - RedaAI</h1>
        <p className="text-gray-600 text-xl p-2">Bem-vindo de volta, Arthur!</p>
      </header>

      {/* Cards de Estatísticas */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div className="bg-white shadow rounded-xl p-6">
          <p className="text-gray-500">Redações Enviadas</p>
          <h2 className="text-2xl font-bold">12</h2>
        </div>
        <div className="bg-white shadow rounded-xl p-6">
          <p className="text-gray-500">Corrigidas</p>
          <h2 className="text-2xl font-bold">10</h2>
        </div>
        <div className="bg-white shadow rounded-xl p-6">
          <p className="text-gray-500">Média de nota</p>
          <h2 className="text-2xl font-bold">840</h2>
        </div>
        <div className="bg-white shadow rounded-xl p-6">
          <p className="text-gray-500">Último envio</p>
          <h2 className="text-2xl font-bold">27/06/2025</h2>
        </div>
      </div>

      {/* Tabela de redações */}
      <div className="bg-white rounded-xl shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-800">Suas redações</h2>
          <button 
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition cursor-pointer"
            onClick={handleAddEssay}>
          
            + Nova Redação
          </button>
        </div>
        <table className="w-full table-auto text-left">
          <thead>
            <tr className="border-b text-gray-500">
              <th className="py-2">Título</th>
              <th className="py-2">Data de Envio</th>
              <th className="py-2">Nota</th>
              <th className="py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-3">Redação sobre Meio Ambiente</td>
              <td>25/06/2025</td>
              <td>880</td>
              <td><span className="text-green-600 font-semibold">Corrigida</span></td>
            </tr>
            <tr className="border-b">
              <td className="py-3">Redação sobre Desigualdade</td>
              <td>20/06/2025</td>
              <td>---</td>
              <td><span className="text-yellow-600 font-semibold">Em análise</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
