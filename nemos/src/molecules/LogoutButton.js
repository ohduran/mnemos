import React from "react"
import { useAuth0 } from "@auth0/auth0-react"

const LogoutButton = ({ className, children }) => {
  const { logout } = useAuth0()

  return (
    <button
      className={className ? className : ""}
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      {children}
    </button>
  )
}

export default LogoutButton
