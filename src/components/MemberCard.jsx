const MemberCard = ({ name, lastName, date, img }) => {
  return (
    <div className="flex w-full transform flex-col items-center justify-center gap-4 overflow-hidden transition duration-300 ease-in-out hover:scale-105">
      <div className="flex items-center justify-center">
        <img
          className="h-40 w-40 overflow-hidden rounded-full object-cover object-center"
          src={img}
          alt={`${name} ${lastName}`}
        />
      </div>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-main font-bold">
          {name} {lastName}
        </h2>
        <p className="text-sm text-colorTextSecundary">Miembro desde {date}</p>
      </div>
    </div>
  );
};
export default MemberCard;
