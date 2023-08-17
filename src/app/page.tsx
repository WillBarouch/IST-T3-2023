import Image from 'next/image'
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <main className="min-h-screen items-center bg-nord4 text-nord-0">
      <Sidebar></Sidebar>
    </main>
  )
}
