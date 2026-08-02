import { createSlice } from '@reduxjs/toolkit';

type UiState = {
  navOpen: boolean;
};

const initialState: UiState = {
  navOpen: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleNav(state) {
      state.navOpen = !state.navOpen;
    },
    closeNav(state) {
      state.navOpen = false;
    },
  },
});

export const { toggleNav, closeNav } = uiSlice.actions;
export default uiSlice.reducer;
