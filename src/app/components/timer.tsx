'use client'

import { RotateCcw } from "lucide-react";
import { Pause } from "lucide-react";
import { Play } from "lucide-react";

import React, { useState, useRef } from 'react'

export default function Stopwatch() {
  const [time, setTime] = useState(0)
  const [running, setRunning] = useState(false)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const start = () => {
    if (!running) {
      setRunning(true)
      timerRef.current = setInterval(() => {
        setTime((prev) => prev + 1)
      }, 1000)
    }
  }

  const stop = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current)
      timerRef.current = null
    }
    setRunning(false)
  }

  const reset = () => {
    stop()
    setTime(0)
  }

  const formatTime = (t: number) => {
    const minutes = String(Math.floor(t / 60)).padStart(2, '0')
    const seconds = String(t % 60).padStart(2, '0')
    return `${minutes}:${seconds}`
  }

  return (
    <div className="text-center">
      <h1 className="text-9xl text-red-900">{formatTime(time)}</h1>
      <div className="flex gap-10">       
              <button onClick={reset} className="playerBtns"><RotateCcw /></button>
              <button onClick={stop} className="playerBtns"><Pause /></button>
              <button onClick={start} className="playerBtns"><Play /></button>
            </div>
    </div>
  )
}
