import React from "react"
import { Seo } from "../molecules"
import { Footer, NavBar } from "../organisms"
import { Helm } from "../icons"

const AppLayout = ({ children, className }) => {
  return (
    <div
      className={`min-h-screen min-w-screen grid gap-4 bg-nord-4`}
      style={{
        gridTemplateColumns: "max-content 1fr",
      }}
    >
      <nav className="col-start-1 bg-nord-9 rounded-tr-xl p-2">
        <Helm className="h-10 w-10" />
      </nav>

      <main className="pt-5 col-start-2">{children}</main>
    </div>
  )
}

export default AppLayout
