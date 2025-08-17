import React from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Bookmark } from "lucide-react";
import { Avatar, AvatarImage } from "./ui/avatar";

export const Job = ({job}) => {
  // Function for showing "x days ago"
  const daysAgo = (date) => {
    const today = new Date();
    const created = new Date(date);
    const diffTime = Math.abs(today - created);
    return Math.floor(diffTime / (1000 * 60 * 60 * 24));
  };

  return (
    <div className="border rounded-xl shadow-sm bg-white p-6 hover:shadow-lg transition transform hover:-translate-y-1 flex flex-col justify-between">
      {/* Top Row - Date + Bookmark */}
      <div className="flex justify-between items-center mb-3">
        <p className="text-xs text-gray-500">
          {daysAgo(postedAt) === 0
            ? "Today"
            : `${daysAgo(postedAt)} days ago`}
        </p>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full border-gray-300"
        >
          <Bookmark size={16} />
        </Button>
      </div>

      {/* Company Info */}
      <div className="flex items-center gap-3 mb-4">
        <Avatar className="w-12 h-12 border">
          <AvatarImage src={logo} alt={company} />
        </Avatar>
        <div>
          <h3 className="font-semibold text-gray-900">{job?.company?.name}</h3>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>

      {/* Job Title & Description */}
      <h2 className="text-lg font-semibold text-gray-900 mb-2">{job?.title}</h2>
      <p className="text-gray-600 text-sm mb-4 line-clamp-3">{job?.description}</p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        <Badge
          variant="outline"
          className="text-[#F83002] border-[#F83002] font-medium"
        >
          {job?.jobType}
        </Badge>
        <Badge
          variant="outline"
          className="text-[#F83002] border-[#F83002] font-medium"
        >
          {job?.salary}
        </Badge>
        <Badge
          variant="outline"
          className="text-[#F83002] border-[#F83002] font-medium"
        >
          {job?.positions}
        </Badge>
      </div>

      {/* Action Button */}
      <Button className="w-full bg-[#F83002] hover:bg-[#d62802] text-white font-medium">
        Apply Now
      </Button>
    </div>
  );
};
