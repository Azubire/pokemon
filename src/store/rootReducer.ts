import { api } from "@/services/api";
import { combineReducers } from "@reduxjs/toolkit";
import pokemonReducer from "./features/pokemonSlice";
import themeReducer from "./features/themeSlice";

// init root reducer with rtk query api and reducers
export const rootReducer = combineReducers({
  [api.reducerPath]: api.reducer,
  pokemons: pokemonReducer,
  theme: themeReducer,
});
