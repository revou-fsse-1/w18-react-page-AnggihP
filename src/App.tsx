import { useState } from "react";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { TeamList } from "./components/TeamList";
import { RegisterPage } from "./components/RegisterPage/RegisterPage";

function App() {
  const [likes, setLikes] = useState<number>(0);
  const [searchFilter, setSearchFilter] = useState<string>("");
  const [registerPageOpen, setRegisterPageOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen flex flex-col justify-between bg-no-repeat bg-cover bg-fixed text-gray-200">
      <Header likes={likes} searchFilter={searchFilter} setSearchFilter={setSearchFilter} />
      <TeamList searchFilter={searchFilter} setLikes={setLikes} />
      <Footer setRegisterPageOpen={setRegisterPageOpen} />
      {registerPageOpen ? (
        <RegisterPage
          registerPageOpen={registerPageOpen}
          setRegisterPageOpen={setRegisterPageOpen}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default App;