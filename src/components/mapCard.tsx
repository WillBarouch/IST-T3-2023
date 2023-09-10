'use client';
import Card from "@/components/Card";
import Map from "@/components/Map";
import NextLink from "next/link";
import {Avatar, Button, ChakraProvider} from "@chakra-ui/react";
import {CacheProvider} from "@chakra-ui/next-js";

export default function MapCard({large}:{large?:boolean}) {
    return <Card width={2} height={large? 1 : 3} title={"Last Workout:"}>
        <div className={`w-full h-full flex ${large?"flex-col" : "flex-row"}`}>
            <div className={`${large?"w-full":"w-1/2"} h-full rounded-lg overflow-hidden`}>
                <Map/>
            </div>
            <ChakraProvider>
            <CacheProvider>
            <div className={`${large?"w-full":"w-1/2"} ${large?"h-1/2":"h-full"} p-2 flex flex-col flex-wrap`}>
                <div className={"h-full"}>
                <p>25 Points</p>
                <p>Type: Run</p>
                <p>Duration: 40m</p>
                <p>Calories: 1200</p>
                <NextLink href={"/workout"}>
                <Button className={"mt-4"} colorScheme={"blue"}>View Workout</Button>
                </NextLink>
                </div>
                <div className={"flex flex-col gap-2"}>
                    <Avatar name={"John Doe"}></Avatar>
                    <Avatar name={"Jane Doe"}></Avatar>
                 </div>
            </div>

            </CacheProvider>
            </ChakraProvider>

        </div>

    </Card>;
}