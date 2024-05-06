import pokemon from "@/assets/logo.svg";
import EyeIcon from "./shared/EyeIcon";
import { useState } from "react";
import PokemonDetailsModal from "./PokemonDetails/PokemonDetailsModal";

const types = [
  {
    type: "Fire",
    icon: "🔥",
  },
  {
    type: "Flying",
    icon: "🦋",
  },
];
const PokemonCard = () => {
  const [showPokemonDetails, setShowPokemonDetails] = useState(false);

  return (
    <>
      <PokemonDetailsModal
        isOpen={showPokemonDetails}
        setIsOpen={() => setShowPokemonDetails(false)}
      />

      <div className="sm:h-[250px] hover:z-10 ">
        <div className="hover:scale-110 transition duration-300 ease-in rounded-xl p-2 flex flex-col gap-3 shadow-sm items-center bg-white group/item h-fit  ">
          {/* media */}
          <div className="bg-[#F1F1F1] rounded-xl p-3 pt-0 ">
            <img src={pokemon} alt="" className="-mt-10 " />
          </div>
          {/* name */}
          <p className="font-bold">Charizard</p>
          {/* type */}
          <div className="flex gap-2 mb-4">
            {types.map((item) => (
              <div className="bg-[#EEEEEE] flex gap-2 px-3 rounded-full text-sm">
                {item.icon} {item.type}
              </div>
            ))}
          </div>

          <button
            className="w-full flex sm:hidden justify-between items-center bg-primary text-white px-3 py-2 rounded-xl  group-hover/item:flex"
            onClick={() => setShowPokemonDetails(true)}
          >
            <p className="">View Pokemon</p>
            <EyeIcon />
          </button>
        </div>
      </div>
    </>
  );
};

export default PokemonCard;
