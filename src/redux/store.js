import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./userSlice";
import { coursesReducer } from "./courses";

const store = configureStore({
  reducer: {
    user: userReducer,
    course: coursesReducer,
  },
});

export default store;
