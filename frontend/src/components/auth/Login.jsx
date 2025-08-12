import { setLoading } from "@/redux/authSlice";
import store from "@/redux/store";
import { USER_API_END_POINT } from "@/utils/constant";
import axios from "axios";
import { Loader2 } from "lucide-react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { Button } from "../ui/button";

export default function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    role: "student",
  });
  const { loading } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    console.log("Login attempt:", loginData);
    try {
      dispatch(setLoading(true));
      const res = await axios.post(`${USER_API_END_POINT}/login`, loginData, {
        withCredentials: true,
      });
      if (res.data.success) {
        setLoginData({
          email: "",
          password: "",
          role: "student",
        });
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleSocialAuth = (provider) => {
    console.log(`Social auth with ${provider}`);
  };

  return (
    <div className="form-container sign-in">
      <form onSubmit={handleLoginSubmit}>
        <h1>Sign In</h1>

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

        <span>or use your email password</span>

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={loginData.email}
          onChange={handleLoginChange}
          required
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={loginData.password}
          onChange={handleLoginChange}
          required
        />

        {/* User Type Radio Buttons - Fixed references */}
        <div className="user-type-container">
          <div className="radio-group">
            <label className="radio-label">
              <input
                type="radio"
                name="role"
                value="student"
                checked={loginData.role === "student"}
                onChange={handleLoginChange}
              />
              <span className="radio-text">Student</span>
            </label>
            <label className="radio-label">
              <input
                type="radio"
                name="role"
                value="recruiter"
                checked={loginData.role === "recruiter"}
                onChange={handleLoginChange}
              />
              <span className="radio-text">Recruiter</span>
            </label>
          </div>
        </div>
        <a href="#">Forget Your Password?</a>
        {loading ? (
          <Button className="w-full my-4">
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please Wait
          </Button>
        ) : (
          <button type="submit">Sign In</button>
        )}
      </form>
    </div>
  );
}
