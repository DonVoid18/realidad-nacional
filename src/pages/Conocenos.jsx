import { motion } from "framer-motion";
import Objetivos from "../assets/objetivos.svg";
const Conocenos = () => {
  return (
    <div className="mt-24 flex min-h-screen w-full flex-col items-center overflow-hidden text-main">
      {/* section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        className="flex max-w-containerMax items-center justify-center pt-32"
      >
        <div className="flex w-containerWitdhMain_2 flex-col gap-10">
          <div className="flex flex-col items-center justify-center gap-10 text-center">
            <h2 className="text-6xl font-bold">
              Explora el impacto del desarrollo y las políticas públicas
            </h2>
            <p className="text-xl text-colorTextSecundary">
              En esta sección, encontrarás información sobre los actores clave y
              las estrategias que han impulsado avances significativos en
              desarrollo y políticas públicas. Además, podrás descubrir los
              objetivos, enfoques y visiones que orientan estas iniciativas
              hacia un futuro más equitativo y sostenible. Te invitamos a
              explorar cómo el desarrollo y las políticas públicas pueden
              transformar comunidades, fomentar el bienestar social y promover
              un crecimiento inclusivo. Forma parte de esta gran red de
              profesionales comprometidos con la creación de un impacto positivo
              en la sociedad.
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
      </motion.section>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        className="flex max-w-containerMax items-center justify-center pt-20"
      >
        <div className="flex w-containerWitdhMain_2 flex-col gap-10">
          <div className="flex flex-col items-start justify-center gap-5 text-left">
            <h2 className="text-4xl font-bold">¿Qué son las políticas públicas?</h2>
            <p className="text-justify text-xl text-colorTextSecundary">
              Las políticas públicas son acciones planificadas que los gobiernos
              implementan para resolver problemas sociales o aprovechar
              oportunidades de desarrollo. Estas políticas son el resultado de
              un proceso que incluye la identificación de problemas, diseño de
              estrategias, implementación y evaluación de resultados.
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
      </motion.section>
      <section className="flex max-w-containerMax items-center justify-center py-24">
        <div className="flex max-w-containerMax items-center justify-center">
          <div className="flex w-containerWitdhMain_2 flex-col gap-24">
            {/* <div className="grid gap-10 xl:grid-cols-2">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.1 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="flex flex-col gap-5"
              >
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
                className="flex w-full items-center justify-center"
              >
                <div className="w-5/6">
                  <img src={Mision} alt="Imagen misión" />
                </div>
              </motion.div>
            </div>
            <div className="grid gap-10 xl:grid-cols-2">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.1 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="order-2 flex w-full items-center justify-center xl:order-1"
              >
                <div className="w-5/6">
                  <img src={Vision} alt="Imagen visión" />
                </div>
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
                className="order-1 flex flex-col gap-5 xl:order-2 xl:text-right"
              >
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
              </motion.div>
            </div> */}
            <div className="grid gap-10 xl:grid-cols-2">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1.1 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
                className="flex flex-col gap-5"
              >
                <h2 className="text-4xl font-bold">Objetivos</h2>
                <p className="text-justify text-xl text-colorTextSecundary">
                  Difundir enfoques innovadores de desarrollo: Analizar y
                  compartir experiencias exitosas de políticas públicas a nivel
                  local e internacional. Fomentar la participación ciudadana:
                  Promover el involucramiento activo de comunidades,
                  organizaciones y actores clave en la creación de políticas
                  públicas. Apoyar la formación de capacidades: Capacitar a
                  líderes, tomadores de decisiones y ciudadanos en el diseño,
                  implementación y evaluación de políticas públicas efectivas.
                  Incentivar la sostenibilidad: Impulsar políticas alineadas con
                  los Objetivos de Desarrollo Sostenible (ODS) para enfrentar
                  retos como el cambio climático y la desigualdad. Promover la
                  transparencia y rendición de cuentas: Facilitar herramientas y
                  metodologías que garanticen la transparencia en el diseño e
                  implementación de políticas públicas.
                </p>
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
                className="flex w-full items-center justify-center"
              >
                <div className="w-5/6">
                  <img src={Objetivos} alt="Imagen objetivos" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Conocenos;
