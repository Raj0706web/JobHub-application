import React from "react";
import { Badge } from "./ui/badge";

export const LatestJobCards = () => {
  return (
    <div className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition bg-white max-w-lg mx-auto">
      {/* Company Info */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">Company Name</h2>
          <p className="text-sm text-gray-500">India</p>
        </div>
        <img
          src="https://via.placeholder.com/40"
          alt="Company Logo"
          className="w-10 h-10 object-cover rounded-full border"
        />
      </div>

      {/* Job Title & Description */}
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900">Job Title</h3>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias suscipit rerum, adipisci vel minus consequuntur? Harum nihil earum quam aperiam.
        </p>
      </div>

      {/* Job Tags */}
      <div className="flex flex-wrap gap-2">
        <Badge className="text-blue-700 font-semibold" variant="ghost">
          12 Positions
        </Badge>
        <Badge className="text-green-700 font-semibold" variant="ghost">
          Part Time
        </Badge>
        <Badge className="text-purple-700 font-semibold" variant="ghost">
          24 LPA
        </Badge>
      </div>

      {/* Apply Button */}
      <div className="mt-5">
        <button className="w-full py-2 bg-[#F83002] text-white rounded-full hover:bg-[#d62802] transition">
          Apply Now
        </button>
      </div>
    </div>
  );
};
