import React from "react";
import { FaSearch } from "react-icons/fa"; // search icon
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const { user } = useSelector((store)=>store.auth);
  const navigate = useNavigate();
  const handleUploadResumeClick = ()=>{
    if (!user) {
      navigate("/auth/login");
    } else {
      navigate("/upload-resume");
    }
  }
  return (
    <section className="text-center mt-12 px-4">
      <div className="flex flex-col gap-6 max-w-3xl mx-auto">
        
        {/* Tagline */}
        <span className="px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium inline-block mx-auto">
          No.1 Job Hunt Website
        </span>
        
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Search, Apply & <br />
          Get Your <span className="text-[#F83002]">Dream Job</span>
        </h1>
        
        {/* Subtext */}
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Find your perfect career match with thousands of verified job listings from top companies around the world.
        </p>

        {/* Call to Action */}
        <div className="flex justify-center gap-4 mt-4">
          <button className="px-6 py-3 bg-[#F83002] text-white rounded-full hover:bg-[#d62802] transition"
          onClick={()=>navigate("/jobs")}>
            Browse Jobs
          </button>
          <button className="px-6 py-3 border border-[#F83002] text-[#F83002] rounded-full hover:bg-[#F83002] hover:text-white transition"
          onClick={handleUploadResumeClick}>
            {user ? "Upload Resume" : "Sign In to Upload"}
          </button>
        </div>

        {/* Search Bar */}
        <div className="flex w-full md:w-[60%] shadow-lg border border-gray-200 pl-4 pr-2 py-2 rounded-full items-center gap-3 mx-auto mt-6">
          <FaSearch className="text-gray-400 text-lg" />
          <input
            type="text"
            placeholder="Find your Dream Job"
            className="outline-none border-none w-full text-gray-700"
          />
          <button className="bg-[#F83002] text-white px-5 py-2 rounded-full hover:bg-[#d62802] transition">
            Search
          </button>
        </div>
      </div>
    </section>
  );
};
