import React from "react"
import { Link } from "gatsby"
import { Helm } from "../icons"
import { Seo } from "../molecules"
import { FlashCardSet } from "../organisms"

export default function NotFound() {
    return (
        <div
            className="min-h-screen min-w-screen grid grid-cols-3 bg-gradient-to-br from-nord-13 to-nord-10"
            style={{
                gridTemplateRows: "max-content 1fr max-content",
            }}
        >
            <Seo title={"404"} description={"Estudia el PER con viento de popa"} article={false} />
            <nav
                className="col-start-1 col-span-3 grid items-center justify-between pt-2 px-2 pb-2 shadow-lg bg-nord-10"
                style={{
                    gridTemplateColumns: "max-content 1fr max-content",
                }}
            >
                <Link to="/" className="col-start-1 flex items-center">
                    <Helm className="h-8 lg:h-10 w-8 lg:w-10" />
                    <h1 className="pl-2 text-2xl lg:text-4xl font-bold font-family-secondary">Nemos</h1>
                </Link>
                <ul className="col-start-3 flex justify-around text-nord-1 text-sm font-semibold">
                    <li>
                        <Link to="/#registrate">Regístrate</Link>
                    </li>
                </ul>
            </nav>
            <main className="col-start-1 col-span-3 row-start-2 mb-5 min-h-screen min-w-screen flex justify-center items-center">
                <div className="mt-5 w-11/12 lg:w-8/12 max-w-4xl mx-auto py-5 rounded-xl shadow-xl bg-gradient-to-tl from-nord-13 to-nord-10">
                    <FlashCardSet
                        className="my-5 sm:my-7"
                        questions={[
                            {
                                prompt: "¿Qué marca tiene franjas verticales azules y amarillas?",
                                answer: "Naufragio Reciente",
                                sectionTitle: "Página No Encontrada",
                            },
                        ]}
                    />
                </div>
            </main>
            <footer className="col-start-1 col-span-3 row-start-3 ">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                        fill="#8fbcbb"
                        fillOpacity="1"
                        d="M0,128L30,144C60,160,120,192,180,192C240,192,300,160,360,128C420,96,480,64,540,42.7C600,21,660,11,720,10.7C780,11,840,21,900,58.7C960,96,1020,160,1080,181.3C1140,203,1200,181,1260,149.3C1320,117,1380,75,1410,53.3L1440,32L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
                    ></path>
                </svg>
                <div className="bg-nord-7 -mt-1 py-1 text-center text-sm text-gray-600">© 2021 Nemos </div>
            </footer>
        </div>
    )
}
