import { Navbar } from "@/shared/Navbar";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { ArrowLeft } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useNavigate } from "react-router-dom";

export const CompanySetup = () => {
  const [input, setInput] = useState({
    name: "",
    description: "",
    website: "",
    location: "",
    file: null,
  });
  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const changeFileHandler = (e) => {
    const file = e.target.files?.[0];
    setInput({ ...input, file });
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    // Submission logic
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#faf7f7] via-[#f8fcfa] to-[#eef2fa]">
      <Navbar />
      <div className="max-w-2xl mx-auto px-6 py-14">
        <form onSubmit={submitHandler} className="bg-white shadow-lg border rounded-xl p-10">
          <div className="flex items-center gap-4 mb-8 border-b border-gray-200 pb-5">
            <Button
              type="button"
              variant="outline"
              onClick={() => navigate(-1)}
              className="flex items-center gap-2 text-gray-600 font-semibold hover:text-gray-900 rounded-full"
            >
              <ArrowLeft />
              <span>Back</span>
            </Button>
            <span className="ml-2 bg-orange-50 text-orange-600 px-4 py-1 rounded-full font-semibold">Profile Setup</span>
            <h1 className="font-bold text-xl text-gray-900 ml-2">Company Setup</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <div className="flex flex-col">
              <Label htmlFor="name">Company Name</Label>
              <Input
                id="name"
                type="text"
                name="name"
                value={input.name}
                onChange={changeEventHandler}
                placeholder="Acme Corp"
                className="mt-2 rounded-full px-5 py-3 border-2 border-orange-100 focus:border-orange-400 transition"
                required
              />
            </div>
            <div className="flex flex-col">
              <Label htmlFor="description">Description</Label>
              <Input
                id="description"
                type="text"
                name="description"
                value={input.description}
                onChange={changeEventHandler}
                placeholder="e.g. Enterprise solutions leader"
                className="mt-2 rounded-full px-5 py-3 border-2 border-orange-100 focus:border-orange-400 transition"
              />
            </div>
            <div className="flex flex-col">
              <Label htmlFor="website">Website</Label>
              <Input
                id="website"
                type="url"
                name="website"
                value={input.website}
                onChange={changeEventHandler}
                placeholder="https://example.com"
                className="mt-2 rounded-full px-5 py-3 border-2 border-orange-100 focus:border-orange-400 transition"
              />
            </div>
            <div className="flex flex-col">
              <Label htmlFor="location">Location</Label>
              <Input
                id="location"
                type="text"
                name="location"
                value={input.location}
                onChange={changeEventHandler}
                placeholder="City, Country"
                className="mt-2 rounded-full px-5 py-3 border-2 border-orange-100 focus:border-orange-400 transition"
              />
            </div>
            <div className="flex flex-col md:col-span-2">
              <Label htmlFor="logo">Logo</Label>
              <Input
                id="logo"
                type="file"
                accept="image/*"
                onChange={changeFileHandler}
                className="mt-2 rounded-full px-5 py-3 border-2 border-orange-100"
              />
            </div>
          </div>
          <Button
            type="submit"
            className="w-full mt-10 rounded-full bg-orange-500 text-white text-lg font-bold py-3 shadow-lg hover:bg-orange-600 transition"
          >
            Update
          </Button>
        </form>
      </div>
    </div>
  );
};
