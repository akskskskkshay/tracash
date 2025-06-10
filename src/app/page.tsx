import Link from "next/link";

import Stopwatch from "./components/timer";




export default function Home() {
  return (
    <main className="flex justify-center h-screen items-center bg-amber-50 babasf.className">
        <div className="w-100 h-72 bg-white rounded-lg p-3 flex flex-col items-center justify-center gap-3 shadow-2xl">
            <h1 className=" text-3xl text-red-700">Focus!</h1>
            <Stopwatch />
            
        </div>
    </main>
  );
}
