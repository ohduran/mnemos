import React from "react"

const FlashCardSide = ({ className, text }) => {
  return (
    <section
      className={`absolute bg-michelangelo-white top-0 left-0 w-full h-full rounded-xl shadow-xl backface-visibility-hidden flex items-center justify-center ${
        className ? className : ""
      }`}
    >
      <span className="text-center">{text}</span>
    </section>
  )
}

const FlashCard = ({ frontText, backText, className }) => {
  return (
    <article
      className={`relative w-48 h-56 transition-all transform transform-style-preserve-3d ease-in duration-700 hover:transform-rotate-y-180 ${
        className ? className : ""
      }`}
    >
      <FlashCardSide id="front" text={frontText} />
      <FlashCardSide
        id="back"
        text={backText}
        className="transform-rotate-y-180"
      />
    </article>
  )
}

export default FlashCard
