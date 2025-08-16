import express from "express";
import {
  register,
  login,
  logout,
  updateProfile
} from "../controllers/user.controller.js";
import isAuthenticated from "../middlewares/isAuthenticated.js";
import { singleUpload } from "../middlewares/multer.js";

const router = express.Router();

router.route("/register").post(singleUpload,register);
router.route("/login").post(login);
router.route("/logout").get(logout);
<<<<<<< HEAD
router.route("/profile/update").post(isAuthenticated,updateProfile);
=======
router.route("/profile/update").post(isAuthenticated,singleUpload,updateProfile);
>>>>>>> 774dcb2 (Save my local README and backend)

export default router;