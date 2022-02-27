import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Poster } from "../../models/Poster";
import { RootState } from "../store";

interface PostersState {
  posters: Poster[];
  isLoading: boolean;
  error: boolean;
}

const initialState: PostersState = {
  posters: [],
  isLoading: false,
  error: false,
};

export const postersSlice = createSlice({
  name: "posters",
  initialState,
  reducers: {
    setPosters: (state, { payload }: PayloadAction<Poster[]>) => {
      state.posters = payload;
    },
    setIsLoading: (state, { payload }: PayloadAction<boolean>) => {
      state.isLoading = payload;
    },
    setError: (state, { payload }: PayloadAction<boolean>) => {
      state.error = payload;
    },
  },
});

// export const { setPosters, setIsLoading, setError } = postersSlice.actions;
export const fetchAllPosters = (state: RootState) => state.posters;
export default postersSlice.reducer;
