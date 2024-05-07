import { Link, useNavigate } from "react-router-dom";
import InputSearch from "./InputSearch";
import Logo from "./Logo";
import SearchIcon from "./shared/SearchIcon";
import ThemeModal from "./ThemeModal";
import { FormEvent, useState } from "react";

const Topbar = () => {
  const [showThemeModal, setShowThemeModal] = useState(false);
  const [search, setSearch] = useState<string>("");

  const navigate = useNavigate();

  // handle pokemon search
  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    navigate({
      pathname: "/pokemons",
      search: `?search=${search}`,
    });
  };

  return (
    <header className="sticky top-0 z-20">
      <ThemeModal
        isOpen={showThemeModal}
        setIsOpen={() => setShowThemeModal(false)}
      />
      <nav className=" px-4 lg:px-6 border shadow-md h-[13vh] bg-[rgba(255,255,255,0.70)]">
        <div className="flex  justify-between items-center mx-auto max-w-screen-xl h-full ">
          <Link to="/" className="flex items-center gap-3">
            <Logo className=" w-16 sm:w-[120px] sm:-mb-8 " />
            <h4 className="hidden sm:block self-center text-2xl font-bold whitespace-nowrap">
              Poké<span className="text-primary">book</span>
            </h4>
          </Link>
          <form onSubmit={handleSearch} className="sm:w-[400px]">
            <label
              htmlFor="pokemon-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only "
            >
              Search
            </label>
            <InputSearch
              startIcon={
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 ">
                  <SearchIcon className="w-4 h-4 text-gray-300" />
                </div>
              }
              className="block w-full p-2.5 ps-10 text-sm text-gray-900 border rounded-full bg-transparent focus:outline-none "
              style={{ boxShadow: "0 3px  1px #eee" }}
              value={search}
              onChange={(value) => setSearch(value)}
            />
          </form>
          <button className="flex items-center border border-gray-500 p-1 rounded-full cursor-pointer hover:scale-105 duration-300">
            <div
              className="rounded-full bg-primary p-2 w-8 h-8"
              onClick={() => setShowThemeModal(true)}
            >
              <span className="sr-only">toggle theme</span>
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Topbar;
