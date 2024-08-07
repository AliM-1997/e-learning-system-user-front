import React from "react";
import CourseCard from "../../components/courseCard/CourseCard";
import { useSelector } from "react-redux";

const Requests = () => {
  const state = useSelector((global) => global.course);
  console.log(state);
  const appliedWithdraw = state.withdrawalCourse;
  return (
    <div>
      <h3>pending</h3>
      <div className="flex wrap gap center">
        {appliedWithdraw.map((course) => (
          <CourseCard
            key={course._id}
            classItem={course}
            text="pending"
            color="yellow"
          />
        ))}
      </div>
    </div>
  );
};

export default Requests;
