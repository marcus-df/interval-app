import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AppState {
  isLoading: Boolean;
  paused: Boolean;
  menuOpen: Boolean;
}

const initialState: AppState = {
  isLoading: true,
  paused: false,
  menuOpen: false,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLoading: (state: AppState, action: PayloadAction<boolean>) => {
      //Set isLoading to the new state
      state.isLoading = action.payload;
    },
    setPaused: (state: AppState, action: PayloadAction<boolean>) => {
      //Set paused to the new state
      state.paused = action.payload;
    },
    setMenuOpen: (state: AppState, action: PayloadAction<boolean>) => {
      //Set menu to the new state
      state.menuOpen = action.payload;
    },
  },
});

//Action creators are generated for each case reducer function - Pretty Neat!
export const { setLoading, setPaused, setMenuOpen } = appSlice.actions;

export default appSlice.reducer;
