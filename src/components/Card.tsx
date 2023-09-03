// @ts-ignore
export default function Card({ width, height, children }: { width: number, height:number, children: any }) {
  return (
    <div className={`bg-nord6 rounded-3xl border-8 border-nord4 flex flex-col align-middle justify-around p-8 overflow-clip w-${width == 1 ? "full" : `1/${width}`} h-${height == 1 ? "full" : `1/${height}`}`}>
      {children}
      <a className={"w-1/2 w-1/3 w-5/12"}></a>
    </div>
  );
}