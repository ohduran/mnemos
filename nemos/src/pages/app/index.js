import React, { useEffect, useState } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import { gql, useQuery } from "@apollo/client"
import { AppLayout } from "../../layouts"
import { CardsStudiedChart } from "../../molecules"

const GET_ALL_FLASHCARDS = gql`
  query {
    allFlashCards(deckName: "Nemos") {
      id
      prompt
    }
  }
`

const Profile = () => {
  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0()
  const [accessToken, setAccessToken] = useState(null)

  const { loading, error, data } = useQuery(GET_ALL_FLASHCARDS, {
    headers: { Bearer: `JWT ${accessToken}` },
  })

  useEffect(() => {
    const getUserMetadata = async () => {
      try {
        const token = await getAccessTokenSilently({
          audience: process.env.AUTH0_AUDIENCE,
          scope: "read:decks",
        })
        setAccessToken(token)
      } catch (e) {
        console.log(e.message)
      }
    }

    getUserMetadata()
  }, [getAccessTokenSilently, user])

  return (
    isAuthenticated && (
      <AppLayout>
        <h2 className="text-4xl font-family-secondary">Hola, {user.given_name}</h2>
        <p className="mt-1">
          Llevas <strong>15</strong> días seguidos estudiando.
        </p>
        <CardsStudiedChart />
        <p>{user.email}</p>
        <h3>User Metadata</h3>
        <p>{loading ? "loading" : data ? data.allFlashCards[0].prompt : error.message}</p>
      </AppLayout>
    )
  )
}

export default Profile
