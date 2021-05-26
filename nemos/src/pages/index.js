import React from "react";
import {Helm, Sailor} from "../icons";
import {FlashCardSet} from "../organisms";
import {DefaultLayout} from "../layouts";
import {StaticImage} from "gatsby-plugin-image";
import {graphql, Link} from "gatsby";
import * as howItWorksStyles from "../styles/how-it-works.module.css";

import HeroImage from "../../static/marc-wieland-YFFPD62BXQY-unsplash.jpg";
import {Testimonial} from "../molecules";

export default function Home({data}) {
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
            El método de{" "}
            <span className="font-family-secondary text-xl sm:text-3xl md:text-4xl">
              flash cards
            </span>{" "}
            con el que aprenderás más rápido y por más tiempo todo lo que
            necesitas para navegar en la mar con confianza.
          </p>
          <div
            className="w-11/12 lg:w-8/12 max-w-lg my-5 py-5 px-5 h-full rounded-2xl shadow-xl flex flex-col items-center justify-center bg-nord-9"
            id="mc_embed_signup"
          >
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
                  <div
                    className="response"
                    id="mce-error-response"
                    style={{display: "none"}}
                  ></div>
                  <div
                    className="response"
                    id="mce-success-response"
                    style={{display: "none"}}
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
                    className="button cursor-pointer rounded-full px-5 py-1 w-8/12 mx-auto font-family-secondary text-lg shadow-xl bg-nord-10"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
        <svg
          style={{
            marginBottom: "-0.0625rem",
          }}
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

      <section className="pt-2 bg-nord-10">
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
            <p className="mt-3 md:mt-5 sm:text-lg md:text-xl leading-loose sm:leading-relaxed text-nord-6">
              Utilizando el{" "}
              <span className="font-family-secondary text-lg sm:text-xl md:text-2xl">
                recuerdo activo
              </span>{" "}
              y la{" "}
              <span className="font-family-secondary text-lg sm:text-xl md:text-2xl">
                repetición espaciada
              </span>
              , te impresionará lo fácil y rápido que es sacarse el título.
            </p>
          </div>
        </div>
        <div
          className="mt-12 grid gap-8 w-11/12 lg:w-8/12 max-w-4xl mx-auto text-xs sm:text-base text-nord-6"
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
            <p className="mt-3 md:mt-5">Más rápido</p>
          </div>
        </div>
      </section>
      <section>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          style={{
            marginTop: "-0.0625rem",
          }}
        >
          <path
            fill="#5e81ac"
            fillOpacity="1"
            d="M0,0L60,37.3C120,75,240,149,360,186.7C480,224,600,224,720,213.3C840,203,960,181,1080,154.7C1200,128,1320,96,1380,80L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
          ></path>
        </svg>
        <div className="mt-5 w-11/12 lg:w-8/12 max-w-4xl mx-auto text-nord-0"></div>
      </section>
      <section>
        <article
          className={`mt-12 w-11/12 lg:w-8/12 max-w-4xl mx-auto text-nord-0 ${howItWorksStyles.wrapper}`}
        >
          <h3>¿Cómo funciona?</h3>
          <p>
            Los métodos tradicionales intentan "copiar y pegar" el temario en tu
            cabeza con clases y lecciones. Pero el cerebro no funciona como un
            ordenador, sino como un músculo.
          </p>
          <p>
            Nemos funciona gracias a dos conceptos muy simples: el recuerdo
            activo y la repetición espaciada. A base de entrenamiento diario,
            ejercicios de dificultad progresiva y repeticiones, tu mente
            procesará, integrará y memorizará casi sin esforzarse.
          </p>
        </article>
      </section>
      {/* <section>
        <div className="mt-12 w-11/12 lg:w-10/12 mx-auto flex flex-col md:flex-row justify-center items-center md:items-stretch">
          <Testimonial
            author="Nuria, de Castellón"
            className="bg-gradient-to-br from-nord-7 via-nord-8 to-nord-9 text-nord-6"
            authorImageSrc="https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80"
          >
            Nunca creí que podría estudiar el tema de cartas náuticas desde el
            iPhone.
          </Testimonial>
          <Testimonial
            className="mt-5 md:mt-0 md:ml-5 bg-gradient-to-tr from-nord-9 via-nord-7 to-nord-8 text-nord-6"
            author="Silvia, de Madrid"
            authorImageSrc="https://images.unsplash.com/photo-1543871595-e11129e271cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          >
            Después de semanas viendo videos de luces y marcas y no recordar
            nada, me puse con vosotros y menudo cambio!
          </Testimonial>
          <Testimonial
            className="mt-5 md:mt-0 md:ml-5 bg-gradient-to-r from-nord-7 via-nord-9 to-nord-8 text-nord-6"
            author="Pablo, de Mallorca"
            authorImageSrc="https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80"
          >
            Es como en Matrix, cuando Neo se conectaba a un ordenador y al cabo
            de unas horas ya sabía kung-fu.
          </Testimonial>
        </div>
      </section> */}
      <section>
        <article
          className={`mt-12 w-11/12 lg:w-8/12 max-w-4xl mx-auto text-nord-0 ${howItWorksStyles.wrapper}`}
        >
          <h4>Recuerdo activo</h4>
          <p>
            El recuerdo activo es el método de estudio que consiste en{" "}
            <em>
              hacerte preguntas y tratar de recordar la respuesta sin mirar
            </em>
            . No se parece en nada a lo que hacemos tradicionalmente al
            estudiar, que es leer el temario, escuchar a un profesor dar clase o
            ver videos repetidas veces sin pararnos a pensar en si estamos
            aprendiendo algo.
          </p>
          <p>
            La ciencia ha demostrado hasta la saciedad que{" "}
            <strong>la manera tradicional de estudiar no funciona</strong>. Al
            hacer una lectura pasiva, nos engañamos a nostros mismos, creyendo
            que nos cunde cuando en realidad estamos perdiendo el tiempo.
          </p>
          <FlashCardSet
            className="my-5 sm:my-7"
            questions={[
              {
                prompt:
                  "¿Cómo se llama el método de estudio que consiste en hacerse preguntas y tratar de recordar las respuestas?",
                answer: "Recuerdo activo",
                sectionTitle: "Introducción a Nemos",
              },
              {
                prompt:
                  "¿A qué conclusión ha llegado la ciencia con respecto a la eficacia de leer el temario varias veces como método de estudio?",
                answer: "Que no funciona.",
                sectionTitle: "Introducción a Nemos",
              },
            ]}
            completeSetMessage={
              <>
                <p>¡Perfecto!</p>
                <p>¡Sigue leyendo!</p>
              </>
            }
          />
          <p>
            ¿Por qué el recuerdo activo es sí es útil? Los neurocientíficos han
            llegado a dos importantes conclusiones:
          </p>
          <ol className="">
            <li className="">
              Al intentar recordar algo, <strong>reconsolidamos</strong> el
              recuerdo, aumentando la probabilidad de que lo recordemos en el
              futuro.
            </li>
            <li>
              Al cometer un error, nos indica que esa parte del temario aún no
              la hemos interiorizado.{" "}
              <strong>Los errores son una brújula</strong> que nos dice dónde
              debemos dedicar más tiempo de estudio.
            </li>
          </ol>

          <p>
            Todos los cursos de preparación para el PER incluyen tests, pero
            ponen el enfoque en la pizarra y las clases. Con Nemos, ponemos a tu
            disposición <em>flash cards</em> pensadas especialmente en
            consolidar los conocimientos, no en evaluarlos. Con los "exámenes de
            años anteriores", compruebas si lo has aprendido;{" "}
            <strong>
              con las <em>flash cards</em> de Nemos estarás aprendiendo
            </strong>
            .
          </p>

          <FlashCardSet
            className="my-5 sm:my-7"
            questions={[
              {
                prompt:
                  "Al intentar recordar algo, ¿qué ocurre con ese recuerdo?",
                answer: "Se reconsolida.",
                sectionTitle: "Introducción a Nemos",
              },
              {
                prompt:
                  "¿Cómo se llama el método de estudio que consiste en hacerse preguntas y tratar de recordar las respuestas?",
                answer: "Recuerdo activo",
                sectionTitle: "Introducción a Nemos",
              },
              {
                prompt:
                  "¿Por qué cometer errores no es algo malo con la técnica del recuerdo activo?",
                answer: (
                  <span>
                    Porque los errores son una{" "}
                    <span className="italic"> brújula</span>.
                  </span>
                ),
                sectionTitle: "Introducción a Nemos",
              },
              {
                prompt:
                  "¿Qué diferencia hay entre las flash cards de Nemos y las preguntas de 'exámenes de años anteriores' de otros cursos?",
                answer:
                  "Las flash cards reconsolidan recuerdos, y los exámenes comprueban lo que sabes.",
                sectionTitle: "Introducción a Nemos",
              },
              {
                prompt:
                  "¿Qué implica que un recuerdo se 'reconsolide' cuando tratamos de recordarlo?",
                answer: "Que es más probable que lo recordemos en el futuro.",
                sectionTitle: "Introducción a Nemos",
              },
            ]}
            completeSetMessage={
              <>
                <p>¿Ves qué fácil?</p>
                <p>¡Sigue así!</p>
              </>
            }
          />

          <h4>Usar o Perder</h4>
          <p>
            Tu cerebro es un órgano eficiente: rápidamente borra la información
            que no le parece útil. Por ejemplo, es posible que no recuerdes lo
            que comiste el pasado sábado. En cambio, si ese día fuiste a un
            restaurante increíble y te has pasado toda la semana hablando sin
            parar sobre lo alucinante que fue, entonces tendrás un recuerdo
            mucho más nítido.
          </p>
          <p>
            Este protocolo de <em>usar o perder</em> es la manera en que
            funciona tu cerebro. Si pasas una tarde entera memorizando los
            nombres de las partes de un barco, y lo dejas a un lado para ponerte
            con otra cosa durante una semana, para cuando llegue el momento de
            examinarte habrás olvidado la gran mayoría. De hecho, algunos
            estudios sugieren que olvidamos en torno al 75% de lo que aprendemos
            al cabo de 48 horas.
          </p>
          <p>
            Esto puede ser descorazonador, si no fuera por que la solución es
            muy simple: repasar. Al volver a estudiar conceptos que hemos
            aprendido hace poco, podemos aumentar la cantidad de conceptos que
            recordamos de manera significativa.
          </p>

          <FlashCardSet
            className="my-5 sm:my-7"
            questions={[
              {
                prompt:
                  "Si no repasamos, ¿cuánto tiempo tardamos en perder el 75% de lo que aprendemos?",
                answer: "48 horas",
                sectionTitle: "Introducción a Nemos",
              },
              {
                prompt:
                  "Al intentar recordar algo, ¿qué ocurre con ese recuerdo?",
                answer: "Se reconsolida.",
                sectionTitle: "Introducción a Nemos",
              },
              {
                prompt:
                  "¿Qué porcentaje de lo que aprendemos se olvida al cabo de 2 días?",
                answer: "El 75%",
                sectionTitle: "Introducción a Nemos",
              },
              {
                prompt:
                  "¿Por qué cometer errores no es algo malo con la técnica del recuerdo activo?",
                answer: (
                  <span>
                    Porque los errores son una{" "}
                    <span className="italic"> brújula</span>.
                  </span>
                ),
                sectionTitle: "Introducción a Nemos",
              },
              {
                prompt: (
                  <span>
                    Cuál es la solución para sobreponerse al protocolo de{" "}
                    <em>usar o perder</em>?
                  </span>
                ),
                answer: "Repasar",
                sectionTitle: "Introducción a Nemos",
              },
              {
                prompt:
                  "¿Qué diferencia hay entre las flash cards de Nemos y las preguntas de 'exámenes de años anteriores' de otros cursos?",
                answer:
                  "Las flash cards reconsolidan recuerdos, y los exámenes comprueban lo que sabes.",
                sectionTitle: "Introducción a Nemos",
              },
              {
                prompt:
                  "¿Qué implica que un recuerdo se 'reconsolide' cuando tratamos de recordarlo?",
                answer: "Que es más probable que lo recordemos en el futuro.",
                sectionTitle: "Introducción a Nemos",
              },
            ]}
            completeSetMessage={
              <>
                <p>¡Otro más!</p>
                <p>¡Ahora la repetición espaciada!</p>
              </>
            }
          />
          <h4>Repetición espaciada</h4>
          <p>
            El único problema con los repasos es que, tradicionalmente, no han
            sido nunca nada prácticos. Tanto si te dedicas a releer libros de
            texto como a pasar a toda velocidad por tu paquete de{" "}
            <em>flash cards</em>, hay un límite en lo que podemos repasar en un
            día, y lo que no repasamos se nos va olvidando.
          </p>
          <p>
            Afortunadamente, los seres humanos olvidan de una manera predecible.
            La probabilidad de recordar algo disminuye rápidamente los primeros
            días, pero luego se estabiliza, y podemos{" "}
            <em>aumentarla de nuevo</em> con el repaso.
          </p>
          <div className="flex items-center justify-center">
            <StaticImage
              className="rounded-xl shadow-lg mt-3 md:mt-5"
              src="../../static/forgetting-curve.png"
              alt="Curva de olvido"
            />
          </div>
          <p>
            Si repasas demasiado pronto, estarás perdiendo el tiempo; si repasas
            demasiado tarde, habrás olvidado el temario y tendrás que aprenderlo
            otra vez.{" "}
            <strong>
              El momento óptimo para repasar es justo en el momento en que lo
              vas a olvidar
            </strong>
            . Y ese momento es diferente para cada uno de nosotros, y para cada
            concepto.
          </p>
          <p>
            Utilizando un ordenador, es posible clasificar las{" "}
            <em>flash cards</em> según el día en que tienes que repasarlas, de
            tal manera que las más fáciles las verás menos, y las más difíciles
            las verás más a menudo. Esta manera de trabajar, optimizando el
            tiempo de estudio, se conoce como{" "}
            <strong>repetición espaciada</strong>.
          </p>
          <FlashCardSet
            className="my-5 sm:my-7"
            questions={[
              {
                prompt: "¿Cuál es el momento óptimo para repasar algo?",
                answer: "Cuando estás a punto de olvidarlo.",
                sectionTitle: "Introducción a Nemos",
              },
              {
                prompt:
                  "¿A qué conclusión ha llegado la ciencia con respecto a la eficacia de leer el temario varias veces como método de estudio?",
                answer: "Que no funciona.",
                sectionTitle: "Introducción a Nemos",
              },
              {
                prompt:
                  "¿Qué porcentaje de lo que aprendemos se olvida al cabo de 2 días?",
                answer: "El 75%",
                sectionTitle: "Introducción a Nemos",
              },
              {
                prompt:
                  "¿Cómo se llama el método de estudio que consiste en hacerse preguntas y tratar de recordar las respuestas?",
                answer: "Recuerdo activo",
                sectionTitle: "Introducción a Nemos",
              },
              {
                prompt:
                  "¿Qué implica que un recuerdo se 'reconsolide' cuando tratamos de recordarlo?",
                answer: "Que es más probable que lo recordemos en el futuro.",
                sectionTitle: "Introducción a Nemos",
              },
              {
                prompt:
                  "¿Qué nombre recibe la técnica de estudio que divide el temario según la facilidad que tiene el estudiante para recordarlo?",
                answer: "Repetición espaciada.",
                sectionTitle: "Introducción a Nemos",
              },
            ]}
            completeSetMessage={
              <>
                <p>¡Perfecto!</p>
                <p>¡Sigue leyendo!</p>
              </>
            }
          />
          <p>
            Es frustrante lo rápido que olvidamos lo que leemos. Para según qué
            cosas no es muy importante, pero cuando estamos a bordo, tener las
            ideas claras y no un vago recuerdo puede suponer la diferencia entre
            un día fantástico en la mar o un quebradero de cabeza.
          </p>
          <p>
            La inmensa mayoría de cursos para <em>aprobar</em> el PER se centran
            en el examen, y es habitual que al cabo de unos meses toda esa
            información se haya olvidado.
          </p>
          <p>
            Gracias al recuerdo activo y a la repetición espaciada, Nemos es el
            programa perfecto para que aprobar el PER sea sólo el principio, y
            que tengas la confianza de que, cuando navegas, está todo bajo
            control.
          </p>
          <FlashCardSet
            className="my-5 sm:my-7"
            questions={[
              {
                prompt:
                  "¿Cuál es el único programa que utiliza el recuerdo activo y la repetición espaciada para estudiar el PER?",
                answer: "Nemos",
                sectionTitle: "Introducción a Nemos",
              },
            ]}
            completeSetMessage={
              <>
                <p>¡Ya está!</p>
                <Link
                  className="text-nord-13 font-semibold hover:underline animate-pulse"
                  to="/#registrate"
                >
                  ¿Te apuntas?
                </Link>
              </>
            }
          />
        </article>
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
                  placeholder="tuemail@nemos.es"
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
                  style={{display: "none"}}
                ></div>
                <div
                  className="response"
                  id="mce-success-response"
                  style={{display: "none"}}
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
                  className="button cursor-pointer rounded-full px-5 py-1 w-8/12 mx-auto font-family-secondary text-lg shadow-xl bg-nord-10"
                />
              </div>
            </div>
          </form>
        </div>
      </section>
    </DefaultLayout>
  );
}

export const pageQuery = graphql`
  {
    allMdx(filter: {slug: {eq: "how-it-works"}}) {
      edges {
        node {
          body
        }
      }
    }
  }
`;
