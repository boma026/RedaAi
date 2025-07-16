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
            <Link href="/add" className="py-2 px-4 rounded hover:bg-[#440986] hover:text-white text-black">Nova redaçao</Link>
            <Link href="/dashboard" className="py-2 px-4 rounded hover:bg-[#440986] hover:text-white text-black">Dashboard</Link> 
            <Link href="/editProfile" className="py-2 px-4 rounded hover:bg-[#440986] hover:text-white text-black">Profile</Link>
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
