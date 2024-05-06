import { useState } from "react";
import NextIcon from "./NextIcon";
import PrevIcon from "./PrevIcon";
import PageSizeDropdown from "./PageSizeDropdown";

const Pagination = () => {
  const [filter, setFilter] = useState({
    limit: 8,
    page: 1,
  });
  return (
    <nav
      className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-3 md:space-y-0 p-4"
      aria-label="navigation"
    >
      <ul className="inline-flex items-stretch gap-2">
        <li>
          <a
            href="#"
            className="flex items-center justify-center h-full p-2  bg-[#E1E1E1] rounded-md border border-gray-300 hover:bg-[#F1F1F1] hover:text-gray-700 "
          >
            <span className="sr-only">Previous</span>
            <PrevIcon />
          </a>
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
          <a
            href="#"
            className="flex items-center justify-center h-full p-2 leading-tight  bg-[#E1E1E1] rounded-md border border-gray-300 hover:bg-[#F1F1F1] hover:text-gray-700 "
          >
            <span className="sr-only">Next</span>
            <NextIcon />
          </a>
        </li>
      </ul>

      <PageSizeDropdown
        value={filter.limit}
        onChange={(value) => setFilter({ ...filter, limit: value })}
      />
    </nav>
  );
};

export default Pagination;
