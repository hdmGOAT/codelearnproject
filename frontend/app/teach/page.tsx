import React from "react";
import CourseList from "./CourseList";

const TeachPage = () => {
  return (
    <div className="flex flex-col">
      <div className="flex m-3 p-2 border-2 rounded-xl flex-col">
        <h1 className="text-2xl font-semibold">My Courses</h1>
        <CourseList />
      </div>
      <div className="flex m-3 p-2 border-2 rounded-xl flex-col">
        <h1 className="text-2xl font-semibold">New Reviews</h1>
        <p className="text-lg">Words from your community</p>
      </div>
    </div>
  );
};

export default TeachPage;
