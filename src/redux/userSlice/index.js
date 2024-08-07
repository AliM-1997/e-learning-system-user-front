import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: "",
  id: "",
};
const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    loadUser: (state, action) => {
      const { username, id } = action.payload;

      state.username = username;
      state.id = id;
    },
    clearUser: (state) => {
      return initialState;
    },
  },
});

export const { clearUser, loadUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
