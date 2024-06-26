import { useAppSelector } from "@/hooks/redux";
import ArrowBack from "../shared/ArrowBack";
import { useLayoutEffect, useState } from "react";
import { getImageURL, getLightAndDarkColors } from "@/utils";
import { IPokemon } from "@/types/pokemon";

type TColor = { light: string; dark: string };
const Cover = ({ onClose }: { onClose: () => void }) => {
  const { pokemon } = useAppSelector((state) => state.pokemons);
  const [colors, setcolors] = useState<TColor>({} as TColor);

  useLayoutEffect(() => {
    getLightAndDarkColors(getImageURL(pokemon as IPokemon)).then((color) => {
      setcolors(color);
    });
  }, [pokemon]);

  return (
    <div
      className={`border flex items-center p-2 rounded-lg h-40`}
      style={{
        backgroundImage: `linear-gradient(${colors.light}, ${colors.dark})`,
      }}
    >
      <button
        className="self-start  rounded p-[6px] bg-white hover:scale-105 duration-200 ease-in"
        onClick={onClose}
      >
        <ArrowBack />
      </button>
      <img
        src={getImageURL(pokemon as IPokemon)}
        alt={pokemon?.name}
        className="-mb-16 w-36 mx-auto object-contain "
      />
    </div>
  );
};

export default Cover;
