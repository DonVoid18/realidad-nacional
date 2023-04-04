import NewsList from "../components/NewsList";
const Noticias = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center gap-20 overflow-hidden bg-colorSection_1 pt-40 pb-24 text-main">
      <section className="flex w-containerWitdhMain max-w-containerMax items-center justify-center">
        <div className="flex w-full flex-col gap-5">
          <h1 className="text-3xl font-bold">Noticias recientes</h1>
          <NewsList />
        </div>
      </section>
      <section className="flex w-containerWitdhMain max-w-containerMax items-center justify-center">
        <div className="flex w-full flex-col gap-5">
          <h1 className="text-3xl font-bold">Noticias antiguas</h1>
          <NewsList />
        </div>
      </section>
    </div>
  );
};
export default Noticias;
