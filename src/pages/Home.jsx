import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import {
  faAddressCard,
  faBook,
  faBuildingColumns,
  faGlobe,
  faHeart,
  faPeopleCarryBox,
  faRankingStar,
  faSackDollar,
  faUsers,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import Developers from "../assets/developers.jpg";
import ImagenTeam2 from "../assets/team2.svg";

function Home() {
  return (
    <div className="flex w-full flex-col items-center justify-center overflow-hidden text-left sm:text-center xl:text-left">
      <div className="flex min-h-screen w-containerWitdhMain max-w-containerMax items-center justify-center">
        <div className="flex w-full flex-col-reverse items-center justify-center gap-10 pt-52 xl:flex-row xl:gap-20 xl:pt-0">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.1 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="relative flex h-[300px] w-[300px] items-center justify-center sm:h-[600px] sm:w-[600px] xl:min-h-[530px] xl:min-w-[530px]"
          >
            <img className="w-full" src={ImagenTeam2} alt="Image Banner" />
            <div className="ctn-tiket-hd bottom-12 sm:bottom-auto sm:top-36 sm:left-1/3">
              <div className="shadow-violetC flex h-10 w-10 items-center justify-center rounded-full bg-[#8567db]">
                <FontAwesomeIcon
                  icon={faPeopleCarryBox}
                  className="text-white"
                />
              </div>
              Trabajo en equipo
            </div>
            <div className="ctn-tiket-hd bottom-28 sm:bottom-32 sm:left-5">
              <div className="shadow-greenC flex h-10 w-10 items-center justify-center rounded-full bg-[#e63946]">
                <FontAwesomeIcon icon={faHeart} className="text-white" />
              </div>
              Compromiso
            </div>
            <div className="ctn-tiket-hd bottom-44 sm:bottom-44 sm:left-2/3">
              <div className="shadow-greenLightC flex h-10 w-10 items-center justify-center rounded-full bg-[#1fddd2]">
                <FontAwesomeIcon icon={faUsers} className="text-white" />
              </div>
              Liderazgo
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.1 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div>
              <h1 className="text-5xl font-bold md:text-6xl md:leading-12">
                Perspectivas del desarrollo y <br />
                <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                  polítias públicas
                </span>
              </h1>
            </div>
            <div className="pt-5">
              <p className="text-xl text-colorTextSecundary">
                El desarrollo y las políticas públicas son dos conceptos
                interrelacionados que juegan un papel crucial en la mejora de la
                calidad de vida de las personas y en la construcción de
                sociedades más equitativas y sostenibles. A continuación, se
                presentan las principales perspectivas sobre el desarrollo y
                cómo las políticas públicas influyen en este proceso:
              </p>
            </div>
            <div className="pt-9 text-main">
              <Link className="btn bg-btnColorSecondary p-5" to="/register">
                Comentarios
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="flex w-full items-center justify-center bg-colorSection_1">
        <div className="grid w-containerWitdhMain max-w-containerMax gap-12 py-28 md:gap-20 xl:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="flex flex-col items-start gap-8 text-main sm:items-center xl:items-start"
          >
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              1. Definición de Desarrollo
            </h2>
            <p className="text-justify text-xl text-colorTextSecundary">
              El desarrollo se refiere al proceso de mejora de las condiciones
              económicas, sociales, culturales y políticas de una sociedad. Este
              concepto ha evolucionado a lo largo del tiempo, pasando de un
              enfoque meramente económico (crecimiento del PIB) a una visión
              multidimensional que incluye: Desarrollo humano: Prioriza el
              bienestar, la salud, la educación y las oportunidades para las
              personas. Sostenibilidad: Integra aspectos medioambientales,
              garantizando que el progreso no comprometa las necesidades de las
              futuras generaciones. Equidad: Busca reducir desigualdades
              sociales, económicas y de género.
            </p>
            {/* <p className="text-justify text-xl text-colorTextSecundary">
              Los miembros de la rama estudiantil pueden participar en
              actividades de aprendizaje, como conferencias y talleres, para
              adquirir habilidades y conocimientos en estas áreas, así como
              también en proyectos y oportunidades de desarrollo profesional.
            </p> */}
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="flex w-full items-center justify-center"
          >
            <div className="flex w-full items-center justify-center md:w-10/12 xl:w-full">
              <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop
                autoPlay
              >
                <div className="h-96">
                  <img
                    src="https://i.ibb.co/SxvT5yQ/imagen2.jpg"
                    alt="Image 2"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="h-96">
                  <img
                    src="https://i.ibb.co/W3mQg06/imagen1.jpg"
                    alt="Image 3"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="h-96">
                  <img
                    src="https://i.ibb.co/KGSRR2q/Proyecto-nuevo-1.jpg"
                    alt="Image 3"
                    className="h-full w-full object-cover"
                  />
                </div>
              </Carousel>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="flex w-full items-center justify-center bg-blue-600 text-white shadow-3xl">
        <div className="flex w-containerWitdhMain max-w-containerMax flex-col gap-12 py-28 md:gap-20">
          <div className="flex flex-col items-center gap-10 text-center">
            <h2 className="mini:text-4xl text-3xl font-bold tracking-tight md:text-5xl">
              Autores Relevantes en Desarrollo y Políticas Públicas
            </h2>
            <p className="w-3/4 text-xl">
              Adoptar políticas públicas bien diseñadas y ejecutadas,
              fundamentadas en ideas de expertos como estos, es esencial para
              crear un futuro equitativo, sostenible y próspero.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-10">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="flex flex-col items-center justify-center gap-4"
              >
                <div className="flex h-44 w-44 items-center justify-center overflow-hidden rounded-full">
                  <img src="https://i.ibb.co/2SqBWCY/Ing-july.png" alt="" />
                </div>
                <div>
                  <p className="text-main font-bold">Amartya Sen</p>
                  <p className="text-main text-colorTextFooter">
                    Economista y filósofo
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.7 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="flex flex-col items-center justify-center gap-4"
              >
                <div className="flex h-44 w-44 items-center justify-center overflow-hidden rounded-full">
                  <img src="https://i.ibb.co/7VRtZSb/Ing-Cesar.png" alt="" />
                </div>
                <div>
                  <p className="text-main font-bold">Joseph Stiglitz</p>
                  <p className="text-main text-colorTextFooter">
                    Economista y Premio Nobel
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.9 }}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="flex flex-col items-center justify-center gap-4"
              >
                <div className="flex h-44 w-44 items-center justify-center overflow-hidden rounded-full">
                  <img src="https://i.ibb.co/PZczY8p/Dr-hernan.png" alt="" />
                </div>
                <div>
                  <p className="text-main font-bold">Elinor Ostrom</p>
                  <p className="text-main text-colorTextFooter">
                    Científica política y Premio Nobel
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-center overflow-hidden xl:h-[700px] xl:flex-row">
        <div className="grid w-containerWitdhMain max-w-containerMax gap-14 py-20 xl:grid-cols-2">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.1 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="flex flex-col items-start justify-start gap-5 sm:items-center xl:items-start"
          >
            <h3 className="text-4xl font-bold tracking-tight md:text-5xl">
              ¿Cómo promover el desarrollo y las políticas públicas?
            </h3>
            <p className="text-xl text-colorTextSecundary">
              Si te interesa contribuir al desarrollo sostenible, la equidad
              social y la innovación en políticas públicas, sigue estos pasos
              para involucrarte:
            </p>
            <Link className="btn bg-black p-5" to="/register">
              Completar formulario
            </Link>
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1.1 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="flex items-center justify-center text-left"
          >
            <div className="relative flex flex-col gap-16">
              <div className="absolute top-10 left-8 h-5/6 w-1 bg-gradient-to-t from-teal-500 to-blue-600 max-[380px]:hidden"></div>
              <div className="z-0 flex items-center gap-5 max-[380px]:flex-col">
                <div className="flex items-center justify-center rounded-full bg-primary p-5">
                  <FontAwesomeIcon
                    icon={faBuildingColumns}
                    className="h-7 w-7 text-white"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div>
                    <h3 className="text-2xl font-bold">
                      Entender el contexto del desarrollo
                    </h3>
                  </div>
                  <div>
                    <p className="text-main">
                      Infórmate sobre los desafíos globales como la pobreza, la
                      desigualdad y el cambio climático, y conoce los enfoques
                      utilizados para abordarlos, como los Objetivos de
                      Desarrollo Sostenible (ODS).
                    </p>
                  </div>
                </div>
              </div>
              <div className="z-0 flex items-center gap-5 max-[380px]:flex-col">
                <div className="flex items-center justify-center rounded-full bg-black p-5">
                  <FontAwesomeIcon
                    icon={faAddressCard}
                    className="h-7 w-7 text-white"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div>
                    <h3 className="text-2xl font-bold">
                      Participar en iniciativas locales
                    </h3>
                  </div>
                  <div>
                    <p className="text-main">
                      Registra tus datos en plataformas de organizaciones que
                      promuevan el desarrollo social o en proyectos de
                      investigación sobre políticas públicas. Esto te permitirá
                      formar parte de redes que impulsan el cambio.
                    </p>
                  </div>
                </div>
              </div>
              <div className="z-0 flex items-center gap-5 max-[380px]:flex-col">
                <div className="flex items-center justify-center rounded-full bg-teal-500 p-5">
                  <FontAwesomeIcon
                    icon={faSackDollar}
                    className="h-7 w-7 text-white"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div>
                    <h3 className="text-2xl font-bold">
                      Contribuir con acciones concretas
                    </h3>
                  </div>
                  <div>
                    <p className="text-main">
                      Sé parte de programas que promuevan la equidad, la
                      sostenibilidad o la innovación, como voluntariado,
                      iniciativas comunitarias o desarrollo de propuestas para
                      políticas públicas.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden bg-blue-600 text-white xl:h-[580px] xl:flex-row">
        <div className="md:px-10 xl:absolute xl:-left-64 xl:h-full min-[1400px]:-left-52">
          <img className="xl:h-full" src={Developers} alt="Imagen developers" />
        </div>
        <div className="grid w-10/12 max-w-7xl py-20 xl:grid-cols-2 xl:gap-20">
          <div></div>
          <div className="flex flex-col items-start justify-center gap-7 sm:items-center xl:items-start">
            <h3 className="text-4xl font-bold tracking-tight md:text-5xl">
              Beneficios de participar en el desarrollo y las políticas públicas
            </h3>
            <p className="text-xl">
              Contribuir al desarrollo sostenible y la creación de políticas
              públicas trae consigo múltiples beneficios, tales como:
            </p>
            <div className="grid w-full grid-cols-1 gap-2 text-main md:grid-cols-2">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, scale: 0.5 },
                  visible: { opacity: 1, scale: 1 },
                }}
                className="flex items-center gap-3 rounded-md bg-teal-500 p-4 shadow-lg"
              >
                <div className="flex items-center justify-center">
                  <FontAwesomeIcon icon={faGlobe} className="h-6 w-6" />
                </div>
                <div className="font-medium">🌐 Conocimiento global</div>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, scale: 0.5 },
                  visible: { opacity: 1, scale: 1 },
                }}
                className="flex items-center gap-3 rounded-md bg-primary p-4 shadow-lg"
              >
                <div className="flex items-center justify-center">
                  <FontAwesomeIcon icon={faRankingStar} className="h-6 w-6" />
                </div>
                <div className="font-medium">⭐ Impacto positivo</div>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, scale: 0.5 },
                  visible: { opacity: 1, scale: 1 },
                }}
                className="flex items-center gap-3 rounded-md bg-[#2b2d42] p-4 shadow-lg"
              >
                <div className="flex items-center justify-center">
                  <FontAwesomeIcon icon={faVideo} className="h-6 w-6" />
                </div>
                <div className="font-medium">🎤 Redes colaborativas</div>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, scale: 0.5 },
                  visible: { opacity: 1, scale: 1 },
                }}
                className="flex items-center gap-3 rounded-md bg-[#e63946] p-4 shadow-lg"
              >
                <div className="flex items-center justify-center">
                  <FontAwesomeIcon icon={faBook} className="h-6 w-6" />
                </div>
                <div className="font-medium">📚 Recursos educativos</div>
              </motion.div>
            </div>
            <Link
              className="btn w-full bg-btnColorSecondary p-5 text-center"
              to="/register"
            >
              ¡Sé parte del cambio! Contribuye a construir un futuro más justo y
              sostenible para todos.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
