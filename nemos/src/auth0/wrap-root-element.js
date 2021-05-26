import React from "react"
import { Auth0Provider } from "@auth0/auth0-react"

export const wrapRootElement = ({ element }) => {
  return (
    <Auth0Provider
      domain={process.env.AUTH0_DOMAIN}
      clientId={process.env.AUTH0_CLIENTID}
      redirectUri={process.env.AUTH0_CALLBACK}
      responseType="token id_token"
      audience={process.env.AUTH0_AUDIENCE}
      scope="read:decks read:flashcards"
      // https://stackoverflow.com/questions/63465924/samesite-cookie-error-on-localhost-with-auth0
      useRefreshTokens={true}
      cacheLocation="localstorage"
    >
      {element}
    </Auth0Provider>
  )
}
