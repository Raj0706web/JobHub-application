import React, { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Navbar } from "@/shared/Navbar";
import { Button } from "../ui/button";
import { useSelector } from "react-redux";
import {
  Select,
  SelectItem,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectTrigger,
} from "../ui/select";
import axios from "axios";
import { JOB_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";

export const PostJob = () => {
  const [input, setInput] = useState({
    title: "",
    description: "",
    requirements: "",
    salary: "",
    location: "",
    jobType: "",
    experience: "",
    position: "",
    companyId: "",
  });

  const [loading,setLoading] = useState(false);
  const navigate = useNavigate();
  const { companies = [] } = useSelector((store) => store.company);

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  // Update companyId in form state when a company is picked
  const handleCompanyChange = (value) => {
    const selectedCompany = companies.find((company)=>company.name.toLowerCase()===value);
    setInput({ ...input, companyId: selectedCompany._id });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post(`${JOB_API_END_POINT}/post`,input,{
        headers:{
          'Content-Type':'application/json'
        },
        withCredentials:true
      });
      if(res.data.success){
        toast.success(res.data.message);
        navigate("/admin/jobs");
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const isCompanyListEmpty = companies.length === 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navbar />
      <div className="flex items-center justify-center w-full py-12">
        <form onSubmit={submitHandler} className="p-8 w-full max-w-2xl border border-gray-200 shadow-xl bg-white rounded-2xl space-y-8">
          <h2 className="text-3xl mb-6 font-black text-center text-orange-600 tracking-wide">
            Post a New Job
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
            <div>
              <Label>Title *</Label>
              <Input
                type="text"
                name="title"
                placeholder="Frontend Developer"
                value={input.title}
                onChange={changeEventHandler}
                className="rounded-xl my-1 focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div>
              <Label>Description *</Label>
              <Input
                type="text"
                name="description"
                placeholder="Exciting opportunity to..."
                value={input.description}
                onChange={changeEventHandler}
                className="rounded-xl my-1 focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div>
              <Label>Requirements *</Label>
              <Input
                type="text"
                name="requirements"
                placeholder="React, Node, CSS"
                value={input.requirements}
                onChange={changeEventHandler}
                className="rounded-xl my-1 focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div>
              <Label>Salary (LPA) *</Label>
              <Input
                type="number"
                name="salary"
                min={0}
                placeholder="e.g. 10"
                value={input.salary}
                onChange={changeEventHandler}
                className="rounded-xl my-1 focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div>
              <Label>Location *</Label>
              <Input
                type="text"
                name="location"
                placeholder="e.g. Bengaluru"
                value={input.location}
                onChange={changeEventHandler}
                className="rounded-xl my-1 focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div>
              <Label>Job Type *</Label>
              <Input
                type="text"
                name="jobType"
                placeholder="Full Time"
                value={input.jobType}
                onChange={changeEventHandler}
                className="rounded-xl my-1 focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div>
              <Label>Experience Level *</Label>
              <Input
                type="text"
                name="experience"
                placeholder="2 years"
                value={input.experience}
                onChange={changeEventHandler}
                className="rounded-xl my-1 focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div>
              <Label>No. of Positions *</Label>
              <Input
                type="number"
                name="position"
                min={1}
                placeholder="5"
                value={input.position}
                onChange={changeEventHandler}
                className="rounded-xl my-1 focus:ring-2 focus:ring-orange-400"
              />
            </div>
            <div className="md:col-span-2">
              <Label>Choose Company *</Label>
              {isCompanyListEmpty ? (
                <div className="text-red-600 text-sm font-bold mt-2">
                  * Please register a company before posting a job.
                </div>
              ) : (
                <Select
                  onValueChange={handleCompanyChange}>
                  <SelectTrigger className="rounded-xl focus:ring-2 focus:ring-orange-400">
                    <SelectValue placeholder="Select a Company" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      {companies.map((company) => (
                        <SelectItem value={company?.name?.toLowerCase()}>
                          {company?.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              )}
            </div>
          </div>
          {loading ? (
            <Button className="w-full my-4">
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Please Wait
            </Button>
          ) : (
            <Button
            className="w-full mt-4 rounded-xl bg-orange-600 hover:bg-orange-700 text-lg font-bold py-3 transition"
            disabled={isCompanyListEmpty}
            type="submit"
          >
            Post New Job
          </Button>
          )}
        </form>
      </div>
    </div>
  );
};
