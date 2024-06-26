import { TRootState } from "@/store";
import { setPokemons, setSimilarPokemons } from "@/store/features/pokemonSlice";
import { IPokemon, IPokemonType } from "@/types/pokemon";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

//  init api with base url
export const api = createApi({
  reducerPath: "apiReducer",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
  }),
  endpoints: (builder) => ({
    // get searched pokemon or 500 pokemons
    getPokemons: builder.query<{ results: IPokemon[] }, string | undefined>({
      query: (search) => (search ? `pokemon/${search}` : "pokemon?limit=500"),

      // set pokemons to the store when query is finished
      onQueryStarted: async (_args, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          // set pokemons to store from query results
          if (data && data.results) {
            // set list of pokemons to store
            dispatch(setPokemons(data.results));
          } else {
            // set searched pokemon to the store
            dispatch(setPokemons([data as unknown as IPokemon]));
          }
        } catch (error) {
          // if the query fails, set pokemons to an empty array to prevent false results
          dispatch(setPokemons([]));
        }
      },
    }),
    // get pokemon by name
    getPokemon: builder.query<IPokemon, string>({
      query: (name) => `pokemon/${name}`,
    }),

    // get similar pokemon using type property
    getTypes: builder.query<IPokemonType, string>({
      query: (name) => `type/${name}`,
      onQueryStarted: async (_args, { dispatch, queryFulfilled, getState }) => {
        const { data } = await queryFulfilled;

        // get the current pokemon and filter it out of the results
        const state = getState() as TRootState;
        const currentPokemon = state.pokemons.pokemon;

        // filter & transform pokemon data from type results
        if (data) {
          dispatch(
            setSimilarPokemons(
              data.pokemon
                ?.filter((p) => p.pokemon.name !== currentPokemon.name)
                .slice(0, 2)
                ?.map((p) => p.pokemon)
            )
          );
        }
      },
    }),
  }),
});

export const { useGetPokemonsQuery, useGetPokemonQuery, useGetTypesQuery } =
  api;
