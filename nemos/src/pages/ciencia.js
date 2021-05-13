import React from "react"
import { DefaultLayout } from "../layouts"
import { Link } from "gatsby"
import * as howItWorksStyles from "../styles/how-it-works.module.css"
import {Teaser} from "../organisms"

import { DayDreaming, Brain, InformationCarousel, RocketBoy, Thinking } from "../icons"

export default function Ciencia({ data }) {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center min-h-screen w-11/12 mx-auto pb-5">
        <Brain className="mt-5 h-80 md:h-96" />
        <h1 className="mt-3 text-6xl sm:text-7xl md:text-8xl font-semibold font-family-secondary">Ciencia</h1>
        <h2 className="mt-3 text-xl sm:text-2xl md:text-3xl text-center">Los avances científicos<br/>que hacen posible Nemos</h2>
        <div className="mt-5">
          <p className="w-10/12 mx-auto text-center sm:text-lg md:text-xl leading-loose">
            No es estudiar por tu cuenta si tienes como aliados a educadores, psicólogos y neurocientíficos. Utilizamos lo que la ciencia nos enseña para que sea más fácil, más divertido y más eficiente aprender a navegar.
          </p>
          <p className="mt-5 text-center font-family-secondary text-xl sm:text-2xl md:text-3xl">
            Nemos está a la vanguardia de las técnicas educativas.
          </p>
          <div className="mt-5 flex items-center justify-center w-11/12 mx-auto">
            <button className="p-3 rounded-full bg-nord-10 shadow-lg">
              <Link className="text-xl text-nord-6 font-family-secondary" to="/#registrate">
                Regístrate
              </Link>
            </button>
          </div>
        </div>
      </section>
      <Teaser isOdd={true} title="Repetición espaciada" IconComponent={InformationCarousel}>
        Ya desde el siglo XIX se sabe que el intervalo óptimo para repasar un recuerdo se va alargando con el tiempo, gracias al trabajo de Hermann Ebbinghaus. Es decir, que aprendes mejor si vas repasando cada vez con menos frecuencia, en vez de en intervalos regulares.
        En Nemos, utilizamos un mecanismo que organiza el temario a estudiar de manera eficiente. Acierta la pregunta, y no la volverás a ver en un tiempo; fállala, y sabremos que necesitas repasarla más así que la volverás a ver muy pronto.
        ¿Realmente hay una manera mejor de estudiar que esa?
      </Teaser>
      <Teaser isOdd={false} title="Emociones y Aprendizaje" IconComponent={RocketBoy}>
          Está demostrado: las emociones influyen sobre nuestra percepción y nuestra atención, mejorando así el aprendizaje.
              Nemos está diseñado como si fuera un juego: tu objetivo es dejar el contador de <em>flash cards</em> a cero.
              De esta forma, sacamos partido al efecto que tiene el juego sobre los neuromoduladores del aprendizaje (la dopamina, en particular), y aprovechamos el tiempo al máximo.
      </Teaser>
      <Teaser isOdd={true} title="Recuerdo Activo" IconComponent={Thinking}>
      Es posible que tu experiencia como estudiante con los examenes no fuese del todo buena. Sin embargo, la ciencia ha demostrado que examinarse no sólo comprueba tus conocimientos, sino que también es una herramienta eficaz para consolidarlos. En Nemos, estudiar es un examen, ¡y fallar no es algo malo! El <em>recuerdo activo</em>, tratar de recordar la respuesta sin mirar, es un componente fundamental del aprendizaje.
      </Teaser>
      <Teaser isOdd={false} title="Falsas ilusiones de competencia" IconComponent={DayDreaming}>
        Cuando un estudiante percibe que el tiempo de estudio ha sido productivo, pero en realidad no ha hecho más que perder el tiempo, está cayendo en una <em>falsa ilusión de competencia</em>. No es su culpa, sino el resultado de métodos de estudios ineficientes. Simplemente querer aprender y pasar tiempo suficiente con el libro delante no garantiza el aprendizaje. Con Nemos, el tiempo que le dedicas a estudiar será el mínimo imprescindible, pero te exigirá altos niveles de concentración.
      </Teaser>
    </DefaultLayout>
  )
}
