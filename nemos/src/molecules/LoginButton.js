import React from "react"
import { useAuth0 } from "@auth0/auth0-react"

const LoginButton = ({ className, children }) => {
  const { loginWithRedirect } = useAuth0()

  return (
    <button
      className={className ? className : ""}
      onClick={() => loginWithRedirect()}
    >
      {children}
    </button>
  )
}

export default LoginButton
