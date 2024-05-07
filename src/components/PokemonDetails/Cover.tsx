import { useAppSelector } from "@/hooks/redux";
import ArrowBack from "../shared/ArrowBack";

const Cover = ({ onClose }: { onClose: () => void }) => {
  const { pokemon } = useAppSelector((state) => state.pokemons);

  return (
    <div className="border flex items-center bg-gradient-to-b from-[#7FCAD1] to-[#3DA0A9] p-2 rounded-lg h-40">
      <button
        className="self-start  rounded p-[6px] bg-white hover:scale-105 duration-200 ease-in"
        onClick={onClose}
      >
        <ArrowBack />
      </button>
      <img
        src={pokemon?.sprites?.other?.dream_world?.front_default}
        alt={pokemon?.name}
        className="-mb-16 w-36 mx-auto object-contain "
      />
    </div>
  );
};

export default Cover;
