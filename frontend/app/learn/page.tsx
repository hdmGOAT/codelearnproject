import React from "react";

const LearnPage = () => {
  return (
    <div className="app-wrapper flex min-h-screen p-4 flex-col space-y-4">
      <div className="flex flex-col items-start w-full">
        <h1 className="text-3xl">Recommended Courses</h1>
        <p>Courses that we believe would best suit you!</p>
      </div>
      <div className="flex flex-col items-start w-full">
        <h1 className="text-3xl">Explore</h1>
        <p>Learn something new</p>
      </div>
      <div className="flex flex-col items-start w-full">
        <h1 className="text-3xl">From your mentors</h1>
        <p>New courses from those you follow</p>
      </div>
    </div>
  );
};

export default LearnPage;
