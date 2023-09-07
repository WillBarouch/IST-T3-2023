'use client';
import {Avatar, AvatarBadge, ChakraProvider} from "@chakra-ui/react";
import {CacheProvider} from "@chakra-ui/next-js";

interface props {
    name:string,
    points:number,
    isOnline?:boolean,
    className?:string,
}

export default function NamedAvatar({name, points, isOnline, className}:props) {
    return(
        <div className={"flex flex-rows " + className}>
            <ChakraProvider>
            <CacheProvider>
              <Avatar name={name}>
                <AvatarBadge boxSize='1.25em'
                             bg={isOnline ? 'green.500' : "red.500"}
                             className={isOnline == undefined ?"hidden":""} />
              </Avatar>
           </CacheProvider>
            </ChakraProvider>
                <div className={"flex flex-col ml-4 text-l h-full align-middle"}>
                    <span className={"text-2xl"}>{name}</span>
                    <span>{points} Points</span>
                </div>
        </div>
    )
}