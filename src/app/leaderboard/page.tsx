'use client';
import Sidebar from "@/components/Sidebar";
import React from "react";
import Card from "@/components/Card";
import NamedAvatar from "@/components/NamedAvatar";
import leaderboard from "@/components/leaderboard";

export default function Leaderboard() {
    return (
        <main className="min-h-screen bg-nord4 text-nord-0 flex flex-col">
            <Sidebar/>
            <div className={"h-screen w-3/4 self-end flex flex-col px-4 py-8 items-center overflow-y-scroll"}>
                <Card width={2} height={1} title={"Leaderboard:"}>
                    <div className={"w-full items-center flex flex-row justify-center align-middle flex-wrap -mt-16"}>
                    {
                        Object.keys(leaderboard).map((key) => (
                            <div className={`w-full xl:w-2/3 ${leaderboard[Number(key)].isUser ? "bg-nord-4" : ""} m-1 rounded-lg p-2 flex flex-row items-start justify-start`} key={key}>
                                <h2 className={"text-3xl text-center align-middle self-center font-bold mr-6 w-16"}>{String(Number(key)+1)}. </h2>
                                <NamedAvatar
                                    name={leaderboard[Number(key)].name}
                                    points={leaderboard[Number(key)].points}
                                />
                            </div>

                        ))
                    }
                    </div>
                </Card>
            </div>
        </main>
    )
}