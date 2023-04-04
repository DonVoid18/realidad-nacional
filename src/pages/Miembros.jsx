import MembersList from "../components/MembersList";
const Miembros = () => {
  return (
    <div className="bg-colorSection_1 w-full min-h-screen pt-40 pb-24 flex flex-col items-center overflow-hidden text-main gap-20">
      <section className="w-containerWitdhMain max-w-containerMax flex justify-center items-center">
        <div className="w-full flex flex-col gap-10 text-center">
          <h1 className="text-5xl font-bold">Miembros</h1>
          <div className="flex justify-center items-center">
            <p className="w-full sm:w-3/4 md:w-4/6 text-xl">
              Nuestros miembros son estudiantes universitarios interesados en
              adquirir conocimientos y habilidades, compartir sus experiencias y
              colaborar en proyectos y actividades para fomentar el avance de
              estas áreas. Cada año, se suman nuevos miembros que se integran a
              esta gran comunidad de aprendizaje y trabajo en equipo.
            </p>
          </div>
          <MembersList />
          <MembersList />
        </div>
      </section>
    </div>
  );
};
export default Miembros;
