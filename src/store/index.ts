import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";
import { api } from "@/services/api";
import { setupListeners } from "@reduxjs/toolkit/query";

//init store
export const store = configureStore({
  reducer: rootReducer,
  devTools: import.meta.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

// extended root state type
export type TRootState = ReturnType<typeof store.getState>;

// extended dispatch type
export type TAppDispatch = typeof store.dispatch;

// setup listeners for browser focus and rehydration
setupListeners(store.dispatch);
