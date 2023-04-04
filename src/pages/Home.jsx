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
    <div className="w-full flex-col flex items-center justify-center text-left sm:text-center xl:text-left overflow-hidden">
      <div className="w-containerWitdhMain max-w-containerMax min-h-screen flex items-center justify-center">
        <div className="w-full flex justify-center items-center gap-10 flex-col-reverse pt-52 xl:pt-0 xl:flex-row xl:gap-20">
          <div className="w-[300px] h-[300px] relative flex items-center justify-center sm:w-[600px] sm:h-[600px] xl:min-w-[530px] xl:min-h-[530px]">
            <img className="w-full" src={ImagenTeam2} alt="Image Banner" />
            <div className="ctn-tiket-hd bottom-12 sm:bottom-auto sm:top-36 sm:left-1/3">
              <div className="w-10 h-10 flex items-center justify-center bg-[#8567db] rounded-full shadow-violetC">
                <FontAwesomeIcon
                  icon={faPeopleCarryBox}
                  className="text-white"
                />
              </div>
              Trabajo en equipo
            </div>
            <div className="ctn-tiket-hd bottom-28 sm:bottom-32 sm:left-5">
              <div className="w-10 h-10 flex items-center justify-center bg-[#e63946] rounded-full shadow-greenC">
                <FontAwesomeIcon icon={faHeart} className="text-white" />
              </div>
              Compromiso
            </div>
            <div className="ctn-tiket-hd bottom-44 sm:bottom-44 sm:left-2/3">
              <div className="w-10 h-10 flex items-center justify-center bg-[#1fddd2] rounded-full shadow-greenLightC">
                <FontAwesomeIcon icon={faUsers} className="text-white" />
              </div>
              Liderazgo
            </div>
          </div>
          <div>
            <div>
              <h1 className="text-5xl font-bold md:text-6xl md:leading-12">
                Rama estudiantil <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
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
      <div className="w-full bg-colorSection_1 flex items-center justify-center">
        <div className="w-containerWitdhMain max-w-containerMax grid xl:grid-cols-2 gap-12 md:gap-20 py-28">
          <div className="flex flex-col gap-8 items-start sm:items-center xl:items-start text-main">
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              ¿Qué es IEEE UNHEVAL?
            </h2>
            <p className="text-xl text-colorTextSecundary text-justify">
              La rama estudiantil IEEE UNHEVAL 2023 es un grupo de estudiantes
              de la Universidad Nacional Hermilio Valdizán en Huánuco, Perú, que
              forman parte de la organización internacional IEEE (Instituto de
              Ingenieros Eléctricos y Electrónicos). Esta rama estudiantil tiene
              como objetivo principal fomentar el interés y el avance en las
              áreas de la ingeniería eléctrica, electrónica, computacional y de
              tecnologías de la información entre los estudiantes
              universitarios.
            </p>
            <p className="text-xl text-colorTextSecundary text-justify">
              Los miembros de la rama estudiantil pueden participar en
              actividades de aprendizaje, como conferencias y talleres, para
              adquirir habilidades y conocimientos en estas áreas, así como
              también en proyectos y oportunidades de desarrollo profesional.
            </p>
          </div>
          <div className="w-full flex justify-center items-center">
            <Carousel
              showThumbs={false}
              showStatus={false}
              infiniteLoop
              autoPlay
            >
              <div className="xl:h-80">
                <img
                  src="https://i.ibb.co/SxvT5yQ/imagen2.jpg"
                  alt="Image 2"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="xl:h-80">
                <img
                  src="https://i.ibb.co/W3mQg06/imagen1.jpg"
                  alt="Image 3"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="xl:h-80">
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
      <div className="w-full flex bg-blue-600 shadow-3xl text-white items-center justify-center">
        <div className="w-containerWitdhMain max-w-containerMax flex flex-col gap-12 md:gap-20 py-28">
          <div className="flex flex-col gap-10 items-center text-center">
            <h2 className="text-3xl mini:text-4xl font-bold tracking-tight md:text-5xl">
              Nuestras autoridades 2023
            </h2>
            <p className="w-3/4 text-xl">
              Cada uno de estos miembros de la junta directiva tiene la
              responsabilidad de liderar un equipo de trabajo y coordinar
              actividades y proyectos que beneficien a los miembros de la rama y
              a la comunidad en general.
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
          <div className="flex justify-center items-center text-left">
            <div className="flex flex-col gap-16 relative">
              <div className="max-[380px]:hidden w-1 h-5/6 absolute bg-gradient-to-t from-teal-500 to-blue-600 top-10 left-8"></div>
              <div className="z-0 flex max-[380px]:flex-col gap-5 items-center">
                <div className="flex justify-center items-center bg-primary rounded-full p-5">
                  <FontAwesomeIcon
                    icon={faBuildingColumns}
                    className="w-7 h-7 text-white"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div>
                    <h3 className="font-bold text-2xl">
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
              <div className="z-0 flex max-[380px]:flex-col gap-5 items-center">
                <div className="flex justify-center items-center bg-black rounded-full p-5">
                  <FontAwesomeIcon
                    icon={faAddressCard}
                    className="w-7 h-7 text-white"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div>
                    <h3 className="font-bold text-2xl">Registra tus datos</h3>
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
              <div className="z-0 flex max-[380px]:flex-col gap-5 items-center">
                <div className="flex justify-center items-center bg-teal-500 rounded-full p-5">
                  <FontAwesomeIcon
                    icon={faSackDollar}
                    className="w-7 h-7 text-white"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div>
                    <h3 className="font-bold text-2xl">Pagar la membresía</h3>
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
      <div className="w-full flex flex-col xl:flex-row xl:h-[580px] items-center justify-center bg-blue-600 text-white overflow-hidden relative">
        <div className="md:px-10 xl:h-full xl:absolute xl:-left-64 min-[1400px]:-left-52">
          <img className="xl:h-full" src={Developers} alt="Imagen developers" />
        </div>
        <div className="w-10/12 max-w-7xl py-20 grid xl:gap-20 xl:grid-cols-2">
          <div></div>
          <div className="flex flex-col justify-center gap-7 items-start sm:items-center xl:items-start">
            <h3 className="text-4xl font-bold tracking-tight md:text-5xl">
              Beneficios de ser miembro
            </h3>
            <p className="text-xl">
              Ser miembro de la rama estudiantil IEEE UNHEVAL ofrece muchos
              beneficios, tales como:
            </p>
            <div className="w-full grid grid-cols-1 gap-2 text-main md:grid-cols-2">
              <div className="flex gap-3 bg-teal-500 p-4 items-center rounded-md shadow-lg">
                <div className="flex justify-center items-center">
                  <FontAwesomeIcon icon={faGlobe} className="w-6 h-6" />
                </div>
                <div className="font-medium">Cursos gratuitos</div>
              </div>
              <div className="flex gap-3 bg-primary p-4 items-center rounded-md shadow-lg">
                <div className="flex justify-center items-center">
                  <FontAwesomeIcon icon={faRankingStar} className="w-6 h-6" />
                </div>
                <div className="font-medium">Desarrollo profesional</div>
              </div>
              <div className="flex gap-3 bg-[#2b2d42] p-4 items-center rounded-md shadow-lg">
                <div className="flex justify-center items-center">
                  <FontAwesomeIcon icon={faVideo} className="w-6 h-6" />
                </div>
                <div className="font-medium">Conferencias</div>
              </div>
              <div className="flex gap-3 bg-[#e63946] p-4 items-center rounded-md shadow-lg">
                <div className="flex justify-center items-center">
                  <FontAwesomeIcon icon={faBook} className="w-6 h-6" />
                </div>
                <div className="font-medium">Libros y revistas</div>
              </div>
            </div>
            <Link
              className="btn bg-btnColorSecondary w-full text-center p-5"
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
