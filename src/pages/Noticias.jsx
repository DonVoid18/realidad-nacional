import NewsGrid from "../components/NewsGrid";
const newsData = [
  {
    title: "Noticia 1",
    description: "Descripción de la noticia 1",
    image: "https://picsum.photos/400/300",
    date: "15 de febrero de 2022",
  },
  {
    title: "Noticia 2",
    description: "Descripción de la noticia 2",
    image: "https://picsum.photos/400/300",
    date: "14 de febrero de 2022",
  },
  {
    title: "Noticia 3",
    description: "Descripción de la noticia 3",
    image: "https://picsum.photos/400/300",
    date: "13 de febrero de 2022",
  },
  {
    title: "Noticia 4",
    description: "Descripción de la noticia 4",
    image: "https://picsum.photos/400/300",
    date: "12 de febrero de 2022",
  },
];
const Noticias = () => {
  return (
    <div className="w-full min-h-screen pt-40 pb-24 flex flex-col items-center overflow-hidden text-main gap-20">
      <section className="w-containerWitdhMain max-w-containerMax flex justify-center items-center">
        <div className="w-full flex flex-col gap-5">
          <h1 className="text-3xl font-bold">Noticias recientes</h1>
          <NewsGrid news={newsData} />
        </div>
      </section>
    </div>
  );
};
export default Noticias;
