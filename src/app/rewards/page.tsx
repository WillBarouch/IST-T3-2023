'use client';
import Sidebar from "@/components/Sidebar";
import React from "react";
import Item from "@/components/Item";
import {ChakraProvider, Stat, StatArrow, StatHelpText, StatLabel, StatNumber} from "@chakra-ui/react";
import {CacheProvider} from "@chakra-ui/next-js";

export default function Rewards() {
    return(
        <main className="min-h-screen bg-nord4 text-nord-0 flex flex-col overflow-scroll">
            <Sidebar/>
            <ChakraProvider>
            <CacheProvider>
            <div className={"h-screen w-3/4 self-end flex flex-col px-4 items-center"}>
                <div className={"w-1/6 h-1/5 flex flex-row py-8 justify-center align-top"}>
                    <Stat>
                      <StatLabel>Points</StatLabel>
                      <StatNumber>140</StatNumber>
                      <StatHelpText>
                        <StatArrow type="increase" />
                            15
                      </StatHelpText>
                    </Stat>
                    <Stat>
                      <StatLabel>Rewards</StatLabel>
                      <StatNumber>4</StatNumber>
                    </Stat>
                </div>
                <section className={"flex flex-col w-full items-center justify-center"}>
                    <h2 className={"text-4xl mb-8 text-left"}>Rewards you can afford:</h2>
                    <div className={"flex flex-row gap-8 w-[95%] justify-center items-center"}>
                        {
                        [...Array(4)].map((x, i) => {
                            return <Item key={i} text={"Workout name - Workout type"} text2={"Points"} isWorkout={false}/>
                        })
                        }
                    </div>
                </section>
                <section className={"flex flex-col w-full items-center justify-center"}>
                    <h2 className={"text-4xl my-8 text-left left"}>You might have to work a little bit harder for these:</h2>
                    <div className={"flex flex-row gap-8 w-[95%] justify-center items-center"}>
                        {
                            [...Array(4)].map((x, i) => {
                                return <Item key={i} text={"Workout name - Workout type"} text2={"Points"} isWorkout={false}/>
                            })
                        }
                    </div>
                    <div className={"flex flex-row gap-8 w-[95%] justify-center items-center"}>
                        {
                            [...Array(4)].map((x, i) => {
                                return <Item key={i} text={"Workout name - Workout type"} text2={"Points"} isWorkout={false}/>
                            })
                        }
                    </div>
                </section>
            </div>
            </CacheProvider>
            </ChakraProvider>
        </main>
    )
}