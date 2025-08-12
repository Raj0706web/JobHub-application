import React from "react";
import { LatestJobCards } from "./LatestJobCards";

const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const LatestJobs = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 my-20">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          <span className="text-[#F83002]">Latest & Top </span>
          Job Openings
        </h1>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Explore exciting opportunities from top companies and find the role that matches your skills and ambitions.
        </p>
      </div>

      {/* Job Grid */}
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {randomJobs.slice(0, 6).map((item, index) => (
          <LatestJobCards key={index} />
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-10">
        <button className="px-6 py-3 bg-[#F83002] text-white rounded-full hover:bg-[#d62802] transition">
          View All Jobs
        </button>
      </div>
    </section>
  );
};
