import { configureStore } from "@reduxjs/toolkit";
import posterReducer from "./posters/posterSlice";

export const store = configureStore({
  reducer: {
    posters: posterReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
