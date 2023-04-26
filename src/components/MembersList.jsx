import MemberCard from "./MemberCard";
import Spinner from "./Spinner";
import { useGetMembersQuery } from "../features/members/membersApiSlice";
const MembersList = () => {
  // aqui realizar la solicitud
  const { data: members, isLoading, isError } = useGetMembersQuery();
  if (isLoading) return <Spinner />;
  if (isError)
    return (
      <p>
        En este momento estamos teniendo problemas para mostrar los miembros...
      </p>
    );
  if (members?.lenght === 0)
    return <p>No se encontraron miembros registrados</p>;
  return (
    <div className="grid grid-cols-1 items-center justify-center gap-5 pt-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
      {members.map((member, index) => (
        <MemberCard
          key={index}
          name={member.name}
          lastName={member.lastName}
          date={member.dateRegister}
          img={member.imageProfile}
        />
      ))}
    </div>
  );
};
export default MembersList;
