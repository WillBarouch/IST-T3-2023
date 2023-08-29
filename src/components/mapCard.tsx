import Card from "@/components/Card";
import Map from "@/components/Map";

export default function MapCard() {
    return <Card size={2}>
        <h1 className={"text-3xl font-bold self-center flex flex-row flex-auto"}>Last Workout:</h1>
        <Map/>
        <div className={"w-1/3 float-right"}>
            <p>Type: Run</p>
            <p>Duration: 40m</p>
            <p>Calories: 1200</p>
        </div>
    </Card>;
}