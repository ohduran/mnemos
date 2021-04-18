import React from "react"

const FlashCardSide = ({ className, text }) => {
  return (
    <section
      className={`absolute top-0 left-0 w-full h-full rounded-xl shadow-xl backface-visibility-hidden flex items-center justify-center ${
        className ? className : ""
      }`}
    >
      <span className="p-1 text-center break-words whitespace-pre-line">
        {text}
      </span>
    </section>
  )
}

const FlashCard = ({ frontText, backText, className }) => {
  return (
    <article
      className={`relative w-56 h-96 transition-all transform transform-style-preserve-3d ease-in duration-700 hover:transform-rotate-y-180 ${
        className ? className : ""
      }`}
    >
      <FlashCardSide
        id="front"
        text={frontText}
        className="bg-michelangelo-white text-michelangelo-brown"
      />
      <FlashCardSide
        id="back"
        text={backText}
        className="transform-rotate-y-180 bg-michelangelo-blue text-michelangelo-white"
      />
    </article>
  )
}

export default FlashCard
