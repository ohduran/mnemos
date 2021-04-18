import React from "react"

const FlashCardSide = ({ className, text, sectionNumber, sectionTitle }) => {
  return (
    <section
      className={`absolute top-0 left-0 w-full h-full rounded-xl shadow-xl backface-visibility-hidden grid items-center justify-center ${
        className ? className : ""
      }`}
      style={{
        gridTemplateRows: "max-content 1fr max-content",
      }}
    >
      <h2 className="row-start-1 pt-2 text-center font-semibold tracking-wide text-xs uppercase text-michelangelo-orange">
        {sectionNumber} · {sectionTitle}
      </h2>
      <h1 className="row-start-2 p-1 text-center break-words whitespace-pre-line">
        {text}
      </h1>
    </section>
  )
}

const FlashCard = ({
  frontText,
  backText,
  className,
  sectionNumber,
  sectionTitle,
}) => {
  return (
    <article
      className={`relative w-56 h-96 transition-all transform transform-style-preserve-3d ease-in duration-700 hover:transform-rotate-y-180 ${
        className ? className : ""
      }`}
    >
      <FlashCardSide
        id="front"
        text={frontText}
        sectionNumber={sectionNumber}
        sectionTitle={sectionTitle}
        className="bg-michelangelo-yellow text-michelangelo-brown"
      />
      <FlashCardSide
        id="back"
        text={backText}
        sectionNumber={sectionNumber}
        sectionTitle={sectionTitle}
        className="transform-rotate-y-180 bg-michelangelo-blue text-michelangelo-white font-semibold"
      />
    </article>
  )
}

export default FlashCard
