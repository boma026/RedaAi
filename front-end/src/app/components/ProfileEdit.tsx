"use client"
import { useUserCtx } from "../context/userContext"

export const ProfileEdit = () => {

    const useCtx = useUserCtx();
        
    return(
        <div className="min-h-screen bg-gray-100 p-8 flex justify-center items-center">
        <form className="bg-white p-8 rounded-xl shadow max-w-xl w-full space-y-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Editar Perfil</h1>

        <div>
          <label className="block text-gray-600 mb-1">{useCtx.name}</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-4 py-2 text-lg"
            placeholder="Digite seu nome"
          />
        </div>

        <div>
          <label className="block text-gray-600 mb-1">{useCtx.email}</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded px-4 py-2 text-lg"
            placeholder="Digite seu email"
          />
        </div>

        <div>
          <label className="block text-gray-600 mb-1">{useCtx.password}</label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded px-4 py-2 text-lg"
            placeholder="Digite sua nova senha"
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
    )
}