import EyeIcon from "./shared/EyeIcon";
import { IPokemon } from "@/types/pokemon";
import { useGetPokemonQuery } from "@/services/api";
import ImgPlaceholder from "./shared/ImgPlaceholder";
import { typeIcons } from "@/utils";
import { useAppDispatch } from "@/hooks/redux";
import { setPokemon } from "@/store/features/pokemonSlice";

const PokemonCard = ({
  pokemon: { name },
  setShowPokemonDetails,
}: {
  pokemon: IPokemon;
  setShowPokemonDetails: (value: boolean) => void;
}) => {
  const { data: pokemon, isFetching } = useGetPokemonQuery(name);

  const dispatch = useAppDispatch();

  const handleViewPokemonDetails = () => {
    dispatch(setPokemon(pokemon as IPokemon));

    setShowPokemonDetails(true);
  };

  return (
    <div>
      <div className="sm:h-[250px] hover:z-10 ">
        <div className="hover:scale-105 transition duration-300 ease-in rounded-xl p-2 flex flex-col gap-3 shadow-sm items-center bg-white group/item h-fit  ">
          {/* media */}
          <div className="bg-[#F1F1F1] rounded-xl p-3 pt-0 w-full h-28">
            {isFetching ? (
              <ImgPlaceholder />
            ) : (
              <img
                src={pokemon?.sprites?.other?.dream_world?.front_default}
                alt={name}
                className="-mt-10 w-32 h-32 mx-auto object-contain "
              />
            )}
          </div>
          {/* name */}
          <p className="font-bold">{name}</p>
          {/* type */}
          <div className="flex gap-2 mb-4">
            {pokemon?.types?.map((type) => (
              <div
                key={type.type.url}
                className="bg-[#EEEEEE] flex gap-2 px-3 rounded-full text-sm"
              >
                <span>{typeIcons[type.type.name]}</span>
                <span>{type.type.name}</span>
              </div>
            ))}
          </div>

          <button
            className="w-full flex sm:hidden justify-between items-center bg-primary text-white px-3 py-2 rounded-xl  group-hover/item:flex"
            onClick={handleViewPokemonDetails}
          >
            <p className="">View Pokemon</p>
            <EyeIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
