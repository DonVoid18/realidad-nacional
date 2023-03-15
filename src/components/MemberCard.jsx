const MemberCard = ({ name, date, img }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-4 overflow-hidden transform hover:scale-105 transition duration-300 ease-in-out">
      <div className="flex justify-center items-center">
        <img
          className="w-40 h-40 rounded-full overflow-hidden object-cover object-center"
          src={img}
          alt=""
        />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-main font-bold">{name}</h2>
        <p className="text-colorTextSecundary text-sm">
          Miembro desde el {date}
        </p>
      </div>
    </div>
  );
};
export default MemberCard;
