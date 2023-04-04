import MembersList from "../components/MembersList";
const Miembros = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center gap-20 overflow-hidden bg-colorSection_1 pt-40 pb-24 text-main">
      <section className="flex w-containerWitdhMain max-w-containerMax items-center justify-center">
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
          <MembersList />
          <MembersList />
        </div>
      </section>
    </div>
  );
};
export default Miembros;
