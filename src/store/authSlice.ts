import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    updateAuth: (state, action: PayloadAction<typeof initialState>) => {
      state = action.payload;
    },
    resetAuth: () => {
      return initialState;
    },
  },
});
export const { updateAuth, resetAuth } = authSlice.actions;

export const authReducer = authSlice.reducer;
