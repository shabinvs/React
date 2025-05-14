import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  addData: [],
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    addData: (state, action) => {
      const item = state.addData.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.addData.push({ ...action.payload, quantity: 1 });
      }
    },
  },
});

export const { increment, decrement, addData } = counterSlice.actions;
export default counterSlice.reducer;
