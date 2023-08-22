import Image from 'next/image'
import Sidebar from "@/components/Sidebar";
import Card from "@/components/Card"
import LineChart from "@/components/LineChart";

export default function Home() {
  return (
    <main className="min-h-screen bg-nord4 text-nord-0 flex flex-col">
      <Sidebar pageIndex={0}></Sidebar>
      <div className={"h-screen w-3/4 self-end flex flex-row flex-wrap p-8 items-center"}>
        <Card size={1}>
            <LineChart></LineChart>
        </Card>
      <Card size={3}>
          Hello
      </Card>
      <Card size={3}>
          Hello
      </Card>
      <Card size={3}>
          Hello
      </Card>
      <Card size={2}>
          Hello
      </Card>
      <Card size={2}>
          Hello
      </Card>

      </div>
    </main>
  )
}
