const PaginationBtn = ({
  pageNumber,
  handlePageChange,
  page,
}: {
  pageNumber: number;
  handlePageChange: (page: number) => void;
  page: number;
}) => {
  return (
    <li>
      <button
        className={`flex items-center rounded-md h-full justify-center text-sm p-2 px-3.5 leading-tight  bg-[#E1E1E1] border border-gray-300 hover:bg-[#F1F1F1] hover:text-gray-700 font-medium ${
          pageNumber === page ? "bg-primary text-white" : ""
        }`}
        onClick={() => handlePageChange(pageNumber)}
      >
        {pageNumber}
      </button>
    </li>
  );
};

export default PaginationBtn;
