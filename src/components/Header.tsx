import { LikesCounter } from "./LikesCount";
import { SearchBar } from "./SearchBar";

type HeaderProps = {
  likes: number;
  searchFilter: string;
  setSearchFilter: React.Dispatch<React.SetStateAction<string>>;
};

export const Header = ({
  likes,
  searchFilter,
  setSearchFilter,
}: HeaderProps) => {
  return (
    <header className="flex flex-col backdrop-blur-md bg-[url('https://www.premierleague.com/resources/prod/v6.122.4-6039/i/bg-elements/heading-bg-desktop.svg')] bg-no-repeat bg-right bg-cover backdrop-brightness-[0.6] bg-fuchsia-600">
      <div className="flex flex-col justify-between sm:flex-row">
      <img src={"https://www.pngkit.com/png/full/51-516917_premier-league-logo-white.png"} alt="logo" className="ml-20 w-48 object-contain sm:ml-2" />
        <h1 className="text-5xl mt-10 font-semibold text-center mb-7">2023 EPL Teams</h1>
      <LikesCounter likes={likes} />
      </div>
      <SearchBar
        searchFilter={searchFilter}
        setSearchFilter={setSearchFilter}
      />
    </header>
  );
};