import React from "react"
import { DefaultLayout } from "../layouts"
import { Link } from "gatsby"
import { Helm } from "../icons"
import { Teaser } from "../organisms"

import { DayDreaming, Brain, InformationCarousel, RocketBoy, Thinking } from "../icons"

export default function Ciencia({ data }) {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center min-h-screen w-11/12 mx-auto pb-5">
        <Brain className="mt-5 h-80 md:h-96" />
        <h1 className="mt-3 text-6xl sm:text-7xl md:text-8xl font-semibold font-family-secondary">Ciencia</h1>
        <h2 className="mt-3 text-xl sm:text-2xl md:text-3xl text-center">
          Los avances científicos
          <br />
          que hacen posible Nemos
        </h2>
        <div className="mt-5">
          <p className="w-10/12 mx-auto text-center sm:text-lg md:text-xl leading-loose">
            No es estudiar por tu cuenta si tienes como aliados a educadores, psicólogos y neurocientíficos. Utilizamos
            lo que la ciencia nos enseña para que sea más fácil, más divertido y más eficiente aprender a navegar.
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
        Ya desde el siglo XIX se sabe que el intervalo óptimo para repasar un recuerdo se va alargando con el tiempo,
        gracias al trabajo de Hermann Ebbinghaus. Es decir, que aprendes mejor si vas repasando cada vez con menos
        frecuencia, en vez de en intervalos regulares. En Nemos, utilizamos un mecanismo que organiza el temario a
        estudiar de manera eficiente. Acierta la pregunta, y no la volverás a ver en un tiempo; fállala, y sabremos que
        necesitas repasarla más así que la volverás a ver muy pronto. ¿Realmente hay una manera mejor de estudiar que
        esa?
      </Teaser>
      <Teaser isOdd={false} title="Emociones y Aprendizaje" IconComponent={RocketBoy}>
        Está demostrado: las emociones influyen sobre nuestra percepción y nuestra atención, mejorando así el
        aprendizaje. Nemos está diseñado como si fuera un juego: tu objetivo es dejar el contador de{" "}
        <em>flash cards</em> a cero. De esta forma, sacamos partido al efecto que tiene el juego sobre los
        neuromoduladores del aprendizaje (la dopamina, en particular), y aprovechamos el tiempo al máximo.
      </Teaser>
      <Teaser isOdd={true} title="Recuerdo Activo" IconComponent={Thinking}>
        Es posible que tu experiencia como estudiante con los exámenes no fuese del todo buena. Sin embargo, la ciencia
        ha demostrado que examinarse no sólo comprueba tus conocimientos, sino que también es una herramienta eficaz
        para consolidarlos. En Nemos, estudiar es un examen, ¡y fallar no es algo malo! El <em>recuerdo activo</em>,
        tratar de recordar la respuesta sin mirar, es un componente fundamental del aprendizaje.
      </Teaser>
      <Teaser isOdd={false} title="Falsas ilusiones de competencia" IconComponent={DayDreaming}>
        Cuando un estudiante percibe que el tiempo de estudio ha sido productivo, pero en realidad no ha hecho más que
        perder el tiempo, está cayendo en una <em>falsa ilusión de competencia</em>. No es su culpa, sino el resultado
        de métodos de estudios ineficientes. Simplemente querer aprender y pasar tiempo suficiente con el libro delante
        no garantiza el aprendizaje. Con Nemos, el tiempo que le dedicas a estudiar será el mínimo imprescindible, pero
        te exigirá altos niveles de concentración.
      </Teaser>
      <section id="registrate">
        <div
          className="w-11/12 lg:w-8/12 max-w-lg mx-auto py-5 px-5 h-96 rounded-2xl shadow-xl flex flex-col items-center justify-center bg-nord-9"
          id="mc_embed_signup"
        >
          <Helm className="h-16 sm:h-20 w-16 sm:w-20" />
          <form
            action="https://gmail.us1.list-manage.com/subscribe/post?u=3027b73fd81dbeb61ffe9b85c&amp;id=1c7064dfbc"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
            noValidate
          >
            <div id="mc_embed_signup_scroll">
              <h2 className="mt-3 md:mt-5 text-xl sm:text-3xl text-center font-family-secondary font-semibold">
                Apúntate y te escribiremos cuando esté todo listo
              </h2>
              <div className="mc-field-group mt-5 flex flex-col items-center">
                <label className="text-nord-3" htmlFor="EMAIL">
                  Email
                </label>
                <input
                  placeholder="tuemail@nemos.es"
                  autoComplete="email"
                  type="email"
                  name="EMAIL"
                  className="required email text-gray-400 text-sm py-1 px-3 rounded-xl shadow-md w-8/12 mx-auto mt-1"
                  id="mce-EMAIL"
                />
              </div>
              <div id="mce-responses" className="clear">
                <div className="response" id="mce-error-response" style={{ display: "none" }}></div>
                <div className="response" id="mce-success-response" style={{ display: "none" }}></div>
              </div>
              <div
                style={{
                  position: "absolute",
                  left: "-5000px",
                }}
                aria-hidden="true"
              >
                <input type="text" name="b_3027b73fd81dbeb61ffe9b85c_1c7064dfbc" tabIndex="-1" defaultValue="" />
              </div>
              <div className="clear mt-3 md:mt-5 flex items-center">
                <input
                  type="submit"
                  value="¡Me apunto!"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button cursor-pointer rounded-full px-5 py-1 w-8/12 mx-auto font-family-secondary text-lg shadow-xl bg-nord-10"
                />
              </div>
            </div>
          </form>
        </div>
      </section>
    </DefaultLayout>
  )
}
