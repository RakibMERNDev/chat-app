import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getUsersForSidebar } from "../controllers/message.controller.js";


const router = express.Router();


// Define your message routes here

router.get('/users', protectRoute, getUsersForSidebar)