import { motion } from "framer-motion";
import MembersList from "../components/MembersList";

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
          <h1 className="text-5xl font-bold">
            Retos actuales en el desarrollo y las políticas públicas
          </h1>
          <div className="flex items-center justify-center">
            <p className="w-full text-xl sm:w-3/4 md:w-4/6">
              Desafíos globales: Cambio climático y pérdida de biodiversidad.
              Crisis económicas y desigualdad social. Migración y conflictos
              geopolíticos. Pandemias y sistemas de salud vulnerables. Desafíos
              locales: Brechas en educación, salud y acceso a servicios básicos.
              Corrupción y falta de transparencia en la gestión pública.
              Infraestructura insuficiente y poco sostenible. Desconexión entre
              los objetivos nacionales y las necesidades locales.
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
