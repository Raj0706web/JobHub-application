import { Navbar } from "@/shared/Navbar";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { ArrowLeft, Loader2 } from "lucide-react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { COMPANY_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { useSelector } from "react-redux";
import store from "@/redux/store";
import { useGetCompanyById } from "../hooks/useGetCompanyById";

export const CompanySetup = () => {
  const params = useParams();
  useGetCompanyById(params.id);
  const [input, setInput] = useState({
    name: "",
    description: "",
    website: "",
    location: "",
    file: null,
  });
  const {singleCompany} = useSelector(store=>store.company);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
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
    const formData = new FormData();
    formData.append("name", input.name);
    formData.append("description", input.description);
    formData.append("website", input.website);
    formData.append("location", input.location);
    if (input.file) {
      formData.append("file", input.file);
    }
    try {
      setLoading(true);
      const res = await axios.put(
        `${COMPANY_API_END_POINT}/update/${params.id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/admin/companies");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    setInput({
      name: singleCompany.name || "",
      description: singleCompany.description || "",
      website: singleCompany.website || "",
      location: singleCompany.location || "",
      file: singleCompany.file || null,
    });
  },[singleCompany]);
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#faf7f7] via-[#f8fcfa] to-[#eef2fa]">
      <Navbar />
      <div className="max-w-2xl mx-auto px-6 py-14">
        <form
          onSubmit={submitHandler}
          className="bg-white shadow-lg border rounded-xl p-10"
        >
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
            <span className="ml-2 bg-orange-50 text-orange-600 px-4 py-1 rounded-full font-semibold">
              Profile Setup
            </span>
            <h1 className="font-bold text-xl text-gray-900 ml-2">
              Company Setup
            </h1>
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
          {loading ? (
            <Button className="w-full my-4">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please Wait
            </Button>
          ) : (
            <Button
              type="submit"
              className="w-full mt-10 rounded-full bg-orange-500 text-white text-lg font-bold py-3 shadow-lg hover:bg-orange-600 transition"
            >
              Update
            </Button>
          )}
        </form>
      </div>
    </div>
  );
};
