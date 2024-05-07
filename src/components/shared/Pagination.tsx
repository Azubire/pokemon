import NextIcon from "./NextIcon";
import PrevIcon from "./PrevIcon";
import PageSizeDropdown from "./PageSizeDropdown";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setPage, setSize } from "@/store/features/pokemonSlice";
import PaginationBtn from "./PaginationBtn";

const Pagination = () => {
  const dispatch = useAppDispatch();

  const { page, size, data } = useAppSelector((state) => state.pokemons);

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
            className="flex items-center justify-center h-full p-2  bg-[#E1E1E1] rounded-md border border-gray-300 hover:bg-[#F1F1F1] hover:text-gray-700 disabled:bg-[#E1E1E1] disabled:text-gray-500 disabled:cursor-not-allowed"
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
          >
            <span className="sr-only">Previous</span>
            <PrevIcon />
          </button>
        </li>
        {page > 1 && (
          <PaginationBtn
            pageNumber={1}
            handlePageChange={handlePageChange}
            page={page}
          />
        )}
        {page > 2 && (
          <li className="page-item disabled">
            <span className="page-link">...</span>
          </li>
        )}
        {Array.from(Array(4), (_, index) => page + index).map((pageNumber) => (
          <PaginationBtn
            key={pageNumber}
            pageNumber={pageNumber}
            handlePageChange={handlePageChange}
            page={page}
          />
        ))}
        {page < Math.ceil(500 / size) - 2 && (
          <li className="page-item disabled">
            <span className="font-extrabold">...</span>
          </li>
        )}
        {page < Math.ceil(500 / size) && (
          <PaginationBtn
            pageNumber={Math.ceil(500 / size)}
            handlePageChange={handlePageChange}
            page={page}
          />
        )}

        <li>
          <button
            className="flex items-center justify-center h-full p-2 leading-tight  bg-[#E1E1E1] rounded-md border border-gray-300 hover:bg-[#F1F1F1] hover:text-gray-700 disabled:bg-[#E1E1E1] disabled:text-gray-500 disabled:cursor-not-allowed"
            onClick={() => handlePageChange(page + 1)}
            disabled={page === Math.ceil(data.length / size)}
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
{
  /* <li key={pageNumber}>
  <a
    href="#"
    className={`flex items-center rounded-md h-full justify-center text-sm p-2 px-3.5 leading-tight  bg-[#E1E1E1] border border-gray-300 hover:bg-[#F1F1F1] hover:text-gray-700 font-medium ${
      pageNumber === page ? "bg-primary text-white" : ""
    }`}
    onClick={() => handlePageChange(pageNumber)}
  >
    {pageNumber}
  </a>
</li>; */
}
