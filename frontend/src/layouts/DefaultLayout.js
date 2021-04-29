import React from "react"

import { SEO } from "../molecules"
import { Footer, NavBar } from "../organisms"

const DefaultLayout = ({ children, className }) => {
  return (
    <div
      className={`min-h-screen min-w-screen grid grid-cols-3 ${
        className ? className : ""
      }`}
      style={{
        gridTemplateRows: "max-content 1fr max-content",
      }}
    >
      <SEO
        title={"Nemos"}
        description={"Estudia el PER con viento de popa"}
        article={false}
      />
      <NavBar className="col-start-1 col-span-3" />
      <main className="col-start-1 col-span-3 row-start-2 mb-5">
        {children}
      </main>
      <Footer className="col-start-1 col-span-3 row-start-3" />
    </div>
  )
}

export default DefaultLayout
