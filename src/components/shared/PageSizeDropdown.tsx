import { useState } from "react";

const values = [8, 16, 32, 64];

const PageSizeDropdown = ({
  value,
  onChange,
}: {
  value: number;
  onChange: (value: number) => void;
}) => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div
      className="relative bg-[#E1E1E1]  rounded-lg px-2 p-2 cursor-pointer"
      onClick={() => setShowDropdown(!showDropdown)}
    >
      <div className="flex justify-between items-center  gap-5">
        <span className="w-10 h-8  bg-white  font-medium rounded-lg text-sm  text-center inline-flex items-center justify-center">
          {value}
        </span>
        <span>
          <svg
            className="w-3 h-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </span>
      </div>

      <div
        id="dropdown"
        className={`${
          showDropdown ? "block" : "hidden"
        } absolute w-full top-full z-10 bg-white divide-y divide-gray-100 rounded-lg shadow `}
      >
        <ul className="py-2 text-sm  " aria-labelledby="dropdownDefaultButton">
          {values.map((item) => (
            <li key={item}>
              <span
                onClick={() => onChange(item)}
                className="block px-4 py-2 hover:bg-gray-100 "
              >
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PageSizeDropdown;
