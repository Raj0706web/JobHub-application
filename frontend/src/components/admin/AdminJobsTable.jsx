import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { Edit2, MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";

export const AdminJobsTable = ({ filter = "" }) => {
  // Get jobs array from Redux (update this selector if your store shape is different)
  const {allAdminJobs} = useSelector(store => store.job);

  // Filter by company or job title (role), case-insensitive
  const filteredJobs = allAdminJobs.filter(job =>
    (job.title?.toLowerCase() || "").includes(filter.toLowerCase()) ||
    (job.company?.name?.toLowerCase() || "").includes(filter.toLowerCase())
  );

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm bg-white">
      <Table className="min-w-full">
        <TableCaption className="text-gray-500">
          A list of your recently posted jobs
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Company</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right pr-6">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredJobs.length > 0 ? (
            filteredJobs.map(({ _id, company, title, location, createdAt }) => (
              <TableRow
                key={_id}
                className="hover:bg-gray-50 transition-colors duration-150"
              >
                <TableCell className="py-3 px-4 text-gray-700">
                  {company?.name || <span className="text-gray-400 italic">N/A</span>}
                </TableCell>
                <TableCell className="py-3 px-4 text-gray-900 font-medium">
                  {title || <span className="text-gray-400 italic">No title</span>}
                </TableCell>
                <TableCell className="py-3 px-4 text-gray-600">
                  {location || <span className="text-gray-400 italic">N/A</span>}
                </TableCell>
                <TableCell className="py-3 px-4 text-gray-600">
                  {createdAt ? new Date(createdAt).toLocaleDateString() : ""}
                </TableCell>
                <TableCell className="py-3 px-4 text-right">
                  <Popover>
                    <PopoverTrigger
                      className="inline-flex items-center p-2 rounded hover:bg-gray-100 transition"
                      aria-label={`Actions for ${title || company || 'this job'}`}
                    >
                      <MoreHorizontal size={20} />
                    </PopoverTrigger>
                    <PopoverContent className="w-36 shadow-lg p-2 rounded border border-gray-200 bg-white">
                      <button
                        className="flex items-center gap-2 w-full text-left px-3 py-2 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        onClick={() => alert(`Edit job: ${title || company || _id}`)}
                      >
                        <Edit2 size={16} />
                        Edit
                      </button>
                    </PopoverContent>
                  </Popover>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} className="text-center py-8 text-gray-500">
                No jobs match your filter.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
