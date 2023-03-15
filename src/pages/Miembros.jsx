import MembersList from "../components/MembersList";
const Miembros = () => {
  return (
    <div className="w-full min-h-screen pt-40 pb-24 flex flex-col items-center overflow-hidden text-main gap-20">
      <section className="w-containerWitdhMain max-w-containerMax flex justify-center items-center">
        <div className="w-full flex flex-col gap-10 text-center">
          <h1 className="text-5xl font-bold">Miembros</h1>
          <div className="flex justify-center items-center">
            <p className="w-full sm:w-3/4 md:w-4/6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, ut!
              Voluptate cupiditate aspernatur officiis iste a similique impedit
              nisi nobis fugiat blanditiis! A, fugiat laudantium. Error labore
              ad ut, quo tenetur temporibus amet eos, nihil delectus atque,
              harum totam quis molestiae. Repellat assumenda saepe, accusamus
              nostrum asperiores at sequi ipsum.
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
