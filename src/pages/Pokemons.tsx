import Topbar from "@/components/Topbar";
import bg from "@/assets/bg.png";

const Pokemons = () => {
  return (
    <main
      className=" min-h-screen"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.95), rgba(255, 255, 255, 0.95)), url(${bg})`,
      }}
    >
      {/* nav */}
      <Topbar />
      {/* pokemons */}
      {/* paginator  */}
    </main>
  );
};

export default Pokemons;
