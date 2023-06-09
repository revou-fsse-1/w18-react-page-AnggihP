import { allTeams } from "../data/all-teams-data";
import { TeamCard } from "./TeamCard";

type TeamListProps = {
  searchFilter: string;
  setLikes: React.Dispatch<React.SetStateAction<number>>;
};

export const TeamList = ({ searchFilter, setLikes }: TeamListProps) => {
  return (
    <main className="w-full grow px-10 py-10 mx-auto flex flex-wrap gap-4 justify-center items-center place-content-start">
      {allTeams.map((team) => (
        <TeamCard 
          key={team.id}
          name={team.name}
          rank={team.rank}
          imgSrc={team.imageUrl}
          searchFilter={searchFilter}
          setLikes={setLikes}
        />
      ))}
    </main>
  );
};