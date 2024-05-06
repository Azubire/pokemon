const similarPokemon = [
  {
    id: 1,
    name: "pikachu",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    id: 2,
    name: "pikachu",
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
];

const Similar = () => {
  return (
    <div className="bg-gradient-to-r from-[#FFFFFF] via-[#D9D9D980] to-[#FFFFFF] px-4">
      <div className=" py-2">
        <h3 className="text-xl font-bold text-center bg-white py-2  ">
          Similar
        </h3>
        <div className="flex gap-3  justify-center items-center mt-10">
          {similarPokemon.map((pokemon) => (
            <div className="hover:scale-110 transition duration-300 ease-in rounded-xl p-2 flex flex-col gap-3 border items-center bg-white group/item h-fit  ">
              {/* media */}
              <div className="bg-[#F1F1F1] rounded-xl p-5 pt-0 ">
                <img src={pokemon.img} alt="" className="-mt-10 " />
              </div>
              {/* name */}
              <p className="font-bold">{pokemon.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Similar;
