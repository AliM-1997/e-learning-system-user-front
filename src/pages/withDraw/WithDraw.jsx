import React from "react";
import CourseCard from "../../components/courseCard/CourseCard";
import { courseRemote } from "../../data_source/remote/courses";
import { useDispatch, useSelector } from "react-redux";
import { withdrawCourse } from "../../redux/courses";

const WithDraw = () => {
  const state = useSelector((global) => global);
  const enrolledCourses = state.course.enrolledCourses;
  const dispatch = useDispatch();
  const handelWithdraw = async (course) => {
    const classId = course._id;
    const userId = state.user.id;
    const reason = "personal";
    const data = await courseRemote.applyWithdrawal(classId, userId, reason);
    console.log(data);
    dispatch(withdrawCourse(course));
  };
  return (
    <div>
      <h3> My classes</h3>
      <div className=" flex wrap gap center">
        {enrolledCourses.map((course) => (
          <CourseCard
            key={course._id}
            classItem={course}
            text="withdraw"
            onSubmit={() => handelWithdraw(course)}
          />
        ))}
      </div>
    </div>
  );
};

export default WithDraw;
