import React from "react";
<<<<<<< HEAD
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Navbar } from "@/shared/Navbar";

export const Jobs = () => {
=======
import { Navbar } from "@/shared/Navbar";
import { FilterCard } from "./FilterCard";
import { Job } from "./Job";
import { Link, useNavigate } from "react-router-dom";

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

>>>>>>> 8da8c88 (16/08/25)
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* NAVBAR */}
      <Navbar />

<<<<<<< HEAD
      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* LEFT SIDE - Filters */}
        <aside className="bg-white shadow-md rounded-xl p-6 h-fit sticky top-6 border">
          <h2 className="text-xl font-semibold mb-6">Filter Jobs</h2>

          {/* Job Type */}
          <div className="mb-6">
            <h3 className="font-medium mb-3 text-gray-700">Job Type</h3>
            <div className="flex flex-col gap-2 text-gray-600">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 accent-[#F83002]" /> Full Time
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 accent-[#F83002]" /> Part Time
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 accent-[#F83002]" /> Internship
              </label>
            </div>
          </div>

          <hr className="my-4" />

          {/* Salary Range */}
          <div className="mb-6">
            <h3 className="font-medium mb-3 text-gray-700">Salary Range</h3>
            <input type="range" min="0" max="50" className="w-full accent-[#F83002]" />
            <p className="text-sm text-gray-500 mt-2">Up to 50 LPA</p>
          </div>

          <hr className="my-4" />

          {/* Location */}
          <div>
            <h3 className="font-medium mb-3 text-gray-700">Location</h3>
            <input
              type="text"
              placeholder="Enter location"
              className="border rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-[#F83002] focus:outline-none"
            />
          </div>
        </aside>

        {/* RIGHT SIDE - Job Cards */}
        <main className="md:col-span-3">
          {/* Heading */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">
              <span className="text-[#F83002]">Latest</span> Job Openings
            </h1>
            <Button variant="outline" className="hover:bg-[#F83002] hover:text-white">
              Sort by: Newest
            </Button>
          </div>

          {/* Job Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="border rounded-xl shadow-sm bg-white p-6 hover:shadow-lg transition transform hover:-translate-y-1"
              >
                <div className="mb-4">
                  <h2 className="text-lg font-semibold text-gray-900">Frontend Developer</h2>
                  <p className="text-gray-500 text-sm">Google • Bangalore, India</p>
                </div>

                <p className="text-gray-600 text-sm mb-4">
                  Join our team to work on cutting-edge UI technologies and
                  high-impact products that reach millions of users worldwide.
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  <Badge variant="outline" className="text-[#F83002] border-[#F83002]">Full Time</Badge>
                  <Badge variant="outline" className="text-[#F83002] border-[#F83002]">12 LPA</Badge>
                  <Badge variant="outline" className="text-[#F83002] border-[#F83002]">Remote</Badge>
                </div>

                <Button className="w-full bg-[#F83002] hover:bg-[#d62802] text-white font-medium">
                  Apply Now
                </Button>
              </div>
            ))}
          </div>
        </main>
=======
      <div className="max-w-7xl mx-auto mt-6 px-4">
        <div className="flex gap-6">
          {/* FILTERS */}
          <div className="w-[22%]">
            <FilterCard />
          </div>

          {/* JOB LISTINGS */}
          <div className="flex-1 h-[88vh] overflow-y-auto pb-6">
            {jobsArray.length <= 0 ? (
              <div className="flex justify-center items-center h-full text-gray-500">
                No jobs found
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {jobsArray.map((job) => (
                  <Link key={job.id} to = {`/description/${job.id}`} className="block"><Job {...job} onApply={()=>navigate(`/description/${job.id}`)} /></Link>
                ))}
              </div>
            )}
          </div>
        </div>
>>>>>>> 8da8c88 (16/08/25)
      </div>
    </div>
  );
};
