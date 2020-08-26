import { createSlice } from "@reduxjs/toolkit";

type ToggleState = {
  divSelected: boolean;
};

const initialState: ToggleState = {
  divSelected: false,
};

export const toggleSlice = createSlice({
  name: "toggler",
  initialState,
  reducers: {
    toggleDiv(state) {
      state.divSelected = !state.divSelected;
    },
  },
});

export const { toggleDiv } = toggleSlice.actions;

export default toggleSlice.reducer;
