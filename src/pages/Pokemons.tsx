import Topbar from "@/components/Topbar";
import bg from "@/assets/bg.png";
import PokemonCard from "@/components/PokemonCard";
import Pagination from "@/components/shared/Pagination";
import { useGetPokemonsQuery } from "@/services/api";
import { useAppSelector } from "@/hooks/redux";
import { getPaginatedPokemons } from "@/store/features/pokemonSlice";
import { useSearchParams } from "react-router-dom";
import { useState } from "react";
import PokemonDetailsModal from "@/components/PokemonDetails/PokemonDetailsModal";

const Pokemons = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showPokemonDetails, setShowPokemonDetails] = useState(false);

  const search = searchParams.get("search") || undefined;

  const { isFetching } = useGetPokemonsQuery(search, {
    refetchOnMountOrArgChange: true,
  });

  const paginatedResults = useAppSelector(getPaginatedPokemons);

  const handleClearSearch = () => {
    searchParams.delete("search");
    setSearchParams({}, { replace: true });
  };

  return (
    <main
      className="min-h-screen pb-36 "
      style={{
        backgroundImage: `linear-gradient(rgba(246, 246, 246, 0.95), rgba(246, 246, 246, 0.95)), url(${bg})`,
      }}
    >
      <PokemonDetailsModal
        isOpen={showPokemonDetails}
        setIsOpen={() => setShowPokemonDetails(false)}
      />
      {/* nav */}
      <Topbar />
      <div className="lg:w-3/4 mx-auto p-4 my-20">
        {isFetching ? (
          <div className="flex justify-center lg:h-[50vh]">
            <h1 className="text-xl text-center">
              Loading<span className="animate-pulse">...</span>
            </h1>
          </div>
        ) : paginatedResults.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-16 sm:gap-y-4">
            {paginatedResults?.map((pokemon) => (
              <PokemonCard
                key={pokemon.name}
                pokemon={pokemon}
                setShowPokemonDetails={setShowPokemonDetails}
              />
            ))}
          </div>
        ) : (
          <div className="flex justify-center h-[50vh]">
            <h1 className="text-xl text-center">No results found</h1>
          </div>
        )}

        <div>
          {paginatedResults && !search && !isFetching && <Pagination />}
          {search && !isFetching && (
            <div className="text-center">
              <button
                className=" font-semibold hover: mt-3 bg-primary text-white px-3 py-2 rounded-xl"
                onClick={handleClearSearch}
              >
                Clear search
              </button>
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Pokemons;
