import React from "react";
import { Navbar } from "@/shared/Navbar";
import { FilterCard } from "./FilterCard";
import { Job } from "./Job";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const Jobs = () => {
  const jobsArray = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Google",
      logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      location: "Bangalore, India",
      description:
        "Join our team to work on cutting-edge UI technologies and high-impact products that reach millions of users daily.",
      type: "Full Time",
      salary: "12 LPA",
      mode: "Remote",
      postedAt: "2025-08-08",
    },
    {
      id: 2,
      title: "Backend Engineer",
      company: "Amazon",
      logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      location: "Hyderabad, India",
      description:
        "We are looking for a backend engineer with experience in scalable microservices and cloud-native solutions.",
      type: "Full Time",
      salary: "18 LPA",
      mode: "Hybrid",
      postedAt: "2025-08-09",
    },
    {
      id: 3,
      title: "Data Analyst",
      company: "Microsoft",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      location: "Noida, India",
      description:
        "Analyze complex datasets to derive actionable insights for strategic business decisions.",
      type: "Internship",
      salary: "8 LPA",
      mode: "On-site",
      postedAt: "2025-08-10",
    },
  ];

  const navigate = useNavigate();
  const { allJobs } = useSelector(store=>store.job);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* NAVBAR */}
      <Navbar />

      <div className="max-w-7xl mx-auto mt-6 px-4">
        <div className="flex gap-6">
          {/* FILTERS */}
          <div className="w-[22%]">
            <FilterCard />
          </div>

          {/* JOB LISTINGS */}
          <div className="flex-1 h-[88vh] overflow-y-auto pb-6">
            {allJobs.length <= 0 ? (
              <div className="flex justify-center items-center h-full text-gray-500">
                No jobs found
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {allJobs.map((job) => (
                  <Link key={job?._id} to = {`/description/${job?._id}`} className="block"><Job job={job} onApply={()=>navigate(`/description/${job?._id}`)} /></Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
