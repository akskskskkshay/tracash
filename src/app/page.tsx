import Image from "next/image";
import Link from "next/link";
import { RotateCcw } from "lucide-react";
import { Pause } from "lucide-react";
import { Play } from "lucide-react";




export default function Home() {
  return (
    <main className="flex justify-center h-screen items-center bg-amber-50 babasf.className">
        <div className="w-100 h-72 bg-white rounded-lg p-3 flex flex-col items-center justify-center gap-3 shadow-2xl">
            <h1 className=" text-3xl text-red-700">Focus!</h1>
            <h1 className="text-9xl text-red-900">11<span>:</span>11</h1>
            <div className="flex gap-10">       
              <Link href="/fancy"><button className="playerBtns"><RotateCcw /></button></Link>
              <Link href="/fancy"><button className="playerBtns"><Pause /></button></Link>
              <Link href="/fancy"><button className="playerBtns"><Play /></button></Link>
            </div>
        </div>
    </main>
  );
}
