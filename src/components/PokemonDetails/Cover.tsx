import pokemon from "@/assets/logo.svg";
import ArrowBack from "../shared/ArrowBack";

const Cover = () => {
  return (
    <div className="border flex justify-center items-center bg-gradient-to-b from-[#7FCAD1] to-[#3DA0A9] p-3 rounded-lg">
      <button className="absolute top-5 left-5 rounded p-[6px] bg-white hover:scale-105 duration-200 ease-in">
        <ArrowBack />
      </button>
      <img src={pokemon} alt="" className="w-64 -mb-10 mt-10" />
    </div>
  );
};

export default Cover;
