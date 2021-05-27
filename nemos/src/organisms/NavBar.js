import React from "react"
import { useAuth0 } from "@auth0/auth0-react"
import { Link } from "gatsby"
import { Helm } from "../icons"
import { LoginButton, LogoutButton } from "../molecules"

const NavBar = ({ className }) => {
  const { user, isAuthenticated, isLoading } = useAuth0()
  return (
    <nav
      className={`${className ? className : ""} grid items-center justify-between pt-2 px-2 pb-2 shadow-lg bg-nord-10`}
      style={{
        gridTemplateColumns: "max-content 1fr max-content",
      }}
    >
      <Link to="/" className="col-start-1 flex items-center">
        <Helm className="h-8 lg:h-10 w-8 lg:w-10" />
        <h1 className="pl-2 text-2xl lg:text-4xl font-bold font-family-secondary">Nemos</h1>
      </Link>
      <ul className="col-start-3 flex justify-around items-center text-nord-1 text-sm md:text-md lg:text-lg font-semibold">
        <li className="mr-5">
          <Link className="text-nord-3 hover:text-nord-0" to="/ciencia">
            Ciencia
          </Link>
        </li>
        {isAuthenticated ? (
          <>
            <li>
              <img
                className="h-8 w-8 rounded-full object-cover border border-nord-6"
                src={user.picture}
                alt={user.name}
              />
            </li>
          </>
        ) : (
          <li>
            <LoginButton className="p-2 shadow-lg bg-nord-8 rounded-full text-nord-6 font-semibold">
              ¡Únete ahora!
            </LoginButton>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default NavBar
