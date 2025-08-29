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
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { Edit2, MoreHorizontal } from "lucide-react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";


export const CompaniesTable = ({ filter = "" }) => {
  const {companies} = useSelector(store=>store.company);
  const navigate = useNavigate();
  const filteredCompanies = companies.filter((company) =>
    company.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm bg-white">
      <Table className="min-w-full">
        <TableCaption className="text-gray-500">
          A list of your recently registered companies
        </TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-20">Logo</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right pr-6">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredCompanies.length > 0 ? (
            filteredCompanies.map(({ _id, name, logo, createdAt }) => (
              <TableRow
                key={_id}
                className="hover:bg-gray-50 transition-colors duration-150"
              >
                <TableCell className="py-3 px-4">
                  <Avatar className="w-10 h-10">
                    {logo ? (
                      <AvatarImage
                        src={logo}
                        alt={`${name} logo`}
                        className="object-contain"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = "/default-logo.png";
                        }}
                      />
                    ) : (
                      <AvatarFallback className="text-gray-600 font-semibold">
                        {name.charAt(0)}
                      </AvatarFallback>
                    )}
                  </Avatar>
                </TableCell>
                <TableCell className="py-3 px-4 text-gray-900 font-medium">
                  {name}
                </TableCell>
                <TableCell className="py-3 px-4 text-gray-600">{createdAt.split("T")[0]}</TableCell>
                <TableCell className="py-3 px-4 text-right">
                  <Popover>
                    <PopoverTrigger
                      className="inline-flex items-center p-2 rounded hover:bg-gray-100 transition"
                      aria-label={`Actions for ${name}`}
                    >
                      <MoreHorizontal size={20} />
                    </PopoverTrigger>
                    <PopoverContent className="w-36 shadow-lg p-2 rounded border border-gray-200 bg-white">
                      <button
                        className="flex items-center gap-2 w-full text-left px-3 py-2 rounded hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        onClick={()=>navigate(`/admin/companies/${_id}`)}
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
              <TableCell colSpan={4} className="text-center py-8 text-gray-500">
                No companies match your filter.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
