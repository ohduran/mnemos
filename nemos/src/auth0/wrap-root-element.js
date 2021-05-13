import React from "react"
import { Auth0Provider } from "@auth0/auth0-react";

export const wrapRootElement = ({element}) => {
    return (
        <Auth0Provider
            domain="dev--b6sazqj.eu.auth0.com"
            clientId="tkIQbNZKdT79hXYzgxZUBSiaOni1Vo1o"
            redirectUri="http://localhost:9000/perfil">
            {element}
        </Auth0Provider>
    )
}