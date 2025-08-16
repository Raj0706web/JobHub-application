import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Loader2 } from "lucide-react"; // make sure you have this from lucide-react
import { useDispatch, useSelector } from "react-redux";
import { USER_API_END_POINT } from "@/utils/constant";
import { toast } from "sonner";
import axios from "axios";
import { setUser } from "@/redux/authSlice";

export const UpdateProfileDialog = ({ open, setOpen, onSubmit }) => {
  const [loading, setLoading] = useState(false);
  const { user } = useSelector((store) => store.auth);
  const [input, setInput] = useState({
    fullname: user?.fullname,
    email: user?.email,
    phoneNumber: user?.phoneNumber,
    bio: user?.profile?.bio,
    skills: user?.profile?.skills?.map(skill=>skill)||"",
    file: user?.profile?.resume,
  });

  const dispatch = useDispatch();

  // Handle direct changes
  const handleChange = (e) => {
    const { name, value, files, type } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: type === "file" ? files[0] : value,
    }));
  };

  // Handle submit
const handleSubmit = async (e) => {
  e.preventDefault();
  if (!input.fullname || !input.email) {
    alert("Name and Email are required.");
    return;
  }

  setLoading(true);
  try {
    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber || "");
    formData.append("bio", input.bio || "");
    formData.append("skills",input.skills);

    if (input.file instanceof File) {
      formData.append("file", input.file);
    }

    const res = await axios.post(`${USER_API_END_POINT}/profile/update`, formData, { withCredentials: true });

    if (res.data.success) {
      dispatch(setUser(res.data.user));
      toast.success(res.data.message);
    }
    setOpen(false);
  } catch (err) {
    console.error("Profile update failed", err);
    toast.error(err.response?.data?.message || "Failed to update profile");
  } finally {
    setLoading(false);
  }
};


  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            Update Profile
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="fullname" className="text-right font-medium">
              Name
            </Label>
            <Input
              id="fullname"
              name="fullname"
              type="text"
              value={input.fullname}
              onChange={handleChange}
              required
              className="col-span-3"
            />
          </div>

          {/* Email */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-right font-medium">
              Email
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={input.email}
              onChange={handleChange}
              required
              className="col-span-3"
            />
          </div>

          {/* Number */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="number" className="text-right font-medium">
              Number
            </Label>
            <Input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              value={input.phoneNumber}
              onChange={handleChange}
              className="col-span-3"
            />
          </div>

          {/* Bio */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="bio" className="text-right font-medium">
              Bio
            </Label>
            <Input
              id="bio"
              name="bio"
              value={input.bio}
              onChange={handleChange}
              className="col-span-3"
            />
          </div>

          {/* Skills */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="skills" className="text-right font-medium">
              Skills
            </Label>
            <Input
              id="skills"
              name="skills"
              value={input.skills}
              onChange={handleChange}
              className="col-span-3"
            />
          </div>

          {/* Resume */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="file" className="text-right font-medium">
              Resume
            </Label>
            <Input
              id="file"
              name="file"
              type="file"
              accept="application/pdf"
              onChange={handleChange}
              className="col-span-3"
            />
          </div>

          {/* Action Buttons */}
          <DialogFooter>
            {loading ? (
              <Button className="w-full" disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Please Wait...
              </Button>
            ) : (
              <Button type="submit" className="w-full">
                Save Changes
              </Button>
            )}
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
