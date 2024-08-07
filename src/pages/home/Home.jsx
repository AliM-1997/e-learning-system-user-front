import React, { useEffect, useState } from "react";
import { courseRemote } from "../../data_source/remote/courses";
import CourseCard from "../../components/courseCard/CourseCard";
import "./Home.css";
import { useDispatch, useSelector } from "react-redux";
import { enrollCourse, loadCourses } from "../../redux/courses";

const Home = () => {
  const state = useSelector((global) => global);
  const [classes, setClasses] = useState([]);
  const dispatch = useDispatch();

  const fetchClasses = async () => {
    const data = await courseRemote.getAllCourses();
    setClasses(data);
    dispatch(loadCourses(data));
  };
  useEffect(() => {
    fetchClasses();
  }, []);

  const handelenroll = async (classItem) => {
    const classId = classItem._id;
    const UserId = state.user.id;
    await courseRemote.enrollClass(UserId, classId);
    dispatch(enrollCourse(classItem));
  };

  return (
    <div className="flex column center gap">
      <h3>All Courses</h3>
      <div className=" flex wrap gap center">
        {classes.map((classItem) => (
          <CourseCard
            key={classItem._id}
            classItem={classItem}
            text="submit"
            onSubmit={() => handelenroll(classItem)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
