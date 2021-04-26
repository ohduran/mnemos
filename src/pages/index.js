import React from "react"
import { Helm, Sailor } from "../icons"
import { FlashCardSet } from "../organisms"
import { DefaultLayout } from "../layouts"
import { StaticImage } from "gatsby-plugin-image"

import HeroImage from "../../static/marc-wieland-YFFPD62BXQY-unsplash.jpg"

export default function Home() {
  return (
    <DefaultLayout>
      <section
        className="pt-5 bg-blend-overlay"
        style={{
          backgroundImage: `url(${HeroImage})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundColor: "#F4EEF3",
        }}
      >
        <div className="w-11/12 lg:w-8/12 max-w-4xl mx-auto">
          <h1 className="text-6xl sm:text-7xl md:text-8xl font-semibold font-family-secondary">
            Estudia el PER
            <br className="hidden lg:block" /> con viento de popa
          </h1>
          <p className="mt-5 text-lg sm:text-2xl lg:text-3xl leading-loose sm:leading-relaxed lg:leading-loose">
            Aprende más rápido, memoriza y entiende mejor
            <br className="hidden lg:block" /> todo lo que necesitas para
            navegar en la mar con confianza.
          </p>
        </div>
        <svg
          className="shadow"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#5e81ac"
            fillOpacity="1"
            d="M0,128L120,149.3C240,171,480,213,720,192C960,171,1200,85,1320,42.7L1440,0L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          ></path>
        </svg>
      </section>

      <section className="-mt-2 pt-2 min-h-screen bg-nord-10">
        <div
          className="grid w-11/12 lg:w-8/12 max-w-4xl mx-auto items-center"
          style={{
            gridTemplateRows: "max-content 1fr",
            gridTemplateColumns: "max-content 1fr",
          }}
        >
          <Sailor
            primaryColor="#eceff4"
            className="col-start-1 col-span-2 row-start-1 h-32 sm:h-36 md:h-40 lg:h-48 xl:h-56 w-32 sm:w-36 md:w-40 lg:w-48 xl:w-56 justify-self-center"
          />
          <div className="col-start-1 col-span-2 row-start-2 mt-5 p-1">
            <h3 className="text-xl sm:text-3xl md:text-4xl font-bold">
              Conviértete en patrón, <br className="hidden md:block" /> incluso
              si no tienes tiempo.
            </h3>
            <p className="mt-3 md:mt-5 sm:text-lg md:text-xl leading-loose sm:leading-relaxed text-michelangelo-white">
              Utilizando el <span>recuerdo activo</span> y la{" "}
              <span>repetición espaciada</span>, te impresionará lo fácil y
              rápido que es sacarse el título.
            </p>
          </div>
        </div>
        <div
          className="mt-12 grid gap-8 w-11/12 lg:w-8/12 max-w-4xl mx-auto text-xs sm:text-base text-michelangelo-white"
          style={{
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "max-content max-content",
          }}
        >
          <div className="row-start-1 col-start-1 flex flex-col justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 sm:h-20 w-12 sm:w-20"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                clipRule="evenodd"
              />
            </svg>
            <p className="mt-3 md:mt-5">Unos minutos al día</p>
          </div>
          <div className="row-start-1 col-start-2 flex flex-col justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 sm:h-20 w-12 sm:w-20"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" />
            </svg>
            <p className="mt-3 md:mt-5">Ajustado a tu ritmo</p>
          </div>
          <div className="row-start-2 col-start-1 flex flex-col justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 sm:h-20 w-12 sm:w-20"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                clipRule="evenodd"
              />
            </svg>
            <p className="mt-3 md:mt-5">Personalizado a tu horario</p>
          </div>
          <div className="row-start-2 col-start-2 flex flex-col justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 sm:h-20 w-12 sm:w-20"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M4.555 5.168A1 1 0 003 6v8a1 1 0 001.555.832L10 11.202V14a1 1 0 001.555.832l6-4a1 1 0 000-1.664l-6-4A1 1 0 0010 6v2.798l-5.445-3.63z" />
            </svg>
            <p className="mt-3 md:mt-5">Más fácil y en menos tiempo</p>
          </div>
        </div>
      </section>
      <section>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#5e81ac"
            fillOpacity="1"
            d="M0,0L60,37.3C120,75,240,149,360,186.7C480,224,600,224,720,213.3C840,203,960,181,1080,154.7C1200,128,1320,96,1380,80L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
        <div className="mt-5 w-11/12 lg:w-8/12 max-w-4xl mx-auto text-nord-0">
          <h3 className="text-xl sm:text-3xl font-bold">
            Tu cerebro es un músculo
          </h3>
          <p className="mt-3 md:mt-5 sm:text-lg md:text-xl leading-loose sm:leading-relaxed">
            Los métodos tradicionales intentan "copiar y pegar" el temario en tu
            mente con clases y lecciones. Pero el cerebro no funciona como un
            ordenador, sino como un músculo.
          </p>
          <FlashCardSet
            className="my-5 sm:my-7"
            questions={[
              {
                prompt:
                  "¿Cómo se llama el plano vertical que divide el buque, de proa a popa, en dos mitades simétricas?",
                answer: "Plano de crujía",
                sectionTitle: "Nomenclatura",
              },
              {
                prompt:
                  "¿Qué clase de marca representa una luz roja en periodos de 2 ocultaciones cortas y una larga?",
                answer: "Canal principal a estribor",
                sectionTitle: "Balizamiento",
              },
            ]}
          />
          <p className="mt-3 md:mt-5 sm:text-lg md:text-xl leading-loose sm:leading-relaxed">
            A base de entrenamiento diario, ejercicios de dificultad progresiva
            y repeticiones, tu mente procesa, integra y memoriza casi sin
            esforzarse.
          </p>
        </div>
      </section>
      <section>
        <div className="my-5 sm:my-7 items-center justify-center grid grid-cols-1">
          <StaticImage
            className="opacity-50 mix-blend-multiply col-start-1 row-start-1 z-0 h-64 w-screen object-cover"
            src="../../static/luke-bender-h_YjxPtkRHA-unsplash.jpg"
            alt="Futuros patrones disfrutando de las vistas"
            style={{
              borderRadius: "100%/0 0 75px 75px",
            }}
          />
          <h3 className="col-start-1 row-start-1 z-10 text-3xl sm:text-4xl lg:text-5xl text-center font-semibold text-nord-0">
            Te encantará
            <br />
            aprender
            <br />
            con Nemos
          </h3>
        </div>
      </section>
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
                  defaultValue=""
                  autoComplete="email"
                  type="email"
                  name="EMAIL"
                  className="required email text-gray-400 text-sm py-1 px-3 rounded-xl shadow-md w-8/12 mx-auto mt-1"
                  id="mce-EMAIL"
                />
              </div>
              <div id="mce-responses" className="clear">
                <div
                  className="response"
                  id="mce-error-response"
                  style={{ display: "none" }}
                ></div>
                <div
                  className="response"
                  id="mce-success-response"
                  style={{ display: "none" }}
                ></div>
              </div>
              <div
                style={{
                  position: "absolute",
                  left: "-5000px",
                }}
                aria-hidden="true"
              >
                <input
                  type="text"
                  name="b_3027b73fd81dbeb61ffe9b85c_1c7064dfbc"
                  tabIndex="-1"
                  defaultValue=""
                />
              </div>
              <div className="clear mt-3 md:mt-5 flex items-center">
                <input
                  type="submit"
                  value="¡Me apunto!"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  className="button cursor-pointer rounded-full px-5 py-1 w-8/12 mx-auto font-family-secondary text-lg shadow-xl"
                />
              </div>
            </div>
          </form>
        </div>
      </section>
    </DefaultLayout>
  )
}
