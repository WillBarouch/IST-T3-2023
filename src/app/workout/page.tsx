'use client';
import Sidebar from "@/components/Sidebar";
import Map from "@/components/Map";
import Card from "@/components/Card"
import NamedAvatar from "@/components/NamedAvatar";
import {ChakraProvider} from "@chakra-ui/react";
import React from "react";
import {CacheProvider} from "@chakra-ui/next-js";
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
} from '@chakra-ui/react'
import HRChart from "@/components/HRChart";

export default function Workout() {
    return(
    <main className="min-h-screen bg-nord4 text-nord-0 flex flex-col overflow-hidden">
        <Sidebar/>
        <div className={"h-screen w-3/4 self-end flex flex-row flex-wrap p-4 items-center text-xl"}>
            <Card width={1} height={1}>
                <div className={"w-full text-center mb-2"}>
                    <h1 className={"text-3xl font-bold self-center"}>Vaucluse Walk</h1>
                    <h1 className={"text-3xl font-bold self-center"}>July 25</h1>
                </div>
                <div className={"w-full h-1/2 rounded-lg overflow-hidden"}>
                    <Map/>
                </div>
                <div className={"w-full h-1/3 flex flex-row pt-5"}>
                <CacheProvider>
                <ChakraProvider>
                    <div className={"w-1/6 flex flex-col"}>

                            <NamedAvatar name={"Jane Doe"} points={1400} isOnline={false}/>
                            <NamedAvatar name={"John Doe"} points={140} isOnline/>
                    </div>
                    <div className={"full flex flex-row"}>
                        <Stat>
                          <StatLabel>Points</StatLabel>
                          <StatNumber>17</StatNumber>
                          <StatHelpText>
                            <StatArrow type="increase" />
                              15
                          </StatHelpText>
                        </Stat>
                        <Stat>
                          <StatLabel>Calories</StatLabel>
                          <StatNumber>1247</StatNumber>
                          <StatHelpText>
                            <StatArrow type="decrease" />
                              1632
                          </StatHelpText>
                        </Stat>
                        <Stat>
                          <StatLabel>Duration</StatLabel>
                          <StatNumber>46m</StatNumber>
                          <StatHelpText>
                            <StatArrow type="increase" />
                                41m
                          </StatHelpText>
                        </Stat>
                        <Stat>
                          <StatLabel>Steps</StatLabel>
                          <StatNumber>4564</StatNumber>
                          <StatHelpText>
                            <StatArrow type="decrease" />
                              5257
                          </StatHelpText>
                        </Stat>
                        <Stat width={"300px"}>
                          <StatLabel>Average HR</StatLabel>
                          <StatNumber>97 BPM</StatNumber>
                          <StatHelpText>
                            <StatArrow type="decrease" />
                              104 BPM
                          </StatHelpText>
                        </Stat>
                    </div>
                </ChakraProvider>
                </CacheProvider>

                </div>
               <HRChart/>
            </Card>
        </div>
    </main>
)}