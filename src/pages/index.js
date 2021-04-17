import React from "react"
import { BoatAnimated, Helm, Sailor } from "../icons"

export default function Home() {
  return (
    <div
      className="min-h-screen min-w-screen bg-nord-0 grid gap-2 grid-cols-3 pt-2"
      style={{
        gridTemplateRows: "max-content 1fr 1fr",
      }}
    >
      <nav className="col-start-1 col-span-3 flex items-baseline px-2">
        <Helm className="h-10 w-10" />
        <h1 className="pl-2 text-nord-13 text-4xl font-semibold font-family-secondary">
          Nemos
        </h1>
      </nav>
      <main className="bg-nord-1 col-start-1 row-start-2 col-span-3 py-5 flex justify-around">
        <div className="self-center">
          <h2 className="text-9xl font-family-secondary font-semibold">
            ¡Al abordaje!
          </h2>
          <p className="text-xl pt-16">
            La manera más rápida y fácil de aprobar el PER.
          </p>
        </div>
        <Sailor className="pl-5 h-96 w-96" primaryColor="#88c0d0" />
      </main>
    </div>
  )
}
