"use client"

import { useState } from "react";

export default function AddEssay () {

    const [essay, setEssay] = useState<string>();

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-3xl w-full bg-white rounded-xl shadow-md p-10">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Envie sua Redação</h1>

        <form className="space-y-6">
          <div>
            <label className="block text-lg font-medium text-gray-700 mb-2">
              Digite sua redação abaixo:
            </label>
            <textarea
              rows={20}
              placeholder="Escreva ou cole sua redação aqui..."
              className="w-full p-5 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none"
              value={essay}
              onChange={(e) => setEssay(e.target.value)}
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
  );
    
}