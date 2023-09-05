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
                            <div className={`w-1/2 bg-nord-4 m-1 rounded-lg`} key={key}>
                                <NamedAvatar
                                    name={leaderboard[Number(key)].name}
                                    points={leaderboard[Number(key)].points}
                                    isOnline={leaderboard[Number(key)].isUser ? true : Boolean(Math.round(Math.random()))}
                                />
                            </div>

                        ))
                    }
                </Card>
            </div>
        </main>
    )
}