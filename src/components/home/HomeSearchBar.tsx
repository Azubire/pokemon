import InputSearch from "../InputSearch";
import SearchIcon from "./SearchIcon";

const HomeSearchBar = () => {
  return (
    <form>
      <label
        htmlFor="pokemon-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only "
      >
        Search
      </label>
      <InputSearch
        className="block w-full p-3 pe-10 text-sm text-gray-900 border-[6px] border-primary  rounded-full bg-transparent focus:outline-none"
        endIcon={
          <div className="absolute inset-y-0 end-0 flex items-center pe-3 ">
            <div className="rounded-full bg-primary p-2">
              <SearchIcon className="w-4 h-4 text-white" />
            </div>
          </div>
        }
      />
    </form>
  );
};

export default HomeSearchBar;
