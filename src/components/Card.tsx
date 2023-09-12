// @ts-ignore

interface props {
     width: number,
    height:number,
    children: any,
    title?: string,
    between?:boolean
}

export default function Card({ width, height, children, title, between }:props) {
  return (
    <div className={`bg-nord6 rounded-3xl border-8 border-nord4 align-middle px-8 py-2 overflow-clip w-${width == 1 ? "full" : `1/${width}`} h-${height == 1 ? "full" : `1/${height}`}`}>
        {title && <h1 className={"text-3xl font-bold self-start align-top text-center h-[10%]"}>{title}</h1>}
        <div className={`w-full h-[95%] pt-10 3xl:pt-6 pb-3 self-end  ${between? "items-between justify-between" : "items-end justify-end"}`}>
            {children}
            <a className={"w-1/2 w-1/3 w-5/12"}></a>
        </div>
    </div>
  );
}