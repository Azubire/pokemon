import { IPokemon } from "@/types/pokemon";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IInitialState {
  data: IPokemon[];
}

const initialState: IInitialState = {
  data: [],
};
initialState;

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {
    setPokemons: (state, action: PayloadAction<IPokemon[]>) => {
      state.data = action.payload;
    },
  },
});

export const { setPokemons } = pokemonSlice.actions;

export default pokemonSlice.reducer;
