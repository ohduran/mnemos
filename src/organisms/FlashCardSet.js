import React, { useState } from "react"
import { FlashCard, FlashCardSetCompleteFlashCard } from "../molecules"

const FlashCardSet = ({ questions, className, completeSetMessage }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [listOfQuestions, setListOfQuestions] = useState(questions)

  const handleNextCard = () => {
    console.log("handling next card")
    if (currentIndex + 1 < listOfQuestions.length) {
      console.log(`setting current index to ${currentIndex + 1}`)
      return setCurrentIndex(currentIndex + 1)
    } else {
      console.log("setting current index to 0")
      return setCurrentIndex(0)
    }
  }

  function handleRemoveCard() {
    if (currentIndex >= listOfQuestions.length - 1) {
      setCurrentIndex(0)
    }
    const newListOfQuestions = listOfQuestions.filter(
      item => listOfQuestions.indexOf(item) !== currentIndex
    )
    setListOfQuestions(newListOfQuestions)
  }

  return (
    <div className={`${className} flex items-center justify-center`}>
      {listOfQuestions.length > 0 ? (
        listOfQuestions.map((question, index) => (
          <FlashCard
            key={question.prompt}
            className={`${index === currentIndex ? "block" : "hidden"}`}
            prompt={question.prompt}
            answer={question.answer}
            sectionTitle={question.sectionTitle}
            tryAgain={() => {
              handleNextCard()
            }}
            good={() => {
              handleRemoveCard(index)
            }}
          />
        ))
      ) : (
        <FlashCardSetCompleteFlashCard>
          {completeSetMessage ? completeSetMessage : "El repaso ha finalizado"}
        </FlashCardSetCompleteFlashCard>
      )}
    </div>
  )
}

export default FlashCardSet
