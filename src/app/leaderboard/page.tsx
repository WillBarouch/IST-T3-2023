import Sidebar from "@/components/Sidebar";
import React from "react";

export default function Leaderboard() {
    return (
        <main className="min-h-screen bg-nord4 text-nord-0 flex flex-col overflow-scroll">
            <Sidebar/>
            <div className={"h-screen w-3/4 self-end flex flex-col px-4 items-center"}>
            </div>
        </main>
    )
}