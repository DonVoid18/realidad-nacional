import MembersList from "../components/MembersList";
import { motion } from "framer-motion";

const Miembros = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center gap-10 overflow-hidden pt-40 pb-24 text-main">
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        className="flex w-containerWitdhMain max-w-containerMax items-center justify-center"
      >
        <div className="flex w-full flex-col gap-10 text-center">
          <h1 className="text-5xl font-bold">Miembros</h1>
          <div className="flex items-center justify-center">
            <p className="w-full text-xl sm:w-3/4 md:w-4/6">
              Nuestros miembros son estudiantes universitarios interesados en
              adquirir conocimientos y habilidades, compartir sus experiencias y
              colaborar en proyectos y actividades para fomentar el avance de
              estas áreas. Cada año, se suman nuevos miembros que se integran a
              esta gran comunidad de aprendizaje y trabajo en equipo.
            </p>
          </div>
        </div>
      </motion.section>
      <section className="flex w-containerWitdhMain max-w-containerMax items-center justify-center">
        <MembersList />
      </section>
    </div>
  );
};
export default Miembros;
