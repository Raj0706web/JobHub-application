import { Navbar } from "@/shared/Navbar";
import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

export const CompanyCreate = () => {
  const [companyName, setCompanyName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your logic here
    alert(`Company "${companyName}" created!`);
    setCompanyName("");
  };

  const handleCancel = () => navigate(-1);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#faf7f7] via-[#f8fcfa] to-[#eef2fa]">
      <Navbar />
      <div className="max-w-xl mx-auto p-6 pt-12">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg border rounded-xl px-10 py-9 mt-10 flex flex-col gap-8"
        >
          <div className="text-center">
            <span className="inline-block bg-orange-50 text-orange-600 font-semibold px-4 py-1 rounded-full mb-2">
              Create Company
            </span>
            <h2 className="font-black text-3xl text-gray-900 mb-2">Company Name</h2>
            <p className="text-gray-500 mb-4">
              What would you like to give your company name? You can change this later.
            </p>
          </div>
          <div>
            <Label htmlFor="company_name" className="font-medium text-gray-800">
              Name
            </Label>
            <Input
              id="company_name"
              type="text"
              value={companyName}
              onChange={e => setCompanyName(e.target.value)}
              className="mt-2 rounded-full px-5 py-3 border-2 border-orange-100 focus:border-orange-400 transition"
              placeholder="e.g. JobHunt, Microsoft"
              required
              autoFocus
            />
          </div>
          <div className="flex gap-4 justify-end">
            <Button
              type="button"
              variant="outline"
              className="rounded-full border-orange-500 text-orange-500 hover:bg-orange-50 transition"
              onClick={handleCancel}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="rounded-full bg-orange-500 text-white font-semibold px-8 py-3 shadow-md hover:bg-orange-600 transition"
              disabled={companyName.trim().length === 0}
            >
              Create
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
