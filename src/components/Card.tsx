export default function Card({ size, children }) {
  return (
    <div className={`bg-nord6 rounded-3xl w-${size == 1 ? "full" : `1/${size}`} h-[30%]`}>
      {children}
      <a className={"w-1/2 w-1/3"}></a>
    </div>
  );
}
