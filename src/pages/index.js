import React from "react"
import { Helm, Sailor } from "../icons"
import { FlashCard } from "../organisms"

export default function Home() {
  return (
    <div
      className="min-h-screen min-w-screen grid grid-cols-3"
      style={{
        gridTemplateRows: "max-content 1fr 1fr",
      }}
    >
      <nav
        className="col-start-1 col-span-3 grid items-center justify-between pt-2 px-2 pb-2 shadow-lg bg-michelangelo-blue"
        style={{
          gridTemplateColumns: "max-content 1fr max-content",
        }}
      >
        <div className="col-start-1 flex items-center">
          <Helm className="h-10 w-10" />
          <h1 className="pl-2 text-nord-13 text-4xl font-bold font-family-secondary text-michelangelo-brown">
            Nemos
          </h1>
        </div>
        <ul className="col-start-3 flex justify-around mr-5 text-michelangelo-white font-semibold">
          <li>Conócenos</li>
          <li className="ml-5">Contáctanos</li>
        </ul>
      </nav>
      <main className="col-start-1 row-start-2 col-span-3 pt-32bg-gradient-to-tr from-michelangelo-white via-michelangelo-white to-michelangelo-blue">
        <section className="grid grid-cols-3 h-screen">
          <div className="self-center justify-self-start p-16 pt-32 col-start-1 col-span-2 text-michelangelo-orange">
            <h1 className="text-8xl font-semibold font-family-secondary">
              ¡Al abordaje!
            </h1>
            <p className="mt-5">This text will get everyone to sign up</p>
            <div className="mt-5 p-5">
              <FlashCard
                frontText="¿Cuál es la capital de España?"
                backText="Madrid"
              />
            </div>
          </div>
          <Sailor
            className="py-5 h-full w-96 row-start-1 col-start-3 col-span-1 self-center justify-self-center z-10"
            primaryColor="#42819F"
          />
        </section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#42819F"
            fill-opacity="1"
            d="M0,128L120,149.3C240,171,480,213,720,192C960,171,1200,85,1320,42.7L1440,0L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
        <section className=""></section>
      </main>
    </div>
  )
}
