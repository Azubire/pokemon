import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "apiReducer",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_BASE_URL,
  }),
  endpoints: (builder) => ({
    getPokemons: builder.query({
      query: () => "pokemon?limit=50",

      onQueryStarted: async (_args, { dispatch, queryFulfilled }) => {
        const { data } = await queryFulfilled;

        console.log("pokemons", data);
        // if (data.success && data.data) {
        //   dispatch(setPokemons(data.data));

        // }
      },
    }),
    getPokemon: builder.query({ query: (name) => `pokemon/${name}` }),
    getTypes: builder.query({ query: () => "type" }),
    getAbilities: builder.query({ query: () => "ability" }),
    getStats: builder.query({ query: () => "stat" }),
  }),
});

export const { useGetPokemonsQuery } = api;
