import getFormData from "@/actions/getFormData";

export default function Forms() {
  return (
    <div className="bg-white text-gray-900 rounded-lg shadow-xl p-10 max-w-2xl w-full text-center">
      <h1 className="font-bold text-3xl mb-10 text-center">Formulário de inscrição</h1>

      <form action={getFormData} className="grid grid-cols-2 gap-x-8 gap-y-6">
        <input
          type="text"
          name="usuario"
          placeholder="Digite seu usuário"
          className="p-5 text-lg border border-gray-300 rounded w-full"
        />
        <input
          type="text"
          name="cpf"
          placeholder="Digite seu CPF"
          className="p-5 text-lg border border-gray-300 rounded w-full"
        />
        <input
          type="email"
          name="email"
          placeholder="Digite seu email"
          className="p-5 text-lg border border-gray-300 rounded w-full"
        />
        <input
          type="password"
          name="password"
          placeholder="Digite sua senha"
          className="p-5 text-lg border border-gray-300 rounded w-full"
        />

        <div className="col-span-2">
          <input
            type="submit"
            value="Enviar"
            className="w-full bg-blue-600 text-white text-xl py-4 rounded hover:bg-blue-700 transition duration-200 cursor-pointer"
          />
        </div>
      </form>
    </div>
  );
}
