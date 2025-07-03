export default function RedacaoPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow p-8">
        {/* Cabeçalho */}
        <div className="mb-6 border-b pb-4">
          <h1 className="text-3xl font-bold text-gray-800">Redação: Desigualdade Social no Brasil</h1>
          <p className="text-gray-500 mt-1">Enviada em 25/06/2025 · <span className="text-green-600 font-semibold">Corrigida</span></p>
        </div>

        {/* Texto da Redação */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-2 text-gray-700">Texto enviado</h2>
          <div className="bg-gray-50 p-5 rounded border text-justify leading-relaxed text-gray-800">
            A persistência da desigualdade social no Brasil evidencia um problema estrutural que...
            {/* Texto longo continua aqui */}
          </div>
        </div>

        {/* Notas por competência */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Notas por competência</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-indigo-100 p-4 rounded">
              <p className="font-medium text-indigo-800">Competência 1</p>
              <p className="text-2xl font-bold text-indigo-900">200</p>
            </div>
            <div className="bg-indigo-100 p-4 rounded">
              <p className="font-medium text-indigo-800">Competência 2</p>
              <p className="text-2xl font-bold text-indigo-900">160</p>
            </div>
            <div className="bg-indigo-100 p-4 rounded">
              <p className="font-medium text-indigo-800">Competência 3</p>
              <p className="text-2xl font-bold text-indigo-900">180</p>
            </div>
            <div className="bg-indigo-100 p-4 rounded">
              <p className="font-medium text-indigo-800">Competência 4</p>
              <p className="text-2xl font-bold text-indigo-900">180</p>
            </div>
            <div className="bg-indigo-100 p-4 rounded">
              <p className="font-medium text-indigo-800">Competência 5</p>
              <p className="text-2xl font-bold text-indigo-900">200</p>
            </div>
          </div>
        </div>

        {/* Comentários gerais */}
        <div>
          <h2 className="text-xl font-semibold mb-2 text-gray-700">Comentário da correção</h2>
          <div className="bg-yellow-50 p-4 rounded border-l-4 border-yellow-400 text-gray-800">
            Excelente domínio da norma padrão da língua, com argumentos bem desenvolvidos. Atenção a pequenos deslizes de coesão.
          </div>
        </div>
      </div>
    </div>
  );
}
