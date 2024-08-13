// backend/routes/authRoutes.js
import express from "express";
import { setupUsers, login } from "../controllers/authController.js";

const router = express.Router();

router.post("/setupUsers", setupUsers);
router.post("/login", login);

export default router;
