import express from "express";
import auth from "../middleware/auth.middleware.js";
import {
  me,
  updateProfile,
  changePassword
} from "../controllers/user.controller.js";

const router = express.Router();

// Get current user
router.get("/me", auth, me);

// Update profile
router.put("/me", auth, updateProfile);

// Change password
router.put("/me/password", auth, changePassword);

export default router;
