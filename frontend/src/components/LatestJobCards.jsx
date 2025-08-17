import React from "react";
import { Badge } from "./ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

export const LatestJobCards = ({ job }) => {
  return (
    <div className="p-6 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition bg-white max-w-lg mx-auto">
      {/* Company Info */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">
            {job?.company?.name}
          </h2>
          <p className="text-sm text-gray-500">India</p>
        </div>
        <Avatar className="w-12 h-12 border">
          <AvatarImage
            src={job?.company?.logo}
            alt={job?.company?.name || "Company Logo"}
          />
          <AvatarFallback>
            {job?.company?.name?.substring(0, 2).toUpperCase() || "NA"}
          </AvatarFallback>
        </Avatar>
      </div>

      {/* Job Title & Description */}
      <div className="mb-4">
        <h3 className="text-xl font-bold text-gray-900">{job?.title}</h3>
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">
          {job?.description}
        </p>
      </div>

      {/* Job Tags */}
      <div className="flex flex-wrap gap-2">
        <Badge className="text-blue-700 font-semibold" variant="ghost">
          {job?.position} Positions
        </Badge>
        <Badge className="text-green-700 font-semibold" variant="ghost">
          {job?.jobType}
        </Badge>
        <Badge className="text-purple-700 font-semibold" variant="ghost">
          {job?.salary} LPA
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
