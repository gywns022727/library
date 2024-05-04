import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ExpansionSideBar {
  sideBar: boolean;
}

const initialState: ExpansionSideBar = {
  sideBar: true,
};

const sideBarSlice = createSlice({
  name: "sideBar",
  initialState,
  reducers: {
    SET_EXPANSION: (state, actions: PayloadAction<boolean>) => {
      state.sideBar = actions.payload;
    },
  },
});

export const { SET_EXPANSION } = sideBarSlice.actions;
export default sideBarSlice.reducer;
