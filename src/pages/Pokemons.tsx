import Topbar from "@/components/Topbar";
import bg from "@/assets/bg.png";
import PokemonCard from "@/components/PokemonCard";
import Pagination from "@/components/shared/Pagination";

const Pokemons = () => {
  return (
    <main
      className="min-h-screen pb-36 "
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url(${bg})`,
      }}
    >
      {/* nav */}
      <Topbar />
      <div className="sm:w-3/4 mx-auto p-4">
        {/* pokemons */}
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4  my-20 gap-y-16 sm:gap-y-4">
          {[1, 2, 3, 4, 4, 5, 3, 4].map(() => (
            <PokemonCard />
          ))}
        </div>
        {/* paginator  */}

        <Pagination />
      </div>
    </main>
  );
};

export default Pokemons;
