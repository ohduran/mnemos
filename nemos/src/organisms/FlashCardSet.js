import React, { useState } from "react"
import { FlashCard, FlashCardSetCompleteFlashCard } from "../molecules"

const FlashCardSet = ({ questions, className, completeSetMessage }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [listOfQuestions, setListOfQuestions] = useState(questions)

  const handleNextCard = () => {
    if (currentIndex + 1 < listOfQuestions.length) {
      return setCurrentIndex(currentIndex + 1)
    } else {
      return setCurrentIndex(0)
    }
  }

  function handleRemoveCard() {
    if (currentIndex >= listOfQuestions.length - 1) {
      setCurrentIndex(0)
    }
    const newListOfQuestions = listOfQuestions.filter((item) => listOfQuestions.indexOf(item) !== currentIndex)
    setListOfQuestions(newListOfQuestions)
    setProgress(100 - (newListOfQuestions.length / questions.length) * 100)
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
            progress={progress}
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
