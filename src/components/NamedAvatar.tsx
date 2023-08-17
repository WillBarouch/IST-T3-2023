import {Avatar, AvatarBadge} from "@chakra-ui/react";

interface props {
    name:string,
    points:number
}

export default function NamedAvatar({name, points}:props) {
    return(
        <div className={"flex flex-rows"}>
              <Avatar name={name}>
                <AvatarBadge boxSize='1.25em' bg='green.500' />
              </Avatar>
                <div className={"flex flex-col ml-4 text-l h-full align-middle"}>
                    <span className={"text-2xl"}>{name}</span>
                    <span>{points} Points</span>
                </div>
        </div>
    )
}