import Topbar from "@/components/Topbar";
import bg from "@/assets/bg.png";
import PokemonCard from "@/components/PokemonCard";

const Pokemons = () => {
  return (
    <main
      className="h-screen bg-[#F6F6F6]"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url(${bg})`,
      }}
    >
      {/* nav */}
      <Topbar />
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 sm:w-3/4 mx-auto p-4 my-10 gap-y-16 sm:gap-y-4">
        {[1, 2, 3, 4, 4, 5, 3, 4].map(() => (
          <PokemonCard />
        ))}
      </div>
      {/* pokemons */}
      {/* paginator  */}
    </main>
  );
};

export default Pokemons;
