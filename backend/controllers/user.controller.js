import { User } from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
<<<<<<< HEAD

export const register = async(req, res)=>{
  try{
    console.log("BODY:", req.body);
    console.log("FILE:", req.file);
    const {fullname,email,phoneNumber,password,role} = req.body;
    if(!fullname || !email|| !phoneNumber || !password || !role){
      return res.status(400).json({
        message:"Something is missing",
        success:false
      });
    }
    const user = await User.findOne({email});
    if(user){
      return res.status(400).json({
        message:'User already exists with this email',
        success:false,
      });
    }
    const hashedPassword = await bcrypt.hash(password,10);
=======
import getDataUri from "../utils/datauri.js";
import cloudinary from "../utils/cloudinary.js";

export const register = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, password, role } = req.body;
    if (!fullname || !email || !phoneNumber || !password || !role) {
      return res.status(400).json({
        message: "Something is missing",
        success: false,
      });
    }
    const file = req.file;
    const fileUri = getDataUri(file);
    const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        message: "User already exists with this email",
        success: false,
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
>>>>>>> 774dcb2 (Save my local README and backend)

    await User.create({
      fullname,
      email,
      phoneNumber,
<<<<<<< HEAD
      password:hashedPassword,
      role,
=======
      password: hashedPassword,
      role,
      profile:{
        profilePhoto:cloudResponse.secure_url,
      }
>>>>>>> 774dcb2 (Save my local README and backend)
    });
    return res.status(201).json({
      message: "User registered successfully",
      success: true,
    });
<<<<<<< HEAD
  }catch(error){
=======
  } catch (error) {
>>>>>>> 774dcb2 (Save my local README and backend)
    console.error("Register Error:", error.message);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

<<<<<<< HEAD
export const login = async (req,res)=>{
  try{
    const {email,password,role} = req.body;
    if(!email || !password || !role){
      return res.status(400).json({
        mesagek:"Something is missing",
        success:false
      });
    }
    let user = await User.findOne({email});
    if(!user){
      return res.status(400).json({
        message:"Incorrect email or password",
        success:false,
      });
    }
    const isPasswordMatch = await bcrypt.compare(password,user.password);
    if(!isPasswordMatch){
      return res.status(400).json({
        message:"Incorrect email or password",
        success:false,
      });
    }
    // check role is correct or not
    if(role !== user.role){
      return res.status(400).json({
        message:"Account doesn't exist with current role.",
        success:false,
      })
    }
    const tokenData = {
      userId: user._id,
    }
    const token = await jwt.sign(tokenData,process.env.SECRET_KEY,{expiresIn:'1d'});

    user = {
      _id:user._id,
      fullname:user.fullname,
      email:user.email,
      phoneNumber:user.phoneNumber,
      role:user.role,
      profile:user.profile
    }

    return res.status(200).cookie("token",token,{maxAge:1*24*60*60*1000,httpOnly:true,sameSite:'strict'}).json({
      message:`Welcome back ${user.fullname}`,
      user,
      success:true,
    })
  }catch(error){
    console.log('Login error:',error.message);
  }
}
=======
export const login = async (req, res) => {
  try {
    const { email, password, role } = req.body;
    if (!email || !password || !role) {
      return res.status(400).json({
        mesagek: "Something is missing",
        success: false,
      });
    }
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Incorrect email or password",
        success: false,
      });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        message: "Incorrect email or password",
        success: false,
      });
    }
    // check role is correct or not
    if (role !== user.role) {
      return res.status(400).json({
        message: "Account doesn't exist with current role.",
        success: false,
      });
    }
    const tokenData = {
      userId: user._id,
    };
    const token = await jwt.sign(tokenData, process.env.SECRET_KEY, {
      expiresIn: "1d",
    });

    user = {
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };

    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
      })
      .json({
        message: `Welcome back ${user.fullname}`,
        user,
        success: true,
      });
  } catch (error) {
    console.log("Login error:", error.message);
  }
};
>>>>>>> 774dcb2 (Save my local README and backend)
export const logout = async (req, res) => {
  try {
    return res
      .status(200)
      .clearCookie("token", {
        httpOnly: true,
        sameSite: "strict",
        secure: process.env.NODE_ENV === "production", // secure only in prod
      })
      .json({
        message: "Logout successful",
        success: true,
      });
  } catch (error) {
    console.log("Logout error:", error.message);
    res.status(500).json({
      message: "Something went wrong during logout",
      success: false,
    });
  }
};

<<<<<<< HEAD
export const updateProfile = async (req,res)=>{
  try{
    const {fullname,email,phoneNumber,bio,skills} = req.body;
    const file = req.file;
    // cloudinary ayega idhar
    const skillsArray = skills ? skills.split(",") : [];
    const userId = req.id; // middleware authetication
    let user = await User.findById(userId);
    if(!user){
      return res.status(400).json({
        message:'User not found',
        success:false,
      });
    }
    // updating data
    if(fullname) user.fullname = fullname
    if(email) user.email = email
    if(phoneNumber) user.phoneNumber = phoneNumber
    if(bio) user.profile.bio = bio
    if(skills) user.profile.skills = skillsArray
    // resume comes later here...
=======
export const updateProfile = async (req, res) => {
  try {
    const { fullname, email, phoneNumber, bio, skills } = req.body;
    const file = req.file;
    // cloudinary ayega idhar
    let cloudResponse;

    // Only handle file (Cloudinary) if a new file was actually uploaded
    if (file) {
      const fileUri = getDataUri(file);
      cloudResponse = await cloudinary.uploader.upload(fileUri.content, {
        resource_type: "raw",
      });
    }

    const skillsArray = skills ? skills.split(",") : [];
    const userId = req.id; // middleware authetication
    let user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({
        message: "User not found",
        success: false,
      });
    }
    // updating data
    if (fullname) user.fullname = fullname;
    if (email) user.email = email;
    if (phoneNumber) user.phoneNumber = phoneNumber;
    if (bio) user.profile.bio = bio;
    if (skills) user.profile.skills = skillsArray;
    // resume comes later here...
    if (cloudResponse) {
      user.profile.resume = cloudResponse.secure_url; // save the cloudinary url
      user.profile.resumeOrginalName = file.originalname; // save the original file name
    }
>>>>>>> 774dcb2 (Save my local README and backend)

    await user.save();

    user = {
<<<<<<< HEAD
      _id:user._id,
      fullname:user.fullname,
      email:user.email,
      phoneNumber:user.phoneNumber,
      role:user.role,
      profile:user.profile
    }
    return res.status(200).json({
      message:'Profile update successully',
      user,
      success:true,
    })
  }catch(error){
=======
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phoneNumber: user.phoneNumber,
      role: user.role,
      profile: user.profile,
    };
    return res.status(200).json({
      message: "Profile update successully",
      user,
      success: true,
    });
  } catch (error) {
>>>>>>> 774dcb2 (Save my local README and backend)
    console.error("Profile update error:", error.message);
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
<<<<<<< HEAD
}
=======
};
>>>>>>> 774dcb2 (Save my local README and backend)
