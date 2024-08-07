import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./userSlice";
import enrollementSlice from "./enrollementSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export default store;
