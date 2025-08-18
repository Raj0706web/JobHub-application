import React, { useEffect, useState } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useParams } from "react-router-dom";
import axios from "axios";
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from "@/utils/constant";
import { setSingleJob } from "@/redux/jobSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";

const HighlightCard = ({ title, value }) => (
  <div className="bg-gray-50 p-6 rounded-lg text-center shadow-sm">
    <h3 className="text-gray-500 text-sm mb-2">{title}</h3>
    <p className="text-lg font-semibold">{value}</p>
  </div>
);
function formatDate(isoString) {
  const date = new Date(isoString);
  // You can format as per your needs (e.g., "15 Aug 2025")
  return date.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
}


export const JobDescription = ({
  companyLogo = "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  companyName = "TechNova Solutions",
  companyInfo = "Software Development • 500+ Employees",
  jobTitle = "Frontend Developer",
  badgesHardcore = [
    { label: "12 Positions", className: "bg-red-100 text-red-600" },
    { label: "Part Time", className: "bg-blue-100 text-blue-600" },
    { label: "24 LPA", className: "bg-green-100 text-green-700" },
  ],
  isAppliedHardcore = true,
  highlightsHardcore = [
    { title: "Salary", value: "12 LPA" },
    { title: "Applicants", value: "4" },
    { title: "Posted", value: "15 Aug 2025" },
  ],
  detailsHardcore = {
    Role: "Frontend Developer",
    Location: "Hyderabad",
    Description:
      "We are looking for a passionate Frontend Developer to join our dynamic team. You will be responsible for building responsive, high-quality interfaces using modern web technologies.",
    Experience: "2 years",
  },
  onApply = () => {},
}) => {
  const params = useParams();
  const jobId = params.id;
  const { singleJob } = useSelector((store) => store.job);
  const { user } = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  const initiallyApplied = singleJob?.applications?.some(application=>application===user?._id) || false;
  const [isApplied,setIsApplied] = useState(initiallyApplied);


  const applyJobHandler = async () => {
  try {
    const res = await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobId}`, { withCredentials: true });
    console.log('Response from get ',res.data);
    if (res.data.success) {
      setIsApplied(true);
      const updatedSingleJob = {...singleJob,applications:[...singleJob.applications,{applicant:user?._id}]}
      toast.success(res.data.message);
    }
  } catch (error) {
    toast.error(error.response?.data?.message || "Error applying");
  } 
};


  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, {
          withCredentials: true,
        });
        console.log(res);
        if (res.data.success) {
          dispatch(setSingleJob(res.data.job));
          setIsApplied(res.data.job.applications.some(application=>application.applicant===user?._id));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleJob();
  }, [jobId, dispatch, user?._id]);
  // Below where you get singleJob from redux:
  const badges = singleJob
    ? [
        singleJob.position && {
          label: `${singleJob.position} Positions`,
          className: "bg-red-100 text-red-600",
        },
        singleJob.jobType && {
          label: singleJob.jobType, // e.g., "Part Time"
          className: "bg-blue-100 text-blue-600",
        },
        singleJob.salary && {
          label: `${singleJob.salary} LPA`, // e.g., "24 LPA"
          className: "bg-green-100 text-green-700",
        },
      ].filter(Boolean)
    : [];

  const highlights = singleJob ? [
    singleJob.salary && { title: "Salary", value: singleJob.salary },
    singleJob?.applications.length !== undefined && { title: "Applicants", value: `${singleJob?.applications.length}` },
    singleJob.createdAt && { title: "Posted", value: formatDate(singleJob.createdAt) },
  ].filter(Boolean) : [];

  const details = singleJob ? {
    Role: singleJob.role || singleJob.title || "-",
    Location: singleJob.location || "-",
    Experience: singleJob.experienceLevel || "-",
    Skills: singleJob.requirements ? singleJob.requirements.join(", ") : "-",
    Description: singleJob.description || "-",
  } : {};
  return (
    <div className="w-full max-w-7xl mx-auto my-14 p-14 bg-white rounded-2xl shadow-lg border border-gray-200 transition-all duration-300 hover:shadow-xl">
      {/* Company Info */}
      <div className="flex items-center gap-6 mb-10">
        <img
          src={singleJob?.company?.logo}
          alt={`${singleJob?.company?.name} Logo`}
          className="w-16 h-16 rounded-lg border border-gray-300 p-1"
        />
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            {singleJob?.company?.name}
          </h2>
          <p className="text-base text-gray-500">{companyInfo}</p>
        </div>
      </div>

      {/* Job Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 pb-8 border-b border-gray-200">
        <div>
          <h1 className="text-4xl font-extrabold text-gray-900 leading-snug">
            {singleJob?.title}
          </h1>
          <div className="flex flex-wrap gap-3 mt-6">
            {badges.map((badge, index) => (
              <Badge
                key={index}
                className={`${badge.className} px-4 py-1.5 rounded-full text-base`}
              >
                {badge.label}
              </Badge>
            ))}
          </div>
        </div>

        <Button
          disabled={isApplied}
          onClick={!isApplied ? applyJobHandler : undefined}
          className={`rounded-xl px-8 py-3 text-lg transition-all duration-200 shadow-lg ${
            isApplied
              ? "bg-gray-400 cursor-not-allowed text-white"
              : "bg-gradient-to-r from-[#F83002] to-[#ff5733] hover:opacity-90 text-white"
          }`}
        >
          {isApplied ? "Already Applied" : "Apply Now"}
        </Button>
      </div>

      {/* Job Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
        {highlights.map((item, index) => (
          <HighlightCard key={index} title={item.title} value={item.value} />
        ))}
      </div>

      {/* Job Description */}
      <div className="mt-12">
        <h2 className="border-b border-gray-200 font-semibold text-2xl pb-4">
          Job Description
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
          {Object.entries(details).map(([key, value], index) => (
            <div
              key={index}
              className={`flex ${key === "Description" ? "md:col-span-2" : ""}`}
            >
              <span className="font-bold text-gray-700 min-w-[140px]">
                {key}:
              </span>
              <span className="text-gray-600 leading-relaxed">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
