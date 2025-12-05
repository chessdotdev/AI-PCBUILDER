// routes/build.routes.js
import { Router } from "express";
import generateBuild from "../controllers/build.controller.js";

const router = Router();

// Only include the endpoint path relative to /api/build
router.post('/pc-builder', generateBuild);

export default router;
