import Card from "@/components/Card";
import Map from "@/components/Map";
import NextLink from "next/link";

export default function MapCard() {
    return <Card size={2}>
        <NextLink href={"/workout"}>
            <h1 className={"text-3xl font-bold self-center mb-5 -mt-5"}>Last Workout:</h1>
        </NextLink>
        <div className={"w-full h-full flex flex-row"}>
            <div className={"w-1/2 h-full rounded-lg overflow-hidden"}>
                <Map/>
            </div>
            <div className={"w-1/2 h-full p-2"}>
                <p>Type: Run</p>
                <p>Duration: 40m</p>
                <p>Calories: 1200</p>
            </div>
        </div>

    </Card>;
}