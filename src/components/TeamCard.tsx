import { useState } from "react";

type TeamCardProps = {
    name: string;
    rank: number;
    imgSrc: string;
    searchFilter: string;
    setLikes: React.Dispatch<React.SetStateAction<number>>;
  };
  
  export const TeamCard = ({
    name,
    rank,
    imgSrc,
    searchFilter,
    setLikes,
  }: TeamCardProps) => {
    const [toggleLike, setToggleLike] = useState<boolean>(false);
  
    const handleLikeIcon = () => {
      const toggleClassName = toggleLike
        ? "absolute top-4 right-2 cursor-pointer fill-red-600 transition-all scale-125"
        : "absolute top-4 right-2 cursor-pointer fill-white transition-all";
  
      return (
        <svg
          width="30"
          height="25"
          viewBox="0 0 33 31"
          onClick={toggleLikeTeam}
          className={toggleClassName}
        >
          <path d="M16.5 30.6938L14.1438 28.5488C5.775 20.96 0.25 15.9388 0.25 9.8125C0.25 4.79125 4.1825 0.875 9.1875 0.875C12.015 0.875 14.7288 2.19125 16.5 4.255C18.2712 2.19125 20.985 0.875 23.8125 0.875C28.8175 0.875 32.75 4.79125 32.75 9.8125C32.75 15.9388 27.225 20.96 18.8562 28.5488L16.5 30.6938Z" />
        </svg>
      );
    };
  
    const handleClassNameBySearchFilter = () => {
      return name.toLowerCase().includes(searchFilter.toLowerCase())
        ? "w-60 h-80 flex flex-col relative rounded-2xl hover:scale-105 duration-500 gap-5 bg-fuchsia-500"
        : "hidden";
    };
  
    const toggleLikeTeam = () => {
      if (!toggleLike) {
        setToggleLike((prev) => !prev);
        setLikes((prev) => prev + 1);
      } else {
        setToggleLike((prev) => !prev);
        setLikes((prev) => prev - 1);
      }
    };
  
    return (
      <div className={handleClassNameBySearchFilter()}>
        <h3
          onDoubleClick={toggleLikeTeam}
          className="w-full font-bold absolute px-4 pt-4 pb-10 truncate rounded-2xl bg-gradient-to-b from-slate-950 backdrop-brightness-80"
        >
          {name}
        </h3>
        <h3
          onDoubleClick={toggleLikeTeam}
          className="w-full absolute px-4 pt-12 pb-10 truncate "
        >
          rank : {rank}
        </h3>
        <img
          src={imgSrc}
          alt={name}
          className="w-full h-80 pt-20 object-cover rounded-2xl "
          onDoubleClick={toggleLikeTeam}
        />
        {handleLikeIcon()}
      </div>
    );
  };