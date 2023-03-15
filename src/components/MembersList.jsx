// data is an array of objects
// each object has a name, year, image
const data = [
  {
    name: "Juan Perez",
    year: "2021",
    img: "https://via.placeholder.com/600x400",
  },
  {
    name: "Maria Lopez",
    year: "2021",
    img: "https://via.placeholder.com/600x400",
  },
  {
    name: "Pedro Sanchez",
    year: "2021",
    img: "https://via.placeholder.com/600x400",
  },
  {
    name: "Luisa Garcia",
    year: "2021",
    img: "https://via.placeholder.com/600x400",
  },
  {
    name: "Jose Torres",
    year: "2021",
    img: "https://via.placeholder.com/600x400",
  },
];
import MemberCard from "./MemberCard";
const MembersList = () => {
  return (
    <div className="grid pt-5 grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 justify-center items-center">
      {data.map((member, index) => (
        <MemberCard
          key={index}
          name={member.name}
          date={member.year}
          img={member.img}
        />
      ))}
    </div>
  );
};
export default MembersList;
