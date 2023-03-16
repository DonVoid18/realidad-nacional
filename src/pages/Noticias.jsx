import NewsList from "../components/NewsList";
const Noticias = () => {
  return (
    <div className="bg-colorSection_1 w-full min-h-screen pt-40 pb-24 flex flex-col items-center overflow-hidden text-main gap-20">
      <section className="w-containerWitdhMain max-w-containerMax flex justify-center items-center">
        <div className="w-full flex flex-col gap-5">
          <h1 className="text-3xl font-bold">Noticias recientes</h1>
          <NewsList />
        </div>
      </section>
      <section className="w-containerWitdhMain max-w-containerMax flex justify-center items-center">
        <div className="w-full flex flex-col gap-5">
          <h1 className="text-3xl font-bold">Noticias antiguas</h1>
          <NewsList />
        </div>
      </section>
    </div>
  );
};
export default Noticias;
