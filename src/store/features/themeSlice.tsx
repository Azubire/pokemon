import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit/react";

export interface IInitialState {
  theme: "pink-theme" | "blue-theme" | "yellow-theme";
}

const initialState: IInitialState = {
  theme: "pink-theme",
};
initialState;

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme: (
      state,
      action: PayloadAction<"pink-theme" | "blue-theme" | "yellow-theme">
    ) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;

export default themeSlice.reducer;
