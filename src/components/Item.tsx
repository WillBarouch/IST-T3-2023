import NextLink from "next/link";

export default function Item({text,text2,isWorkout}:{text:string,text2:string,isWorkout:boolean}) {
    return(
        <div className={"flex flex-col w-72 text-left overflow-hidden"}>
            <NextLink href={isWorkout? "/workout" : ""}>
                <div className={"w-full h-44 object-cover bg-nord-1 rounded-lg"}/>
                <p className={"text-xl"}>{text}</p>
                <p className={"text-xl"}>{text2}</p>
            </NextLink>
        </div>
    )
}
