import Sidebar from "@/components/Sidebar";
import Item from "@/components/Item";
import workoutList from "@/app/workouts/workoutList";
import MapCard from "@/components/mapCard";

export default function Workouts() {
    return(
    <main className="min-h-screen bg-nord4 text-nord-0 flex flex-col">
        <Sidebar/>
        <div className={"h-screen w-3/4 self-end flex flex-row flex-wrap p-8 items-center"}>
            <section className={"flex flex-col w-full"}>
                <h2 className={"text-4xl mb-8"}>Resume:</h2>
                <div className={"flex flex-row gap-8"}>
                    {
                        workoutList.resume.map((item, index) => {
                            return <Item key={index} image={item.image} text={item.name} points={item.points}/>
                        })
                    }
                </div>
            </section>
            <section className={"flex flex-col w-full"}>
                <h2 className={"text-4xl mb-8"}>Recommended for you:</h2>
                <div className={"flex flex-row gap-8"}>
                    {
                        workoutList.recommendations.map((item, index) => {
                            return <Item key={index} image={item.image} text={item.name} points={item.points}/>
                        })
                    }
                </div>
            </section>
            <MapCard/>
        </div>
    </main>
    )
}