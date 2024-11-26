import { motion } from "framer-motion";

const Eventos = () => {
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
              La relación entre desarrollo y políticas públicas
            </h2>
            <p className="text-xl text-colorTextSecundary">
              El desarrollo no es un proceso espontáneo; requiere políticas
              públicas efectivas que lo impulsen. Algunas claves de esta
              relación son: Visión a largo plazo: Las políticas deben estar
              alineadas con objetivos de desarrollo sostenible y estrategias
              nacionales. Equidad: Garantizar que los beneficios lleguen a toda
              la población, especialmente a grupos vulnerables. Participación
              ciudadana: Incluir a la sociedad en el diseño e implementación de
              las políticas para mayor legitimidad y éxito. Adaptabilidad: Las
              políticas deben responder a cambios en el contexto político,
              económico o climático.
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
            <h2 className="text-4xl font-bold">Tipos de políticas públicas:</h2>
            <p className="text-justify text-xl text-colorTextSecundary">
              Económicas: Promoción del comercio, regulación fiscal, inversión
              en infraestructura. Sociales: Educación, salud, vivienda,
              seguridad social. Ambientales: Conservación de biodiversidad,
              mitigación del cambio climático, gestión de desechos. Culturales:
              Preservación de patrimonios, promoción de identidades locales,
              fomento de industrias creativas.
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
    </div>
  );
};
export default Eventos;
