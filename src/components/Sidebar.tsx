'use client';
/* eslint-disable */
import { CacheProvider } from '@chakra-ui/next-js';
import { ChakraProvider } from '@chakra-ui/react';
import NamedAvatar from "@/components/NamedAvatar";
import { Button, Stack, Link } from '@chakra-ui/react';
import NextLink from "next/link";

import {BiSolidDashboard, BiSolidMedal, BiRun, BiSolidUser} from "react-icons/bi";
import {GiPodium} from 'react-icons/gi'

const pages = [
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
        name: "Profile",
        icon: <BiSolidUser />
    },
    {
        name: "Leaderboard",
        icon: <GiPodium />
    }
]

const leaderboard =  [
    {
        name: "Jane Doe",
        points: 1400,
        isUser: false,
    },
    {
        name: "Tom Smith",
        points: 940,
        isUser: false,
    },
    {
        name: "Alex Smith",
        points: 220,
        isUser: false,
    },
    {
        name: "John Doe",
        points: 140,
        isUser: true,
    },
    {
        name: "Emma James",
        points: 12,
        isUser: false,
    }
]

export default function Sidebar(pageIndex:any){
    console.log(pageIndex)
    return(
    <CacheProvider>
      <ChakraProvider>
        <div className={"bg-nord-6 rounded-r-3xl h-screen w-1/4 p-6 fixed"}>
            <Link as={NextLink} href={"/profile"}       >
            <NamedAvatar name="John Doe" points={140} isOnline/>
            </Link>

            <Stack direction='column' spacing={4} className={"my-8"}>
                {
                    Object.keys(pages).map((key) => (
                        <Link as={NextLink} href={`/${(pages[Number(key)].name.toLowerCase() == "dashboard") ? "/" : pages[Number(key)].name.toLowerCase()}`}>
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
                        Object.keys(leaderboard).map((key) => (
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
        </div>
      </ChakraProvider>
    </CacheProvider>
    )
}