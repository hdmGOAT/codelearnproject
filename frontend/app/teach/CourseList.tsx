import React from "react";
import Course from "./Course";

const CourseList = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <Course />
      <Course />
      <Course />
      <Course />
    </div>
  );
};
export default CourseList;
