import Person from "../assets/person.jpg";
import Developers from "../assets/developers.jpg";
import { Link } from "react-router-dom";
import ImagenTeam2 from "../assets/team2.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faGlobe,
  faBuildingColumns,
  faAddressCard,
  faSackDollar,
  faPeopleCarryBox,
  faUsers,
  faHeart,
  faRankingStar,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
function Home() {
  return (
    <div className="flex w-full flex-col items-center justify-center overflow-hidden text-left sm:text-center xl:text-left">
      <div className="flex min-h-screen w-containerWitdhMain max-w-containerMax items-center justify-center">
        <div className="flex w-full flex-col-reverse items-center justify-center gap-10 pt-52 xl:flex-row xl:gap-20 xl:pt-0">
          <div className="relative flex h-[300px] w-[300px] items-center justify-center sm:h-[600px] sm:w-[600px] xl:min-h-[530px] xl:min-w-[530px]">
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
          </div>
          <div>
            <div>
              <h1 className="text-5xl font-bold md:text-6xl md:leading-12">
                Rama estudiantil <br />
                <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                  IEEE UNHEVAL 2023
                </span>
              </h1>
            </div>
            <div className="pt-5">
              <p className="text-xl text-colorTextSecundary">
                Si te apasiona la tecnología y la innovación, ¡La rama
                estudiantil IEEE UNHEVAL 2023 es el lugar perfecto para ti!
                Únete y descubre lo que puedes lograr.
              </p>
            </div>
            <div className="pt-9 text-main">
              <Link className="btn bg-btnColorSecondary p-5" to="/register">
                ¡Únete ahora!
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-center bg-colorSection_1">
        <div className="grid w-containerWitdhMain max-w-containerMax gap-12 py-28 md:gap-20 xl:grid-cols-2">
          <div className="flex flex-col items-start gap-8 text-main sm:items-center xl:items-start">
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              ¿Qué es IEEE UNHEVAL?
            </h2>
            <p className="text-justify text-xl text-colorTextSecundary">
              La rama estudiantil IEEE UNHEVAL 2023 es un grupo de estudiantes
              de la Universidad Nacional Hermilio Valdizán en Huánuco, Perú, que
              forman parte de la organización internacional IEEE (Instituto de
              Ingenieros Eléctricos y Electrónicos). Esta rama estudiantil tiene
              como objetivo principal fomentar el interés y el avance en las
              áreas de la ingeniería eléctrica, electrónica, computacional y de
              tecnologías de la información entre los estudiantes
              universitarios.
            </p>
            <p className="text-justify text-xl text-colorTextSecundary">
              Los miembros de la rama estudiantil pueden participar en
              actividades de aprendizaje, como conferencias y talleres, para
              adquirir habilidades y conocimientos en estas áreas, así como
              también en proyectos y oportunidades de desarrollo profesional.
            </p>
          </div>
          <div className="flex w-full items-center justify-center">
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
          </div>
        </div>
      </div>
      <div className="flex w-full items-center justify-center bg-blue-600 text-white shadow-3xl">
        <div className="flex w-containerWitdhMain max-w-containerMax flex-col gap-12 py-28 md:gap-20">
          <div className="flex flex-col items-center gap-10 text-center">
            <h2 className="mini:text-4xl text-3xl font-bold tracking-tight md:text-5xl">
              Nuestras autoridades 2023
            </h2>
            <p className="w-3/4 text-xl">
              Cada uno de estos miembros de la junta directiva tiene la
              responsabilidad de liderar un equipo de trabajo y coordinar
              actividades y proyectos que beneficien a los miembros de la rama y
              a la comunidad en general.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-10">
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="flex h-44 w-44 items-center justify-center overflow-hidden rounded-full">
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
                <div className="flex h-44 w-44 items-center justify-center overflow-hidden rounded-full">
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
                <div className="flex h-44 w-44 items-center justify-center overflow-hidden rounded-full">
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
                <div className="flex h-44 w-44 items-center justify-center overflow-hidden rounded-full">
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
      <div className="flex w-full flex-col items-center justify-center overflow-hidden xl:h-[700px] xl:flex-row">
        <div className="grid w-containerWitdhMain max-w-containerMax gap-14 py-20 xl:grid-cols-2">
          <div className="flex flex-col items-start justify-start gap-5 sm:items-center xl:items-start">
            <h3 className="text-4xl font-bold tracking-tight md:text-5xl">
              ¿Cómo pertener a la rama estudiantil?
            </h3>
            <p className="text-xl text-colorTextSecundary">
              Si eres estudiante de la Universidad Nacional Hermilio Valdizán y
              tienes interés en la ingeniería eléctrica, electrónica,
              computacional o de tecnologías de la información, ¡te invitamos a
              unirte a la rama estudiantil IEEE UNHEVAL!
            </p>
            <Link className="btn bg-black p-5" to="/register">
              Completar formulario
            </Link>
          </div>
          <div className="flex items-center justify-center text-left">
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
                      Ser estudiante de la universidad
                    </h3>
                  </div>
                  <div>
                    <p className="text-main">
                      Para poder pertenecer a la rama estudiantil IEEE UNHEVAL,
                      debes ser estudiante de la Universidad Nacional Hermilio
                      Valdizán en Huánuco, Perú.
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
                    <h3 className="text-2xl font-bold">Registra tus datos</h3>
                  </div>
                  <div>
                    <p className="text-main">
                      Registra tus datos en nuestro formulario de membresía para
                      convertirte en miembro de la rama estudiantil IEEE
                      UNHEVAL.
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
                    <h3 className="text-2xl font-bold">Pagar la membresía</h3>
                  </div>
                  <div>
                    <p className="text-main">
                      Para completar tu registro, deberás realizar el pago de la
                      membresía anual de la rama estudiantil IEEE UNHEVAL. El
                      pago te permitirá participar en todas las actividades y
                      eventos.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
              Beneficios de ser miembro
            </h3>
            <p className="text-xl">
              Ser miembro de la rama estudiantil IEEE UNHEVAL ofrece muchos
              beneficios, tales como:
            </p>
            <div className="grid w-full grid-cols-1 gap-2 text-main md:grid-cols-2">
              <div className="flex items-center gap-3 rounded-md bg-teal-500 p-4 shadow-lg">
                <div className="flex items-center justify-center">
                  <FontAwesomeIcon icon={faGlobe} className="h-6 w-6" />
                </div>
                <div className="font-medium">Cursos gratuitos</div>
              </div>
              <div className="flex items-center gap-3 rounded-md bg-primary p-4 shadow-lg">
                <div className="flex items-center justify-center">
                  <FontAwesomeIcon icon={faRankingStar} className="h-6 w-6" />
                </div>
                <div className="font-medium">Desarrollo profesional</div>
              </div>
              <div className="flex items-center gap-3 rounded-md bg-[#2b2d42] p-4 shadow-lg">
                <div className="flex items-center justify-center">
                  <FontAwesomeIcon icon={faVideo} className="h-6 w-6" />
                </div>
                <div className="font-medium">Conferencias</div>
              </div>
              <div className="flex items-center gap-3 rounded-md bg-[#e63946] p-4 shadow-lg">
                <div className="flex items-center justify-center">
                  <FontAwesomeIcon icon={faBook} className="h-6 w-6" />
                </div>
                <div className="font-medium">Libros y revistas</div>
              </div>
            </div>
            <Link
              className="btn w-full bg-btnColorSecondary p-5 text-center"
              to="/register"
            >
              ¡Convierte en miembro ahora!
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
