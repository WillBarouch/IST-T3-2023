import Sidebar from "@/components/Sidebar";
import Item from "@/components/Item";
import MapCard from "@/components/mapCard";
import {ImportCard} from "@/app/workouts/importCard";

export default function Workouts() {
    return(
    <main className="min-h-screen bg-nord4 text-nord-0 flex flex-col overflow-hidden">
        <Sidebar pageIndex={3}/>
        <div className={"h-screen w-3/4 self-end flex flex-row flex-wrap px-4 items-center overflow-scroll"}>
            <section className={"flex flex-col w-full items-center jusify-center "}>
                <h2 className={"text-4xl mb-8"}>Resume:</h2>
                <div className={"flex flex-row gap-8 w-[95%] justify-center items-center"}>
                    {
                        [...Array(4)].map((x, i) => {
                            return <Item key={i} text={"Workout name - Workout type"} text2={"Points"} isWorkout/>
                        })
                    }
                </div>
            </section>
            <section className={"flex flex-col w-full items-center justify-center"}>
                <h2 className={"text-4xl mb-4"}>Recommended for you:</h2>
                <div className={"flex flex-row gap-8 w-[95%] justify-center items-center"}>
                    {
                        [...Array(4)].map((x, i) => {
                            return <Item key={i} text={"Workout name - Workout type"} text2={"Points"} isWorkout/>
                        })
                    }
                </div>
            </section>
            <section className={"w-[1248px] h-full flex flex-row self-center align-middle mx-auto"}>
            <MapCard/>
            <ImportCard/>
            </section>
        </div>
    </main>
    )
}