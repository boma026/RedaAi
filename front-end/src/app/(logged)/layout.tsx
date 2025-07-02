import Link from "next/link";
import { ReactNode } from "react"

type Props = {
    children: ReactNode;
}

export default function LoggedLayout ({children}: Props) {
    return (
        <div className="flex min-h-screen flex-col">

        {/* Corpo principal com sidebar + conteúdo */}
        <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="w-60 bg-[#F2F2F7] p-4">
          <nav className="flex flex-col gap-2">
            <Link href="/dashboard" className="py-2 px-4 rounded hover:bg-[#440986] hover:text-white">Peças</Link>
            <Link href="/montagem" className="py-2 px-4 rounded hover:bg-[#440986] hover:text-white">Visualização</Link> {/* ✅ Alterado aqui */}
            <Link href="/dashboard/clientes" className="py-2 px-4 rounded hover:bg-[#440986] hover:text-white">Clientes</Link>
          </nav>
        </aside>

        {/* Conteúdo principal */}
        <main className="flex-1 bg-white px-6">
          {children}
        </main>
      </div>
    </div>
  );
}
