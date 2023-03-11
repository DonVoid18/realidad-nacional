const Miembros = () => {
  return (
    <div className="w-full min-h-screen pt-40 pb-24 flex flex-col items-center overflow-hidden text-main gap-20">
      <section className="w-containerWitdhMain max-w-containerMax flex justify-center items-center">
        <div className="w-full flex flex-col gap-5">
          <h1 className="text-3xl font-bold">Miembros</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, ut!
            Voluptate cupiditate aspernatur officiis iste a similique impedit
            nisi nobis fugiat blanditiis! A, fugiat laudantium. Error labore ad
            ut, quo tenetur temporibus amet eos, nihil delectus atque, harum
            totam quis molestiae. Repellat assumenda saepe, accusamus nostrum
            asperiores at sequi ipsum.
          </p>
          <div className="grid grid-cols-4">
            <div className="w-52 flex flex-col gap-3 rounded-lg overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
              <div>
                <img
                  className="w-full h-40 rounded-lg overflow-hidden object-cover object-center"
                  src="https://blogthinkbig.com/wp-content/uploads/sites/4/2022/07/ingenierias.jpg?fit=1040%2C650"
                  alt=""
                />
              </div>
              <div className="flex flex-col ">
                <h2 className="text-main font-bold">PATRICK RIOS</h2>
                <p className="text-sm">Miembro desde el 2020</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Miembros;
