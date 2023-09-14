'use client';
/* eslint-disable */
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import NamedAvatar from "@/components/NamedAvatar";
import { Button, Stack, Link } from '@chakra-ui/react';
import NextLink from "next/link";
import leaderboard from "@/components/leaderboard";
import {BiSolidDashboard, BiSolidMedal, BiRun, BiSolidUser} from "react-icons/bi";
import {GiPodium} from 'react-icons/gi'

const pages = [
    {
        name: "Profile",
        icon: <BiSolidUser />
    },
    {
        name: "Dashboard",
        icon: <BiSolidDashboard />
    },
    {
        name: "Rewards",
        icon: <BiSolidMedal />
    },
    {
        name: "Workouts",
        icon: <BiRun />
    },
    {
        name: "Leaderboard",
        icon: <GiPodium />
    }
]

export default function Sidebar(pageIndex:any){
    return(
    <CacheProvider>
    <ChakraProvider>
        <aside className={"bg-nord-6 rounded-r-3xl h-screen w-1/4 p-6 fixed"}>
            <Link as={NextLink} href={"/profile"} className={"no-underline"}>
            <NamedAvatar name="John Doe" points={140} isOnline/>
            </Link>

            <Stack direction='column' spacing={4} className={"my-8"}>
                {
                    Object.keys(pages).map((key) => (
                        <Link as={NextLink} href={pages[Number(key)].name.toLowerCase()}>
                            <Button
                            key={key}
                            leftIcon={pages[Number(key)].icon}
                            colorScheme='blue'
                            variant={(Number(key)===pageIndex) ? 'outline' : 'solid'}
                            className={"w-full"}
                            >
                            {pages[Number(key)].name}
                            </Button>
                        </Link>
                    ))
                }
            </Stack>
            <div className={"flex flex-col"}>
                <span className={"text-3xl text-bold"}>Leaderboard</span>
                <Stack direction='column' spacing={4} className={"my-8"}>
                    {
                        Object.keys(leaderboard.slice(0,5)).map((key) => (
                            <div className={`h-full`}>
                                <NamedAvatar
                                    name={leaderboard[Number(key)].name}
                                    points={leaderboard[Number(key)].points}
                                    isOnline={leaderboard[Number(key)].isUser ? true : Boolean(Math.round(Math.random()))}
                                />
                            </div>

                        ))
                    }
                </Stack>
            </div>
        </aside>
    </ChakraProvider>
    </CacheProvider>
    )
}