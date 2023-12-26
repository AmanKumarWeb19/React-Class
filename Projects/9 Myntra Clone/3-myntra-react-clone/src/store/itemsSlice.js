import { createSlice } from "@reduxjs/toolkit";
import { DEFAULTS_ITEMS } from "../data/items";

const itemSlice = createSlice({
  name: "items",
  initialState: DEFAULTS_ITEMS,
  reducers: {
    addInitialItems: (stroe, action) => {
      return stroe;
    },
  },
});

export const itemsAction = itemSlice.actions;

export default itemSlice;
