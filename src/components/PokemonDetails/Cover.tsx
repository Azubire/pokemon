import pokemon from "@/assets/logo.svg";
import ArrowBack from "../shared/ArrowBack";

const Cover = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="border flex items-center bg-gradient-to-b from-[#7FCAD1] to-[#3DA0A9] p-2 rounded-lg">
      <button
        className="self-start  rounded p-[6px] bg-white hover:scale-105 duration-200 ease-in"
        onClick={onClose}
      >
        <ArrowBack />
      </button>
      <img src={pokemon} alt="" className="w-64 -mb-10 mt-10  mx-auto" />
    </div>
  );
};

export default Cover;
