import React from "react"
import { Link } from "gatsby"
import { Helm } from "../icons"

const NavBar = ({ className }) => {
  return (
    <nav
      className={`${
        className ? className : ""
      } grid items-center justify-between pt-2 px-2 pb-2 shadow-lg bg-nord-10`}
      style={{
        gridTemplateColumns: "max-content 1fr max-content",
      }}
    >
      <Link to="/" className="col-start-1 flex items-center">
        <Helm className="h-8 lg:h-10 w-8 lg:w-10" />
        <h1 className="pl-2 text-2xl lg:text-4xl font-bold font-family-secondary">
          Nemos
        </h1>
      </Link>
      <ul className="col-start-3 flex justify-around text-nord-1 text-sm font-semibold">
        <li>
          <Link to="/#registrate">Regístrate</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
