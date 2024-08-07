import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  courses: [],
  enrolledCourses: [],
  withdrawalCourse: [],
};

const coursesSlice = createSlice({
  name: "courses",
  initialState,
  reducers: {
    loadCourses: (state, action) => {
      state.courses = action.payload;
    },
    enrollCourse: (state, action) => {
      state.enrolledCourses.push(action.payload);
    },
    withdrawCourse: (state, action) => {
      state.withdrawalCourse.push(action.payload);
    },
  },
});

export const { loadCourses, enrollCourse, withdrawCourse } =
  coursesSlice.actions;
export const coursesReducer = coursesSlice.reducer;
