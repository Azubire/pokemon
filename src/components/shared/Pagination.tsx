import NextIcon from "./NextIcon";
import PrevIcon from "./PrevIcon";
import PageSizeDropdown from "./PageSizeDropdown";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setPage, setSize } from "@/store/features/pokemonSlice";

const Pagination = () => {
  const dispatch = useAppDispatch();

  const { page, size } = useAppSelector((state) => state.pokemons);

  const handlePageChange = (page: number) => {
    dispatch(setPage(page));
  };

  const handleSizeChange = (size: number) => {
    dispatch(setSize(size));
  };

  return (
    <nav
      className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
      aria-label="navigation"
    >
      <ul className="inline-flex items-stretch gap-2">
        <li>
          <button
            className="flex items-center justify-center h-full p-2  bg-[#E1E1E1] rounded-md border border-gray-300 hover:bg-[#F1F1F1] hover:text-gray-700 "
            onClick={() => handlePageChange(page - 1)}
          >
            <span className="sr-only">Previous</span>
            <PrevIcon />
          </button>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center rounded-md h-full justify-center text-sm p-2 px-3.5 leading-tight  bg-[#E1E1E1] border border-gray-300 hover:bg-[#F1F1F1] hover:text-gray-700 font-medium"
          >
            1
          </a>
        </li>

        <li>
          <button
            className="flex items-center justify-center h-full p-2 leading-tight  bg-[#E1E1E1] rounded-md border border-gray-300 hover:bg-[#F1F1F1] hover:text-gray-700 "
            onClick={() => handlePageChange(page + 1)}
          >
            <span className="sr-only">Next</span>
            <NextIcon />
          </button>
        </li>
      </ul>

      <PageSizeDropdown value={size} onChange={handleSizeChange} />
    </nav>
  );
};

export default Pagination;
