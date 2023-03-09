import ImagenPerson from "/imagenPerson.webp";
import Person from "../assets/person.jpg";
import { Link } from "react-router-dom";
import ImagenTeam2 from "../assets/team2.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, fa1, fa2, fa3 } from "@fortawesome/free-solid-svg-icons";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
function Home() {
  return (
    <div className="w-full flex-col flex items-center justify-center text-left sm:text-center xl:text-left overflow-hidden">
      <div className="w-containerWitdhMain max-w-containerMax min-h-screen flex items-center justify-center">
        <div className="w-full flex justify-center items-center gap-10 flex-col-reverse pt-52 xl:pt-0 xl:flex-row xl:gap-20">
          <div className="w-[300px] h-[300px] relative flex items-center justify-center sm:w-[600px] sm:h-[600px] xl:min-w-[530px] xl:min-h-[530px]">
            <img className="w-full" src={ImagenTeam2} alt="Image Banner" />
            <div className="ctn-tiket-hd bottom-12 sm:bottom-auto sm:top-36 sm:left-1/3">
              <div className="w-10 h-10 flex items-center justify-center bg-[#8567db] rounded-full shadow-violetC">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 22"
                  className="w-4 text-white"
                >
                  <path
                    d="M6.443 0H1.871A1.862 1.862 0 000 1.87v17.944c0 1.04.831 1.87 1.87 1.87h4.573c1.04 0 1.87-.83 1.87-1.87V1.871A1.86 1.86 0 006.444 0zm0 20.472H1.871a.658.658 0 01-.659-.658V1.87c0-.346.278-.658.659-.658h4.572c.347 0 .658.277.658.658v1.213h-1.42a.62.62 0 00-.624.623.62.62 0 00.624.624h1.42v1.628h-2.39a.62.62 0 00-.623.623.62.62 0 00.623.624h2.39v1.628h-1.42a.62.62 0 00-.624.624.62.62 0 00.624.623h1.42v1.628h-2.39a.621.621 0 00-.623.624.62.62 0 00.623.623h2.39v1.628h-1.42a.62.62 0 00-.624.624.62.62 0 00.624.623h1.42v1.629h-2.39a.621.621 0 00-.623.623.62.62 0 00.623.624h2.39v1.212c0 .242-.311.554-.658.554zM16.385.139C15.623.104 14.826.104 14.03.104c-.728 0-1.282.589-1.317 1.455 0 .416 0 .831-.034 1.212v.451h-.035.45l4.088.034h.416V1.628c.069-.866-.45-1.49-1.213-1.49zm-3.602 3.949l-.035 1.039v2.356c0 2.91-.035 5.82-.035 8.729 0 .242.035.45.104.658.347 1.04.693 2.113 1.04 3.152l.242.762c.07.174.139.347.242.485.312.416.832.555 1.248.278a.68.68 0 00.311-.312 3.28 3.28 0 00.208-.485l.242-.728c.312-.866.59-1.697.901-2.563l.035-.104c.138-.381.277-.831.277-1.351v-4.642l.035-6.686v-.103l.034-.45-4.85-.035zm3.775 13.06l-.034.103a33.699 33.699 0 01-.624 1.767h-1.593c-.277-.797-.52-1.559-.797-2.356-.035-.069-.035-.138-.035-.207.243.069.52.069.866-.104.174.104.416.173.728.173.242 0 .485-.07.762-.208.208.139.554.242.935.173-.069.208-.138.416-.208.658z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>{" "}
              Trabajo en equipo
            </div>
            <div className="ctn-tiket-hd bottom-28 sm:bottom-32 sm:left-5">
              <div className="w-10 h-10 flex items-center justify-center bg-[#4defa7] rounded-full shadow-greenC">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-5 text-white"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.25 12.6c0-.746.604-1.35 1.35-1.35h4.9a.75.75 0 010 1.5H6.75v6.5h10.5v-.75a.75.75 0 011.5 0v.9a1.35 1.35 0 01-1.35 1.35H6.6a1.35 1.35 0 01-1.35-1.35v-6.8zm4.56-8.893c.616-.292 1.344-.457 2.19-.457 1.844 0 3.07.785 3.809 1.812.711.988.941 2.151.941 2.938v4a.75.75 0 01-1.5 0V8c0-.547-.17-1.383-.659-2.062-.46-.64-1.235-1.188-2.591-1.188-.647 0-1.152.125-1.548.313a.75.75 0 11-.642-1.356z"
                    fill="currentColor"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.25 12a.75.75 0 01.75-.75h1.4c.746 0 1.35.604 1.35 1.35v.4a.75.75 0 01-1.5 0v-.25H16a.75.75 0 01-.75-.75zM8 7.25a.75.75 0 01.75.75v4a.75.75 0 01-1.5 0V8A.75.75 0 018 7.25z"
                    fill="currentColor"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.47 2.47a.75.75 0 011.06 0l18 18a.75.75 0 11-1.06 1.06l-18-18a.75.75 0 010-1.06z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>{" "}
              Compromiso
            </div>
            <div className="ctn-tiket-hd bottom-44 sm:bottom-44 sm:left-2/3">
              <div className="w-10 h-10 flex items-center justify-center bg-[#1fddd2] rounded-full shadow-greenLightC">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="w-5 text-white"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.25 12.6c0-.746.604-1.35 1.35-1.35h4.9a.75.75 0 010 1.5H6.75v6.5h10.5v-.75a.75.75 0 011.5 0v.9a1.35 1.35 0 01-1.35 1.35H6.6a1.35 1.35 0 01-1.35-1.35v-6.8zm4.56-8.893c.616-.292 1.344-.457 2.19-.457 1.844 0 3.07.785 3.809 1.812.711.988.941 2.151.941 2.938v4a.75.75 0 01-1.5 0V8c0-.547-.17-1.383-.659-2.062-.46-.64-1.235-1.188-2.591-1.188-.647 0-1.152.125-1.548.313a.75.75 0 11-.642-1.356z"
                    fill="currentColor"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M15.25 12a.75.75 0 01.75-.75h1.4c.746 0 1.35.604 1.35 1.35v.4a.75.75 0 01-1.5 0v-.25H16a.75.75 0 01-.75-.75zM8 7.25a.75.75 0 01.75.75v4a.75.75 0 01-1.5 0V8A.75.75 0 018 7.25z"
                    fill="currentColor"
                  ></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M2.47 2.47a.75.75 0 011.06 0l18 18a.75.75 0 11-1.06 1.06l-18-18a.75.75 0 010-1.06z"
                    fill="currentColor"
                  ></path>
                </svg>
              </div>{" "}
              Liderazgo
            </div>
          </div>
          <div className="">
            <div>
              <h1 className="text-5xl font-bold tracking-tight leading-12 md:text-6xl md:leading-12">
                ¡Únete a la rama estudiantil{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
                  IEEE UNHEVAL 2023
                </span>
                !
              </h1>
            </div>
            <div className="pt-5">
              <p className="text-xl text-colorTextSecundary">
                Especialízate en desarrollo independientemente de tu nivel de
                conocimientos y experiencia, nosotros nos adaptaremos a tus
                objetivos.
              </p>
            </div>
            <div className="pt-9 text-main">
              <Link
                className="btn bg-btnColorSecondary px-7 py-5"
                to="/register"
              >
                ¡Únete ahora!
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-colorSection_1 flex items-center justify-center">
        <div className="w-containerWitdhMain max-w-containerMax grid xl:grid-cols-2 gap-12 md:gap-20 py-28">
          <div className="flex flex-col gap-5 items-start sm:items-center xl:items-start text-main">
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              ¿Qué es IEEE UNHEVAL?
            </h2>
            <p className="text-colorTextSecundary">
              a lo largo de tu formación recibirás asesoramiento para mejorar tu
              CV y te prepararemos para realizar entrevistas con nuestras
              empresas colaboradoras.
            </p>
            <p className="text-colorTextSecundary">
              Esta formación es gratuita para ti y NO se te descontará nada del
              salario de la oferta de trabajo que consigas.
            </p>
            <Link className="btn bg-blue-500 w-max" to="/register">
              Empieza ya
            </Link>
          </div>
          <div className="w-full flex justify-center">
            <div className="w-full max-w-2xl flex flex-col justify-center items-center gap-5">
              <div className="flex flex-col justify-center items-center gap-5">
                <Carousel infiniteLoop autoPlay>
                  <div className="relative h-[300px]">
                    <img
                      src="https://i.ibb.co/SxvT5yQ/imagen2.jpg"
                      alt="Image 2"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative h-[300px]">
                    <img
                      src="https://i.ibb.co/W3mQg06/imagen1.jpg"
                      alt="Image 3"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative h-[300px]">
                    <img
                      src="https://i.ibb.co/KGSRR2q/Proyecto-nuevo-1.jpg"
                      alt="Image 3"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex bg-gradient-to-tl from-teal-600 to-blue-600 shadow-3xl text-white items-center justify-center">
        <div className="w-containerWitdhMain max-w-containerMax flex flex-col gap-12 md:gap-20 py-28">
          <div className="flex flex-col gap-10 items-center text-center">
            <h2 className="text-3xl mini:text-4xl font-bold tracking-tight md:text-5xl">
              Nuestras autoridades 2023
            </h2>
            <p className="w-3/4 text-main">
              Nuestros alumnos os cuentan la experiencia que han tenido desde
              que comenzaron la formación en nuestro campus hasta la
              introducción en nuestra bolsa de empleo y obtención de vacantes de
              trabajo que les hemos facilitado.
            </p>
            <div className="flex gap-10 flex-wrap justify-center items-center">
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="w-44 h-44 rounded-full overflow-hidden flex justify-center items-center">
                  <img src={Person} alt="" />
                </div>
                <div>
                  <p className="text-main font-bold">
                    Rios Nolasco Angelo Patrick
                  </p>
                  <p className="text-main text-colorTextFooter">Presidente</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="w-44 h-44 rounded-full overflow-hidden flex justify-center items-center">
                  <img src={Person} alt="" />
                </div>
                <div>
                  <p className="text-main font-bold">
                    Rios Nolasco Angelo Patrick
                  </p>
                  <p className="text-main text-colorTextFooter">Presidente</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="w-44 h-44 rounded-full overflow-hidden flex justify-center items-center">
                  <img src={Person} alt="" />
                </div>
                <div>
                  <p className="text-main font-bold">
                    Rios Nolasco Angelo Patrick
                  </p>
                  <p className="text-main text-colorTextFooter">Presidente</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="w-44 h-44 rounded-full overflow-hidden flex justify-center items-center">
                  <img src={Person} alt="" />
                </div>
                <div>
                  <p className="text-main font-bold">
                    Rios Nolasco Angelo Patrick
                  </p>
                  <p className="text-main text-colorTextFooter">Presidente</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col xl:flex-row xl:h-[700px] items-center justify-center overflow-hidden">
        <div className="w-containerWitdhMain max-w-containerMax py-20 grid gap-14 xl:grid-cols-2">
          <div className="flex flex-col justify-start gap-5 items-start sm:items-center xl:items-start">
            <h3 className="text-4xl font-bold tracking-tight md:text-5xl">
              ¿Cómo pertener a la rama estudiantil?
            </h3>
            <p className="text-main">
              Nuestro campus diseñado por formadores expertos permite vivir la
              mejor experiencia de aprendizaje.
            </p>
            <Link className="btn bg-black " to="/register">
              Empieza ya
            </Link>
          </div>
          <div className="flex justify-center items-center text-left">
            <div className="flex flex-col gap-16 relative">
              <div className="w-1 h-5/6 absolute bg-gradient-to-t from-teal-500 to-blue-600 top-10 left-8"></div>
              <div className="z-0 flex gap-5 items-center">
                <div className="flex justify-center items-center bg-primary rounded-full p-6">
                  <FontAwesomeIcon icon={fa1} className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col gap-2">
                  <div>
                    <h3 className="font-bold text-2xl">
                      Formación 100% gratuita
                    </h3>
                  </div>
                  <div>
                    <p className="text-main">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Culpa, tempore.
                    </p>
                  </div>
                </div>
              </div>
              <div className="z-0 flex gap-5 items-center">
                <div className="flex justify-center items-center bg-black rounded-full p-6">
                  <FontAwesomeIcon icon={fa2} className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col gap-2">
                  <div>
                    <h3 className="font-bold text-2xl">
                      Formación 100% gratuita
                    </h3>
                  </div>
                  <div>
                    <p className="text-main">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Culpa, tempore.
                    </p>
                  </div>
                </div>
              </div>
              <div className="z-0 flex gap-5 items-center">
                <div className="flex justify-center items-center bg-teal-500 rounded-full p-6">
                  <FontAwesomeIcon icon={fa3} className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col gap-2">
                  <div>
                    <h3 className="font-bold text-2xl">
                      Formación 100% gratuita
                    </h3>
                  </div>
                  <div>
                    <p className="text-main">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                      Culpa, tempore.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col xl:flex-row xl:h-[600px] items-center justify-center bg-gradient-to-tl from-teal-600 to-blue-600 text-white overflow-hidden relative">
        <div className="md:px-10 xl:h-full xl:absolute xl:-left-56 min-[1400px]:-left-40">
          <img
            className="xl:h-full"
            src={ImagenPerson}
            alt="Banner de la app"
          />
        </div>
        <div className="w-10/12 max-w-7xl py-20 grid xl:gap-20 xl:grid-cols-2">
          <div></div>
          <div className="flex flex-col justify-center gap-7 items-start sm:items-center xl:items-start">
            <h3 className="text-4xl font-bold tracking-tight md:text-5xl">
              Beneficios de ser miembro
            </h3>
            <p className="text-lg">
              OpenBootcamp te ofrece a los mejores profesionales del sector para
              incorporarse a tu plantilla.
            </p>
            <div className="w-full grid grid-cols-1 gap-2 text-main md:grid-cols-2">
              <div className="flex gap-3 bg-teal-500 p-4 items-center rounded-md shadow-lg">
                <div className="flex justify-center items-center">
                  <FontAwesomeIcon icon={faBook} className="w-6 h-6" />
                </div>
                <div className="font-medium">Cursos gratuitos</div>
              </div>
              <div className="flex gap-3 bg-primary p-4 items-center rounded-md shadow-lg">
                <div className="flex justify-center items-center">
                  <FontAwesomeIcon icon={faBook} className="w-6 h-6" />
                </div>
                <div className="font-medium">Cursos gratuitos</div>
              </div>
              <div className="flex gap-3 bg-slate-700 p-4 items-center rounded-md shadow-lg">
                <div className="flex justify-center items-center">
                  <FontAwesomeIcon icon={faBook} className="w-6 h-6" />
                </div>
                <div className="font-medium">Cursos gratuitos</div>
              </div>
              <div className="flex gap-3 bg-rose-500 p-4 items-center rounded-md shadow-lg">
                <div className="flex justify-center items-center">
                  <FontAwesomeIcon icon={faBook} className="w-6 h-6" />
                </div>
                <div className="font-medium">Cursos gratuitos</div>
              </div>
            </div>
            <Link className="btn bg-btnColorSecondary w-full text-center" to="">
              ¡Convierte en miembro ahora!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
