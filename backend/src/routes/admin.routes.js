import express from "express";
import auth from "../middleware/auth.middleware.js";
import { adminOnly } from "../middleware/role.middleware.js";
import {
  listUsers,
  toggleStatus
} from "../controllers/admin.controller.js";

const router = express.Router();

// List all users (pagination)
router.get("/users", auth, adminOnly, listUsers);

// Activate / Deactivate user
router.patch("/users/:id/status", auth, adminOnly, toggleStatus);

export default router;
