import { IPokemon } from "@/types/pokemon";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TRootState } from "..";

export interface IInitialState {
  size: number;
  page: number;
  data: IPokemon[];
  pokemon: IPokemon & {
    similarPokemons?: IPokemon[];
  };
}

const initialState: IInitialState = {
  size: 8,
  page: 1,
  data: [],
  pokemon: {} as IPokemon,
};
initialState;

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemons: (state, action: PayloadAction<IPokemon[]>) => {
      state.data = action.payload;
    },

    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },

    setSize: (state, action: PayloadAction<number>) => {
      state.size = action.payload;
    },

    setPokemon: (state, action: PayloadAction<IPokemon>) => {
      state.pokemon = action.payload;
    },

    setSimilarPokemons: (state, action: PayloadAction<IPokemon[]>) => {
      state.pokemon.similarPokemons = action.payload;
    },
  },
});

// get paginated pokemons from state
export const getPaginatedPokemons = (state: TRootState) => {
  const start = (state.pokemons.page - 1) * state.pokemons.size;
  const end = start + state.pokemons.size;

  return state.pokemons.data.slice(start, end);
};

export const { setPokemons, setPage, setSize, setPokemon, setSimilarPokemons } =
  pokemonSlice.actions;

export default pokemonSlice.reducer;
