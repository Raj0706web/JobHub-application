import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import React from "react";
import { LogOut, Settings, User2 } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const user = false; // Set this to `false` to show login/signup

  return (
    <div className="bg-white shadow-sm">
      <div className="flex items-center justify-between mx-auto max-w-7xl px-4 h-16">
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold">
            Job<span className="text-[#F83002]">Hub</span>
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-5">
            <li className="hover:text-[#F83002] cursor-pointer">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-[#F83002] cursor-pointer">
              <Link to="/jobs">Jobs</Link>
            </li>
            <li className="hover:text-[#F83002] cursor-pointer">
              <Link to="/browse">Browse</Link>
            </li>
            <li className="hover:text-[#F83002] cursor-pointer">
              <Link to="/about">About</Link>
            </li>
          </ul>

          {/* User Block */}
          {!user ? (
            <div className="flex items-center gap-2">
              <Link to="/auth/login">
                <Button variant="secondary" className="px-6">
                  Login
                </Button>
              </Link>
              <Link to="/auth/signup">
                <Button
                  variant="default"
                  className="bg-[#F83002] text-white hover:bg-[#e12700] px-6"
                >
                  Signup
                </Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer">
                  <AvatarImage src="https://github.com/shadcn.png" />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-80 mt-2 rounded-xl shadow-xl border p-4">
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" />
                  </Avatar>
                  <div>
                    <h4 className="font-medium text-lg">Ankit Raj</h4>
                    <p className="text-sm text-gray-500">ankitraj@email.com</p>
                  </div>
                </div>
                <div className="mt-4 space-y-2">
                  <Button
                    variant="outline"
                    className="w-full flex items-center gap-2"
                  >
                    <User2 className="w-4 h-4" /> Profile
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full flex items-center gap-2"
                  >
                    <Settings className="w-4 h-4" /> Settings
                  </Button>
                  <Button
                    variant="destructive"
                    className="w-full flex items-center gap-2"
                  >
                    <LogOut className="w-4 h-4" /> Logout
                  </Button>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};
