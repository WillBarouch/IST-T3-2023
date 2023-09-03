'use client';
import Sidebar from "@/components/Sidebar";
import React from "react";
import {CacheProvider} from "@chakra-ui/next-js";
import {
    Avatar,
    Badge, Button,
    ChakraProvider,
    Stat,
    StatArrow,
    StatHelpText,
    StatLabel,
    StatNumber
} from "@chakra-ui/react";
import Card from "@/components/Card";
import MapCard from "@/components/mapCard";

export default function Profile() {
    return(
        <main className="min-h-screen bg-nord4 text-nord-0 flex flex-col overflow-hidden">
            <Sidebar/>
            <ChakraProvider>
                <CacheProvider>
               <div className={"h-screen w-3/4 self-end flex flex-col flex-wrap p-8 items-center text-xl gap-2"}>
                   <div className={"flex flex-row items-center flex-wrap mb-8"}>
                        <Avatar size={"2xl"} name={"John Doe"} src={"https://bit.ly/dan-abramov"} />
                       <p className={"text-7xl ml-6"}>John Doe</p>
                       <div className={"flex flex-row flex-wrap  gap-6 ml-48"}>
                            <Stat>
                              <StatLabel>Points</StatLabel>
                              <StatNumber>140</StatNumber>
                              <StatHelpText>
                                <StatArrow type="increase" />
                                    15
                              </StatHelpText>
                            </Stat>
                            <Stat>
                              <StatLabel>Following</StatLabel>
                              <StatNumber>192</StatNumber>
                            </Stat>
                            <Stat>
                                <StatLabel>Followers</StatLabel>
                              <StatNumber>1.9k</StatNumber>
                              <StatHelpText>
                                <StatArrow type="increase" />
                                    123
                              </StatHelpText>
                            </Stat>
                       </div>
                   </div>
                   <div className={"flex flex-row items-center gap-3 flex-wrap"}>
                        <Badge borderRadius={15} >Two-Year Club</Badge>
                        <Badge borderRadius={15} colorScheme='green'>Fitness Guru</Badge>
                        <Badge colorScheme='blue' borderRadius={15}>Iron Athlete</Badge>
                        <Badge colorScheme='purple' borderRadius={15}>Dedicated Dynamo</Badge>
                        <Badge colorScheme='yellow' borderRadius={15}>Wellness Warrior</Badge>
                        <Badge colorScheme='red' borderRadius={15}>Calorie Crusher</Badge>
                        <Badge colorScheme='orange' borderRadius={15}>Strength Stalwart</Badge>
                    </div>
                    <div className={"flex flex-col flex-wrap w-full h-3/4 justify-start align-baseline"}>
                        <Card width={2} height={2}>
                            <h1 className={"text-3xl font-bold"}>Go Pro!</h1>
                            <p className={"text-2xl"}>Unlock exclusive benefits for just $9.99 per month!</p>
                            <div className={"flex flex-row w-full flex-initial gap-6 align-middle items-center justify-center mt-12"}>
                                <Button className={"w-1/3"} colorScheme={"red"}>Maybe later</Button>
                                <Button className={"w-1/3"} colorScheme={"green"}>Yes please!</Button>
                            </div>
                        </Card>
                        <Card width={2} height={2}>
                            <h1 className={"text-3xl font-bold"}>Settings</h1>
                            <p className={"text-2xl"}>Password: **********</p>
                            <p className={"text-2xl"}>Email: johnddoe@hotmail.net</p>
                            <div className={"flex flex-row w-full flex-initial gap-6 align-middle items-center justify-center mt-12"}>
                                <Button className={"w-1/3"} colorScheme={"blue"}>Change</Button>
                            </div>
                        </Card>
                        <MapCard large/>

                    </div>
                </div>
                </CacheProvider>
            </ChakraProvider>

        </main>
    )
}
