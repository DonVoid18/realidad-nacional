import EventList from "../components/EventList";
const Eventos = () => {
  return (
    <div className="bg-colorSection_1 w-full min-h-screen pt-40 pb-24 flex flex-col items-center overflow-hidden text-main gap-20">
      <section className="w-containerWitdhMain max-w-containerMax flex justify-center items-center">
        <div className="w-full flex flex-col gap-5">
          <h1 className="text-3xl font-bold">Próximos eventos</h1>
          <EventList></EventList>
        </div>
      </section>
      <section className="w-containerWitdhMain max-w-containerMax flex justify-center items-center">
        <div className="w-full flex flex-col gap-5">
          <h1 className="text-3xl font-bold">Eventos pasados</h1>
          <EventList></EventList>
        </div>
      </section>
    </div>
  );
};
export default Eventos;
