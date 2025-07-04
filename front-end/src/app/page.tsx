"use client"

import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-700 text-white px-4">
      <div className="bg-white text-gray-900 rounded-3xl shadow-2xl p-10 w-full max-w-7xl text-center space-y-6 px-6 lg:px-12">
        <h1 className="text-4xl font-bold text-indigo-700">RedaAI — Avaliação Inteligente de Redações ENEM</h1>

        <p className="text-gray-700 text-lg">
          Nossa missão é democratizar o acesso à educação de qualidade. Utilizamos inteligência artificial para oferecer 
          <span className="font-semibold text-indigo-600"> correções automáticas, rápidas e precisas </span> 
          das suas redações do ENEM, com foco em 
          <span className="font-semibold text-indigo-600"> estudantes de baixa renda </span> que desejam alcançar a universidade.
        </p>

        <ul className="text-left text-gray-700 list-disc list-inside space-y-1">
          <li>✔️ Corrige seus textos com base nos critérios oficiais do ENEM</li>
          <li>✔️ Feedbacks personalizados e objetivos</li>
          <li>✔️ Plataforma gratuita e fácil de usar</li>
          <li>✔️ Ideal para quem não tem acesso a professores ou cursinhos</li>
        </ul>

        <p className="text-gray-700 italic">
          "A educação transforma vidas. Nossa IA quer transformar a sua."
        </p>

        <div className="flex flex-row md:flex-row gap-4 ">
          <Link href={"/login"}>
            <button className="w-full md:w-auto bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition">
              Fazer Login
            </button>
          </Link>

          <Link href={"/register"}>
            <button className="w-full md:w-auto bg-white border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-semibold py-3 px-6 rounded-lg transition">
              Criar Conta Gratuita
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
