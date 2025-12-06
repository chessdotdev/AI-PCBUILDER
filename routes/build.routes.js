import { Router } from "express";
import generateBuild from "../controllers/build.controller.js";

const router = Router();

router.post('/pc-builder', generateBuild);

export default router;
