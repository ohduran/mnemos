import React from "react"
import { DefaultLayout } from "../layouts"
import { gql } from "graphql-tag"
import { useQuery } from "@apollo/client"

const RANDOM_QUERY = gql`
  query {
    randomFlashCard(deckName: "Capitales") {
      id
      prompt
      answer
    }
  }
`

const Random = () => {
  const { loading, error, data } = useQuery(RANDOM_QUERY)
  return (
    <DefaultLayout>
      {loading && <p>Loading</p>}
      {error && <p>Error: ${error.message}</p>}
      {data && data.randomFlashCard.id}
    </DefaultLayout>
  )
}

export default Random
