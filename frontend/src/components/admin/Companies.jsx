import { Navbar } from "@/shared/Navbar";
import React, { useState, useCallback } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { CompaniesTable } from "./CompaniesTable";
import { useNavigate } from "react-router-dom";

export const Companies = () => {
  const [filter, setFilter] = useState("");
  const navigate = useNavigate();

  const handleFilterChange = useCallback(
    (e) => setFilter(e.target.value), []
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#faf7f7] via-[#f8fcfa] to-[#f83002]">
      <Navbar />
      <main className="max-w-6xl mx-auto p-6 sm:p-12">
        <div className="text-center mb-11 mt-6">
          <span className="inline-block bg-orange-50 text-orange-600 font-semibold px-4 py-1 rounded-full mb-3">
            Explore Companies
          </span>
          <h1 className="text-4xl font-black text-gray-900 mb-2">
            Discover & Connect with <span className="text-orange-500">Top Employers</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-500">
            Browse hundreds of top tech employers verified by our team. Use search and filters to find your dream company!
          </p>
        </div>
        <div className="flex flex-col items-center sm:flex-row sm:justify-between gap-4 mb-8">
          <Input
            className="w-full max-w-xs rounded-full px-6 py-3 border-2 border-orange-100 outline-none focus:border-orange-400 transition"
            placeholder="Filter by name"
            value={filter}
            onChange={handleFilterChange}
          />
          <Button
            className="rounded-full px-7 py-3 bg-orange-500 text-white font-semibold shadow-md hover:bg-orange-600 transition"
            onClick={() => navigate("/admin/companies/create")}
          >
            + New Company
          </Button>
        </div>
        <CompaniesTable filter={filter} />
      </main>
    </div>
  );
};
