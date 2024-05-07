import Topbar from "@/components/Topbar";
import bg from "@/assets/bg.png";
import PokemonCard from "@/components/PokemonCard";
import Pagination from "@/components/shared/Pagination";
import { useGetPokemonsQuery } from "@/services/api";
import { useAppSelector } from "@/hooks/redux";
import { getPaginatedPokemons } from "@/store/features/pokemonSlice";

const Pokemons = () => {
  const { isLoading } = useGetPokemonsQuery(undefined, {
    refetchOnMountOrArgChange: true,
  });

  const paginatedResults = useAppSelector(getPaginatedPokemons);

  return (
    <main
      className="min-h-screen pb-36 "
      style={{
        backgroundImage: `linear-gradient(rgba(246, 246, 246, 0.95), rgba(246, 246, 246, 0.95)), url(${bg})`,
      }}
    >
      {/* nav */}
      <Topbar />
      <div className="sm:w-3/4 mx-auto p-4 my-20">
        {isLoading ? (
          <h1 className="text-xl text-center">
            Loading<span className="animate-pulse">...</span>
          </h1>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 gap-y-16 sm:gap-y-4">
            {paginatedResults?.map((pokemon) => (
              <PokemonCard key={pokemon.name} {...pokemon} />
            ))}
          </div>
        )}

        <div>{paginatedResults && <Pagination />}</div>
      </div>
    </main>
  );
};

export default Pokemons;
