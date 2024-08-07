import React from "react";
import "./CourseCard.css";
import Button from "../button/Button";

const CourseCard = ({ classItem, text, onSubmit, color = "primary-bg" }) => {
  const handleSubmit = () => {
    onSubmit(classItem);
  };
  return (
    <div className="card gap">
      <div className="card-details gap">
        <p className="text-title ">
          <span>Title:</span> {classItem.title}
        </p>
        <p className="text-body">
          <span>Description:</span> {classItem.description}
        </p>
        <p className="text-body">
          <span>Instructor:</span> {classItem.instructor}
        </p>
        <Button text={text} onMouseClick={handleSubmit} bgColor={color} />
      </div>
    </div>
  );
};

export default CourseCard;
