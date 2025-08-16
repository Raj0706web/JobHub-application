import { setLoading } from "@/redux/authSlice";
import store from "@/redux/store";
import { USER_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { Loader2 } from "lucide-react";

export default function Signup() {
  const [signupData, setSignupData] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "student",
    profilePhoto: null,
  });

  const {loading} = useSelector(store=>store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeEventHandler = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    setSignupData({ ...signupData, profilePhoto: e.target.files?.[0] });
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    console.log("Signup attempt:", signupData);

    const formdata = new FormData();
    formdata.append("fullname", signupData.fullname);
    formdata.append("email", signupData.email);
    formdata.append("phoneNumber", signupData.phoneNumber);
    formdata.append("password", signupData.password);
    formdata.append("role", signupData.role);
    if (signupData.profilePhoto) {
      formdata.append("file", signupData.profilePhoto);
    }

    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/register`, formdata, {
        headers: { "Content-Type": "multipart/form-data" },
        withCredentials: true,
      });

      if (res.data.success) {
        setSignupData({
          fullname: "",
          email: "",
          phoneNumber: "",
          password: "",
          role: "student",
          profilePhoto: null,
        });
        toast.success(res.data.message || "Signup successful!");
        navigate("/auth/login");
      } else {
        toast.error(res.data.message || "Something went wrong during signup.");
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message || "Server error occurred.");
      } else if (error.request) {
        toast.error("No response from server. Please try again.");
      } else {
        toast.error("Unexpected error: " + error.message);
      }
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleSocialAuth = (provider) => {
    console.log(`Social auth with ${provider}`);
  };

  return (
    <div className="form-container sign-up">
      <form onSubmit={handleSignupSubmit}>
        <h1>Create Account</h1>

        <div className="social-icons">
          <a
            href="#"
            className="icon google"
            onClick={(e) => {
              e.preventDefault();
              handleSocialAuth("google");
            }}
          >
            <i className="fab fa-google"></i>
          </a>
          <a
            href="#"
            className="icon facebook"
            onClick={(e) => {
              e.preventDefault();
              handleSocialAuth("facebook");
            }}
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="#"
            className="icon github"
            onClick={(e) => {
              e.preventDefault();
              handleSocialAuth("github");
            }}
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="#"
            className="icon linkedin"
            onClick={(e) => {
              e.preventDefault();
              handleSocialAuth("linkedin");
            }}
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>

        <span>or use your email for registration</span>

        <div className="user-type-container">
          <div className="radio-group">
            <label className="radio-label">
              <input
                type="radio"
                name="role"
                value="student"
                checked={signupData.role === "student"}
                onChange={changeEventHandler}
              />
              <span className="radio-text">Student</span>
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="role"
                value="recruiter"
                checked={signupData.role === "recruiter"}
                onChange={changeEventHandler}
              />
              <span className="radio-text">Recruiter</span>
            </label>
          </div>
        </div>

        <input
          type="text"
          name="fullname"
          placeholder="Full Name"
          value={signupData.fullname}
          onChange={changeEventHandler}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={signupData.email}
          onChange={changeEventHandler}
          required
        />

        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          value={signupData.phoneNumber}
          onChange={changeEventHandler}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={signupData.password}
          onChange={changeEventHandler}
          required
        />

        <div className="file-input-container">
          <label className="file-input-label">
            <input
              type="file"
              name="file"
              accept="image/*"
              onChange={changeFileHandler}
              className="file-input"
            />
            <span className="file-input-text">
              {signupData.profilePhoto
                ? signupData.profilePhoto.name
                : "Choose Profile Picture"}
            </span>
            <i className="fas fa-upload"></i>
          </label>
        </div>
        {loading ? (
          <Button className="w-full my-4">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please Wait
          </Button>
        ) : (
          <button type="submit">Sign Up</button>
        )}
      </form>
    </div>
  );
}
