import React from "react"
import { Link } from "gatsby"
import { Helm, Sailor } from "../icons"
import { FlashCardSet } from "../organisms"
import { StaticImage } from "gatsby-plugin-image"

import HeroImage from "../../static/marc-wieland-YFFPD62BXQY-unsplash.jpg"

export default function Home() {
  return (
    <div
      className="min-h-screen min-w-screen grid grid-cols-3"
      style={{
        gridTemplateRows: "max-content 1fr max-content",
      }}
    >
      <nav
        className="col-start-1 col-span-3 grid items-center justify-between pt-2 px-2 pb-2 shadow-lg bg-nord-10"
        style={{
          gridTemplateColumns: "max-content 1fr max-content",
        }}
      >
        <Link to="/" className="col-start-1 flex items-center">
          <Helm className="h-8 lg:h-10 w-8 lg:w-10" />
          <h1 className="pl-2 text-2xl lg:text-4xl font-bold font-family-secondary">
            Nemos
          </h1>
        </Link>
        <ul className="col-start-3 flex justify-around text-nord-1 text-sm font-semibold">
          <li>
            <Link to="/#registrate">Regístrate</Link>
          </li>
        </ul>
      </nav>
      <main className="col-start-1 col-span-3 row-start-2 mb-5">
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
                Conviértete en patrón, <br className="hidden md:block" />{" "}
                incluso si no tienes tiempo.
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
              Los métodos tradicionales intentan "copiar y pegar" el temario en
              tu mente con clases y lecciones. Pero el cerebro no funciona como
              un ordenador, sino como un músculo.
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
                    "¿Qué clase de marca representan 2 luces rojas en periodos de 2 ocultaciones cortas y una larga?",
                  answer: "Marcas de canal principal a estribor",
                  sectionTitle: "Balizamiento",
                },
              ]}
            />
            <p className="mt-3 md:mt-5 sm:text-lg md:text-xl leading-loose sm:leading-relaxed">
              A base de entrenamiento diario, ejercicios de dificultad
              progresiva y repeticiones, tu mente procesa, integra y memoriza
              casi sin esforzarse.
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
      </main>
      <footer className="col-start-1 col-span-3 row-start-3">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#8fbcbb"
            fillOpacity="1"
            d="M0,128L30,144C60,160,120,192,180,192C240,192,300,160,360,128C420,96,480,64,540,42.7C600,21,660,11,720,10.7C780,11,840,21,900,58.7C960,96,1020,160,1080,181.3C1140,203,1200,181,1260,149.3C1320,117,1380,75,1410,53.3L1440,32L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
        <div className="bg-nord-7 -mt-1 py-1 text-center text-sm text-gray-600 flex justify-center">
          <span>© 2021 Nemos</span>
          <a href="https://www.instagram.com/nemos_es/">
            <svg
              className="h-5 w-5 ml-3"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              width="512"
              height="512"
              x="0"
              y="0"
              viewBox="0 0 512 512"
            >
              <g>
                <linearGradient
                  xmlns="http://www.w3.org/2000/svg"
                  id="a"
                  gradientUnits="userSpaceOnUse"
                  x1="42.966156268"
                  x2="469.0337477"
                  y1="469.0296477168"
                  y2="42.9620562848"
                >
                  <stop offset="0" stop-color="#ffd600" />
                  <stop offset=".5" stop-color="#ff0100" />
                  <stop offset="1" stop-color="#d800b9" />
                </linearGradient>
                <linearGradient
                  xmlns="http://www.w3.org/2000/svg"
                  id="b"
                  gradientUnits="userSpaceOnUse"
                  x1="163.0429956456"
                  x2="348.9539083464"
                  y1="348.9538083312"
                  y2="163.0428956304"
                >
                  <stop offset="0" stop-color="#ff6400" />
                  <stop offset=".5" stop-color="#ff0100" />
                  <stop offset="1" stop-color="#fd0056" />
                </linearGradient>
                <linearGradient
                  xmlns="http://www.w3.org/2000/svg"
                  id="c"
                  gradientUnits="userSpaceOnUse"
                  x1="370.9291325432"
                  x2="414.3727849912"
                  y1="141.0676714336"
                  y2="97.6240189856"
                >
                  <stop offset="0" stop-color="#f30072" />
                  <stop offset="1" stop-color="#e50097" />
                </linearGradient>
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="m510.460938 150.453125c-1.246094-27.25-5.574219-45.859375-11.902344-62.140625-6.425782-17.082031-16.503906-32.554688-29.527344-45.34375-12.785156-13.023438-28.261719-23.105469-45.34375-29.535156-16.285156-6.324219-34.890625-10.648438-62.140625-11.886719-27.300781-1.25-36.023437-1.546875-105.546875-1.546875s-78.246094.296875-105.546875 1.539062c-27.25 1.246094-45.855469 5.574219-62.140625 11.902344-17.082031 6.425782-32.554688 16.503906-45.34375 29.527344-13.023438 12.785156-23.105469 28.257812-29.535156 45.339844-6.324219 16.285156-10.648438 34.894531-11.886719 62.140625-1.25 27.304687-1.546875 36.023437-1.546875 105.546875 0 69.527344.296875 78.25 1.546875 105.550781 1.242187 27.246094 5.570313 45.855469 11.898437 62.140625 6.425782 17.078125 16.503907 32.554688 29.527344 45.339844 12.785156 13.023437 28.261719 23.101562 45.34375 29.527344 16.28125 6.332031 34.890625 10.65625 62.140625 11.902343 27.304688 1.246094 36.023438 1.539063 105.546875 1.539063 69.523438 0 78.246094-.292969 105.546875-1.539063 27.25-1.246093 45.855469-5.570312 62.140625-11.902343 34.386719-13.296876 61.570313-40.480469 74.867188-74.867188 6.332031-16.285156 10.65625-34.894531 11.902344-62.140625 1.242187-27.304687 1.539062-36.023437 1.539062-105.546875 0-69.527344-.296875-78.246094-1.539062-105.546875zm-46.082032 208.996094c-1.136718 24.960937-5.308594 38.515625-8.8125 47.535156-8.613281 22.328125-26.257812 39.972656-48.585937 48.585937-9.019531 3.503907-22.574219 7.675782-47.535157 8.8125-26.988281 1.234376-35.085937 1.492188-103.445312 1.492188-68.363281 0-76.457031-.257812-103.449219-1.492188-24.957031-1.136718-38.511719-5.308593-47.535156-8.8125-11.117187-4.105468-21.175781-10.648437-29.433594-19.152343-8.503906-8.257813-15.046875-18.3125-19.152343-29.433594-3.503907-9.019531-7.675782-22.574219-8.8125-47.535156-1.230469-26.992188-1.492188-35.089844-1.492188-103.445313 0-68.359375.261719-76.453125 1.492188-103.449218 1.140624-24.960938 5.308593-38.515626 8.8125-47.535157 4.105468-11.121093 10.652343-21.179687 19.152343-29.4375 8.257813-8.503906 18.316407-15.046875 29.4375-19.148437 9.019531-3.507813 22.574219-7.675782 47.535157-8.816406 26.992187-1.230469 35.089843-1.492188 103.445312-1.492188h-.003906c68.355468 0 76.453125.261719 103.449218 1.496094 24.960938 1.136718 38.511719 5.308594 47.535157 8.8125 11.117187 4.105468 21.175781 10.648437 29.433593 19.148437 8.503907 8.257813 15.046876 18.316407 19.148438 29.4375 3.507812 9.019531 7.679688 22.574219 8.816406 47.535157 1.230469 26.992187 1.492188 35.089843 1.492188 103.445312 0 68.359375-.257813 76.453125-1.492188 103.449219zm0 0"
                  fill="url(#a)"
                  data-original="url(#a)"
                />
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="m255.996094 124.539062c-72.601563 0-131.457032 58.859376-131.457032 131.460938s58.855469 131.457031 131.457032 131.457031c72.605468 0 131.460937-58.855469 131.460937-131.457031s-58.855469-131.460938-131.460937-131.460938zm0 216.792969c-47.125-.003906-85.332032-38.207031-85.328125-85.335937 0-47.125 38.203125-85.332032 85.332031-85.332032 47.128906.003907 85.332031 38.207032 85.332031 85.332032 0 47.128906-38.207031 85.335937-85.335937 85.335937zm0 0"
                  fill="url(#b)"
                  data-original="url(#b)"
                />
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="m423.371094 119.347656c0 16.964844-13.753906 30.71875-30.71875 30.71875-16.96875 0-30.722656-13.753906-30.722656-30.71875 0-16.96875 13.753906-30.722656 30.722656-30.722656 16.964844 0 30.71875 13.753906 30.71875 30.722656zm0 0"
                  fill="url(#c)"
                  data-original="url(#c)"
                />
              </g>
            </svg>
          </a>
        </div>
      </footer>
    </div>
  )
}
