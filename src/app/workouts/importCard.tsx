'use client';
import {CacheProvider} from "@chakra-ui/next-js";
import {Button, ChakraProvider} from "@chakra-ui/react";
import Card from "@/components/Card";
import {BsApple, BsTriangle, BsStrava, BsFillFileArrowUpFill} from "react-icons/bs";

const ButtonWidth = "w-5/12";

export function ImportCard() {
    return <CacheProvider>
        <ChakraProvider>
            <Card width={2} height={3} title={"Import workout data:"}>
                <div className={"w-full h-4/5 bg-nord-4 rounded-lg"}>
                    <div className={"p-3 flex flex-row flex-wrap basis-1/3 gap-2 items-center justify-center align-middle"}>
                        <Button leftIcon={<BsApple/>} colorScheme={"red"} className={ButtonWidth}>
                            Apple Health
                        </Button>
                        <Button leftIcon={<BsTriangle/>} className={ButtonWidth}>
                            Garmin
                        </Button>
                        <Button leftIcon={<BsStrava/>} colorScheme={"orange"} className={ButtonWidth}>
                            Strava
                        </Button>
                        <Button leftIcon={<BsFillFileArrowUpFill/>} colorScheme={"blue"} className={ButtonWidth}>
                            GPS Track
                        </Button>
                    </div>
                </div>
            </Card>
        </ChakraProvider>
    </CacheProvider>;
}