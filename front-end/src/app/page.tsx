import Link from "next/link";

export default function Home() {
  return (
     <main className="min-h-screen flex items-center justify-center text-white px-4">
      <div className="bg-white text-gray-900 rounded-lg shadow-xl p-10 max-w-md w-full text-center">
        <h1 className="text-3xl font-bold mb-4">Bem-vindo ao Avaliador de Redações ENEM</h1>
        <p className="text-gray-600 mb-8">
          Nosso sistema utiliza inteligência artificial para fornecer feedbacks automáticos e personalizados em suas redações do ENEM. Pratique, aprenda e evolua!
        </p>
        
        <div className="flex flex-col gap-4">
            <Link href={"/register"}>
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-4 rounded cursor-pointer">
                Fazer Login
              </button>
            </Link>
          
          <Link href={"/register"}>
            <button className="w-full bg-white border border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-semibold py-2 px-4 rounded cursor-pointer">
              Criar Conta
            </button>
            </Link>
        </div>
      </div>
    </main>
  );
}
