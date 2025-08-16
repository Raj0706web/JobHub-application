import React from "react";
import { Badge } from "@/components/ui/badge"; // shadcn badge
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const AppliedJobsTable = () => {
  // Example applied jobs data
  const appliedJobs = [
    { date: "17-07-2025", role: "Frontend Developer", company: "Google", status: "Selected" },
    { date: "12-06-2025", role: "Backend Developer", company: "Amazon", status: "Interview" },
    { date: "25-05-2025", role: "Full Stack Developer", company: "Microsoft", status: "Rejected" },
    { date: "10-04-2025", role: "UI/UX Designer", company: "Adobe", status: "Applied" },
  ];

  // Function to style badge based on status
  const getStatusColor = (status) => {
    switch (status) {
      case "Selected":
        return "bg-green-100 text-green-800";
      case "Interview":
        return "bg-blue-100 text-blue-800";
      case "Rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
      <Table>
        <TableCaption className="text-gray-500">A list of your applied jobs</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Job Role</TableHead>
            <TableHead>Company</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {appliedJobs.map((job, index) => (
            <TableRow key={index} className="hover:bg-gray-50">
              <TableCell>{job.date}</TableCell>
              <TableCell>{job.role}</TableCell>
              <TableCell>{job.company}</TableCell>
              <TableCell className="text-right">
                <Badge className={`${getStatusColor(job.status)} px-3 py-1 rounded-full text-sm`}>
                  {job.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
