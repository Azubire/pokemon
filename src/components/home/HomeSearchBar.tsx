import { FormEvent, useState } from "react";
import InputSearch from "../InputSearch";
import SearchIcon from "../shared/SearchIcon";
import { useNavigate } from "react-router-dom";

const HomeSearchBar = () => {
  const [search, setSearch] = useState<string>("");

  const navigate = useNavigate();

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    navigate({
      pathname: "/pokemons",
      search: `?search=${search}`,
    });
  };
  return (
    <form onSubmit={handleSearch}>
      <label
        htmlFor="pokemon-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only "
      >
        Search
      </label>
      <InputSearch
        className="block w-full p-3 pe-10 text-sm text-gray-900 border-[6px] border-primary  rounded-full bg-transparent focus:outline-none"
        endIcon={
          <div
            className="absolute inset-y-0 end-0 flex items-center pe-3 cursor-pointer hover:scale-105 duration-200 "
            onClick={handleSearch}
          >
            <div className="rounded-full bg-primary p-2">
              <SearchIcon className="w-4 h-4 text-white" />
            </div>
          </div>
        }
        value={search}
        onChange={(value) => setSearch(value)}
      />
    </form>
  );
};

export default HomeSearchBar;
