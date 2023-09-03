import Sidebar from "@/components/Sidebar";
import Card from "@/components/Card"
import LineChart from "@/components/LineChart";
import PieChart from "@/components/PieChart";
import RadialChart from "@/components/RadialChart";
import HistogramChart from "@/components/HistogramChart";
import MapCard from "@/components/mapCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-nord4 text-nord-0 flex flex-col">
        <Sidebar pageIndex={0}></Sidebar>
        <div className={"h-screen w-3/4 self-end flex flex-row flex-wrap p-8 items-center"}>
            <Card width={1} height={3}>
                <h1 className={"text-3xl font-bold self-center"}>Calories burned today:</h1>
                <LineChart></LineChart>
            </Card>
            <Card width={3} height={3}>
                <h1 className={"text-3xl font-bold self-center"}>This week&apos;s food intake:</h1>
                <PieChart/>
            </Card>
            <Card width={3} height={3}>
                <h1 className={"text-3xl font-bold self-center"}>Today&apos;s Steps:</h1>
                {/*@ts-ignore*/}
                <RadialChart steps/>
            </Card>
            <Card width={3} height={3}>
                <h1 className={"text-3xl font-bold self-center"}>Today&apos;s calories:</h1>
                <RadialChart/>
            </Card>
            <Card width={2} height={3}>
                <h1 className={"text-3xl font-bold self-center"}>This week&apos;s fitness:</h1>
                <HistogramChart/>
            </Card>
            <MapCard/>
        </div>
    </main>
  )
}
