'use client';
import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import NamedAvatar from "@/components/NamedAvatar";
import { Button, Stack } from '@chakra-ui/react'

import {BiSolidDashboard, BiSolidMedal, BiRun, BiSolidUser} from "react-icons/bi";
import {GiPodium} from 'react-icons/gi'

const pages = {
    0: {
        name: "Dashboard",
        icon: <BiSolidDashboard />
    },
    1: {
        name: "Rewards",
        icon: <BiSolidMedal />
    },
    2: {
        name: "Workouts",
        icon: <BiRun />
    },
    3: {
        name: "Profile",
        icon: <BiSolidUser />
    },
    4: {
        name: "Leaderboard",
        icon: <GiPodium />
    }
}

export default function Sidebar(){

    return(
    <CacheProvider>
      <ChakraProvider>
        <div className={"bg-nord-6 rounded-r-3xl h-screen w-1/3 p-6"}>
            <NamedAvatar name="John Doe" points={140} ></NamedAvatar>
            <Stack direction='column' spacing={4} className={"my-8"}>
                {
                    Object.keys(pages).map((key) => (
                    <Button
                    key={key}
                    leftIcon={pages[key].icon}
                    colorScheme='green'
                    variant='solid'
                >
                    {pages[key].name}
                </Button>
                    ))
                }
            </Stack>
            <div className={"flex flex-col"}>
                <span className={"text-3xl text-bold"}>Leaderboard</span>
            </div>
        </div>
      </ChakraProvider>
    </CacheProvider>
    )
}