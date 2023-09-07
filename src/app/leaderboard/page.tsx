'use client';
import Sidebar from "@/components/Sidebar";
import React from "react";
import Card from "@/components/Card";
import NamedAvatar from "@/components/NamedAvatar";
import leaderboard from "@/components/leaderboard";

export default function Leaderboard() {
    return (
        <main className="min-h-screen bg-nord4 text-nord-0 flex flex-col overflow-scroll">
            <Sidebar/>
            <div className={"h-screen w-3/4 self-end flex flex-col px-4 py-8 items-center"}>
                <Card width={2} height={1}>
                    <h1 className={"text-3xl font-bold text-center"}>Leaderboard</h1>
                    {
                        Object.keys(leaderboard).map((key) => (
                            <div className={`w-1/2 ${leaderboard[Number(key)].isUser ? "bg-nord-4" : ""} m-1 rounded-lg self-center p-2 flex flex-row items-center`} key={key}>
                                <h2 className={"text-3xl text-center align-middle font-bold mr-6"}>{String(Number(key)+1)}. </h2>
                                <NamedAvatar
                                    name={leaderboard[Number(key)].name}
                                    points={leaderboard[Number(key)].points}
                                />
                            </div>

                        ))
                    }
                </Card>
            </div>
        </main>
    )
}