import { useGetPokemonQuery } from "@/services/api";
import ImgPlaceholder from "../shared/ImgPlaceholder";
import { IPokemon } from "@/types/pokemon";
import { getImageURL } from "@/utils";

const SimilarPokemonCard = ({ name }: { name: string }) => {
  const { data: pokemon, isFetching } = useGetPokemonQuery(name);

  return (
    <div className="hover:scale-105 transition duration-300 ease-in rounded-xl p-2 flex flex-col gap-3 border items-center bg-white group/item h-fit  ">
      {/* media */}
      <div className="bg-[#F1F1F1] rounded-xl p-5 pt-0 ">
        {isFetching ? (
          <ImgPlaceholder />
        ) : (
          <img
            src={getImageURL(pokemon as IPokemon)}
            alt={name}
            className="-mt-10 w-32 h-32 object-contain "
          />
        )}
      </div>
      {/* name */}
      <p className="font-bold">{pokemon?.name}</p>
    </div>
  );
};

export default SimilarPokemonCard;
