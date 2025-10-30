import express from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import {
  getMessages,
  getUsersForSidebar,
  sendMessage,
} from "../controllers/message.controller.js";

const router = express.Router();

router.get("/:id",protectRoute, getMessages);
router.post("/send/:id",protectRoute, sendMessage);

// Define your message routes here

router.get("/users", protectRoute, getUsersForSidebar);

export default router;
