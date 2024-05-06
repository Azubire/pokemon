import Logo from "@/components/Logo";
import bg from "@/assets/bg.png";
import { Link } from "react-router-dom";
import HomeSearchBar from "@/components/home/HomeSearchBar";

const Home = () => {
  return (
    <main
      className="h-screen flex justify-center items-center flex-col"
      style={{
        backgroundImage: `linear-gradient(rgba(246, 246, 246, 0.95), rgba(246, 246, 246, 0.95)), url(${bg})`,
      }}
    >
      <section className=" flex flex-col justify-center items-center gap-3 px-4">
        <Logo className="w-[300px]" />
        <h4 className="text-4xl font-bold">
          Poké <span className="text-primary">book</span>
        </h4>
        <p className="sm:w-2/3 text-center">
          Largest Pokémon index with information about every Pokemon you can
          think of.
        </p>

        <div className="mt-10 w-full sm:w-2/3 mx-auto">
          <HomeSearchBar />
        </div>

        <Link to="/pokemons" className="underline font-semibold hover: mt-3">
          View all
        </Link>
      </section>
    </main>
  );
};

export default Home;
