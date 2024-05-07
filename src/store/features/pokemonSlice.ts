import { IPokemon } from "@/types/pokemon";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IInitialState {
  size: number;
  page: number;
  data: IPokemon[];
  pokemon: IPokemon;
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
  },
});

export const getPaginatedPokemons = (state: IInitialState) => {
  const start = (state.page - 1) * state.size;
  const end = start + state.size;

  return state.data.slice(start, end);
};
export const { setPokemons, setPage, setSize, setPokemon } =
  pokemonSlice.actions;

export default pokemonSlice.reducer;
