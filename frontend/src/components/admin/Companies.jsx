import React, { useState, useCallback } from "react";
import { Navbar } from "@/shared/Navbar";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { CompaniesTable } from "./CompaniesTable";
import { useNavigate } from "react-router-dom";

export const Companies = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("");

  // Debounce handler to avoid excessive filtering on each keystroke
  const debounce = (fn, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => fn(...args), delay);
    };
  };

  const handleFilterChange = useCallback(debounce((e) => {
    setFilter(e.target.value);
  }, 300), []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="max-w-7xl mx-auto p-6 sm:p-10">
        <header className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-4">
          <h1 className="text-3xl font-semibold text-gray-900">Companies</h1>
          <Button
            onClick={() => navigate("/admin/companies/create")}
            className="whitespace-nowrap"
          >
            New Company
          </Button>
        </header>

        <section className="mb-6">
          <Input
            type="search"
            placeholder="Filter companies by name"
            aria-label="Filter companies by name"
            onChange={handleFilterChange}
            className="max-w-xs"
            spellCheck={false}
            autoComplete="off"
          />
        </section>

        <CompaniesTable filter={filter} />
      </main>
    </div>
  );
};
