import { useAppSelector } from "@/hooks/redux";
import { useGetTypesQuery } from "@/services/api";
import SimilarPokemonCard from "./SimilarPokemonCard";

const Similar = () => {
  const { pokemon } = useAppSelector((state) => state.pokemons);

  const { isFetching } = useGetTypesQuery(pokemon.types[0].type.name, {
    refetchOnMountOrArgChange: true,
  });

  console.log("pokemon", pokemon);

  return (
    <div className="bg-gradient-to-r from-[#FFFFFF] via-[#D9D9D980] to-[#FFFFFF] px-4">
      <div className=" py-2">
        <h3 className="text-xl font-bold text-center bg-white py-2  ">
          Similar
        </h3>
        <div className="flex gap-3  justify-center items-center mt-10">
          {isFetching
            ? "loading ..."
            : pokemon?.similarPokemons?.map((pokemon) => (
                <SimilarPokemonCard key={pokemon.name} {...pokemon} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Similar;
