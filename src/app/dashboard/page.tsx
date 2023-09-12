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
          <Card title="Calories burned today:" width={1} height={3}>
            <LineChart />
          </Card>
          <Card title="This week's food intake:" width={3} height={3}>
            <PieChart />
          </Card>
          <Card title="Today's Steps:" width={3} height={3}>
            {/*@ts-ignore*/}
            <RadialChart steps />
          </Card>
          <Card title="Today's calories:" width={3} height={3}>
            <RadialChart />
          </Card>
          <Card title="This week's fitness:" width={2} height={3}>
            <HistogramChart />
          </Card>
            <MapCard/>
        </div>
    </main>
  )
}
