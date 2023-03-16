import MisionImage from "../assets/mision.svg";
import ObjetivosImage from "../assets/objetivos.svg";
const Conocenos = () => {
  return (
    <div className="w-full min-h-screen mt-24 flex flex-col items-center overflow-hidden text-main">
      {/* section */}
      <section className="max-w-containerMax flex justify-center items-center pt-32">
        <div className="w-containerWitdhMain_2 flex flex-col gap-10">
          <div className="flex flex-col gap-10 items-center justify-center text-center">
            <h2 className="text-5xl font-bold">¿Quiénes somos?</h2>
            <p className="text-colorTextSecundary">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
              iste dolor voluptatum voluptates ab porro ratione earum ad aliquam
              numquam voluptate laudantium adipisci corporis, unde quos
              repellendus animi maiores facere quibusdam quaerat? Numquam
              blanditiis eos ipsum illo cumque voluptatibus. Unde fugiat
              deleniti enim ut id eius iusto quod hic quis!
            </p>
          </div>
          <div className="flex justify-center items-center">
            <div className="w-full h-96">
              <img
                src="https://i.ibb.co/SxvT5yQ/imagen2.jpg"
                alt="Image 2"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="max-w-containerMax flex justify-center items-center py-24">
        <div className="max-w-containerMax flex justify-center items-center">
          <div className="w-containerWitdhMain_2 flex flex-col gap-24">
            <div className="grid md:grid-cols-2 gap-10">
              <div className="flex flex-col gap-5">
                <h2 className="text-4xl font-bold">Misión</h2>
                <p className="text-colorTextSecundary">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Incidunt ipsa, expedita dolor, odit distinctio, magnam
                  praesentium voluptatibus mollitia dignissimos amet veniam
                  commodi! Repellat quia possimus cupiditate temporibus nemo
                  sapiente quis qui, hic, repudiandae quo nobis error modi fugit
                  unde accusamus dolorum at! Quaerat accusamus, fuga fugiat
                  quidem ab laboriosam doloribus!
                </p>
              </div>
              <div className="flex justify-center items-center">
                <div className="w-80 h-80">
                  <img src={MisionImage} alt="" />
                </div>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="order-2 md:order-1 flex justify-center items-center">
                <div className="w-80 h-80">
                  <img src={ObjetivosImage} alt="" />
                </div>
              </div>
              <div className="order-1 md:order-2 md:text-right flex flex-col gap-5">
                <h2 className="text-4xl font-bold">Objetivos</h2>
                <p className="text-colorTextSecundary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                  eaque optio sequi similique? Repudiandae alias cum illo?
                  Aliquam quo eveniet deleniti deserunt earum error, cupiditate
                  consequatur eos asperiores reprehenderit illum ex, inventore
                  incidunt quos facere aut saepe minima suscipit natus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Conocenos;
