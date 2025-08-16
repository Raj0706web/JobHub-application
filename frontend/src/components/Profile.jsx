import { Navbar } from "@/shared/Navbar";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "@/components/ui/button";
import { Pencil, Download } from "lucide-react";
import React, { useState } from "react";
import { AppliedJobsTable } from "./AppliedJobsTable";
import { UpdateProfileDialog } from "./UpdateProfileDialog";
import { useSelector } from "react-redux";

const resumeUrl = ""; // Example: "https://example.com/resume.pdf"
export const Profile = () => {
  const [open,setOpen] = useState(false);
  const {user} = useSelector(store=>store.auth);
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <div className="max-w-6xl mx-auto bg-white border border-gray-200 rounded-3xl my-12 p-12 shadow-lg transition-shadow hover:shadow-xl">
        
        {/* Profile Header */}
        <div className="flex flex-col items-center relative">
          <Avatar className="w-40 h-40 border-4 border-[#F83002] rounded-full overflow-hidden shadow-md">
            <AvatarImage
              src={user?.profile?.profilePhoto}
              alt="User Profile"
              className="w-full h-full object-cover"
            />
          </Avatar>

          {/* Edit Button */}
          <Button
            size="lg"
            variant="outline"
            onClick={()=>setOpen(true)}
            className="absolute top-0 right-0 flex items-center gap-2 border-[#F83002] text-[#F83002] hover:bg-[#F83002] hover:text-white transition"
          >
            <Pencil size={18} />
            Edit Profile
          </Button>

          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">{user?.fullname}</h2>
          <p className="text-gray-500 text-lg">Full Stack Developer</p>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-gray-200" />

        {/* Profile Info Section */}
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-800 text-2xl">Contact Information</h3>
            <p className="text-lg text-gray-600">📧 {user?.email}</p>
            <p className="text-lg text-gray-600">📱 {user?.phoneNumber}</p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-gray-800 text-2xl">Skills</h3>
            <div className="flex flex-wrap gap-3">
              {user?.profile?.skills.length > 0 ? (
                user?.profile?.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-base font-medium hover:bg-[#F83002] hover:text-white cursor-pointer transition"
                  >
                    {skill}
                  </span>
                ))
              ) : (
                <span className="text-gray-400 italic">No skills added</span>
              )}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-gray-200" />

        {/* Resume Section */}
        <div>
          <h3 className="font-semibold text-gray-800 text-2xl mb-4">Resume</h3>
          {user?.profile?.resume ? (
            <Button
              onClick={() => window.open(user?.profile?.resume, "_blank")}
              className="flex items-center gap-2 bg-[#F83002] hover:bg-[#d62602]"
            >
              <Download size={18} />
              {user?.profile?.resumeOrginalName}
            </Button>
          ) : (
            <span className="text-gray-400 italic">No resume added</span>
          )}
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-gray-200" />

        <div>
          <h3 className="font-semibold text-gray-800 text-2xl mb-4">Applied Jobs</h3>
          {/* Application Table */}
          <AppliedJobsTable/>
        </div>

        <div className="my-10 border-t border-gray-200" />

        {/* About Me */}
        <div>
          <h3 className="font-semibold text-gray-800 text-2xl mb-4">About Me</h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            {user?.profile?.bio}
          </p>
        </div>
      </div>
      <UpdateProfileDialog open={open} setOpen={setOpen}/>
    </div>
  );
};
