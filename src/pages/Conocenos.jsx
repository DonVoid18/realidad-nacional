import Mision from "../assets/mision.svg";
import Vision from "../assets/vision.svg";
import Objetivos from "../assets/objetivos.svg";
const Conocenos = () => {
  return (
    <div className="mt-24 flex min-h-screen w-full flex-col items-center overflow-hidden text-main">
      {/* section */}
      <section className="flex max-w-containerMax items-center justify-center pt-32">
        <div className="flex w-containerWitdhMain_2 flex-col gap-10">
          <div className="flex flex-col items-center justify-center gap-10 text-center">
            <h2 className="text-6xl font-bold">
              Conoce a la rama estudiantil IEEE UNHEVAL 2023
            </h2>
            <p className="text-xl text-colorTextSecundary">
              En esta sección, encontrarás información sobre las autoridades que
              impulsaron la creación de nuestra rama estudiantil, así como los
              objetivos, misión y visión que nos guían en nuestras actividades y
              proyectos. Además, podrás conocer a nuestros miembros y todo el
              equipo que trabaja para que IEEE UNHEVAL sea una comunidad activa
              y en constante crecimiento. Te invitamos a explorar y conocer más
              sobre nuestra rama estudiantil IEEE UNHEVAL y a unirte a nosotros
              para formar parte de esta gran comunidad de estudiantes
              apasionados por la ingeniería y la tecnología.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="h-full w-full">
              <img
                src="https://i.ibb.co/SxvT5yQ/imagen2.jpg"
                alt="Image 2"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="flex max-w-containerMax items-center justify-center pt-20">
        <div className="flex w-containerWitdhMain_2 flex-col gap-10">
          <div className="flex flex-col items-start justify-center gap-5 text-left">
            <h2 className="text-4xl font-bold">Miembros fundadores</h2>
            <p className="text-justify text-xl text-colorTextSecundary">
              Este equipo de trabajo está formado por líderes que comparten la
              visión y los objetivos de la rama estudiantil, trabajando siempre
              en equipo para llevar a cabo proyectos y actividades que
              contribuyan a la formación y desarrollo de los estudiantes.
              Además, su experiencia y conocimientos se han transmitido a los
              nuevos miembros, asegurando así la continuidad y fortalecimiento
              de la rama estudiantil.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <div className="h-full w-full">
              <img
                src="https://i.ibb.co/W3mQg06/imagen1.jpg"
                alt="Image 2"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="flex max-w-containerMax items-center justify-center py-24">
        <div className="flex max-w-containerMax items-center justify-center">
          <div className="flex w-containerWitdhMain_2 flex-col gap-24">
            <div className="grid gap-10 xl:grid-cols-2">
              <div className="flex flex-col gap-5">
                <h2 className="text-4xl font-bold">Misión</h2>
                <p className="text-justify text-xl text-colorTextSecundary">
                  La misión de la Rama Estudiantil IEEE UNHEVAL es fomentar y
                  promover el desarrollo de habilidades, conocimientos y valores
                  en el campo de la ingeniería eléctrica, electrónica,
                  computacional y tecnologías de la información entre los
                  estudiantes de la Universidad Nacional Hermilio Valdizán. A
                  través de actividades educativas, sociales y profesionales,
                  buscamos crear un ambiente de colaboración y aprendizaje
                  continuo que permita a nuestros miembros crecer tanto a nivel
                  personal como profesional y así contribuir al desarrollo
                  tecnológico de la sociedad.
                </p>
              </div>
              <div className="flex w-full items-center justify-center">
                <div className="w-5/6">
                  <img src={Mision} alt="Imagen misión" />
                </div>
              </div>
            </div>
            <div className="grid gap-10 xl:grid-cols-2">
              <div className="order-2 flex w-full items-center justify-center xl:order-1">
                <div className="w-5/6">
                  <img src={Vision} alt="Imagen visión" />
                </div>
              </div>
              <div className="order-1 flex flex-col gap-5 xl:order-2 xl:text-right">
                <h2 className="text-4xl font-bold">Visión</h2>
                <p className="text-justify text-xl text-colorTextSecundary">
                  La visión de la rama estudiantil IEEE UNHEVAL es ser
                  reconocida como una comunidad líder en la promoción y
                  desarrollo de habilidades técnicas y profesionales en los
                  campos de la ingeniería eléctrica, electrónica, computacional
                  y de tecnologías de la información, no solo en la universidad
                  sino en la región y el país. Buscamos ser un referente en la
                  formación y el desarrollo de líderes en tecnología que
                  contribuyan al avance y bienestar de la sociedad.
                </p>
              </div>
            </div>
            <div className="grid gap-10 xl:grid-cols-2">
              <div className="flex flex-col gap-5">
                <h2 className="text-4xl font-bold">Objetivos</h2>
                <p className="text-justify text-xl text-colorTextSecundary">
                  Los objetivos de la rama estudiantil IEEE UNHEVAL se enfocan
                  en fomentar el interés y el avance en las áreas de la
                  ingeniería eléctrica, electrónica, computacional y de
                  tecnologías de la información entre los estudiantes
                  universitarios de la Universidad Nacional Hermilio Valdizán en
                  Huánuco, Perú. Además, la rama estudiantil tiene como objetivo
                  promover la colaboración entre los estudiantes y los
                  profesionales del campo de la ingeniería, así como fomentar el
                  desarrollo profesional y la realización de proyectos
                  innovadores. Todo esto con el fin de contribuir al avance
                  tecnológico y al desarrollo sostenible de la región y del país
                  en general.
                </p>
              </div>
              <div className="flex w-full items-center justify-center">
                <div className="w-5/6">
                  <img src={Objetivos} alt="Imagen objetivos" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Conocenos;
