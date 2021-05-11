import React from "react"
import { DefaultLayout } from "../layouts"
import { gql } from "graphql-tag"
import { useQuery } from "@apollo/client"
import { FlashCardSet } from "../organisms"

const RANDOM_QUERY = gql`
  query {
    randomFlashCard(deckName: "Nemos") {
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
      {error && <p>Ha habido un error al cargar la flashcard</p>}
      {data && data.randomFlashCard && data.randomFlashCard.id && (
        <FlashCardSet
          className="my-7 sm:my-10"
          questions={[
            {
              prompt: data.randomFlashCard.prompt,
              answer: data.randomFlashCard.answer,
              sectionTitle: data.randomFlashCard.sectionTitle
                ? data.randomFlashCard.sectionTitle
                : "Flash Card del día",
            },
          ]}
          completeSetMessage={
            <>
              <p>¡Perfecto!</p>
            </>
          }
        />
      )}
    </DefaultLayout>
  )
}

export default Random
