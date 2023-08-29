import Image from "next/image";
interface props {
    image:string,
    text:string,
    points:number,
}

export default function Item({image, text, points}:props) {
    return(
        <div className={"flex flex-col w-72 text-left overflow-hidden"}>
            <Image src={image} alt={text} className={"w-full h-44 object-cover rounded-lg"}/>
            <p className={"text-xl"}>{text}</p>
            <p className={"text-xl"}>{`${points} points`}</p>
        </div>
    )
}