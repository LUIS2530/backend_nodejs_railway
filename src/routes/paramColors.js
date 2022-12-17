import { Router } from "express";
import {
  getParamColors,
  getParamColor,
  deleteParamColors,
  updateParamColors,
  createParamColors,
} from "../controllers/paramColors.js";

const router = Router();

router.get("/paramColors/", getParamColors);

router.get("/paramColors/:id", getParamColor);

router.post("/paramColors", createParamColors);

router.put("/paramColors/:id", updateParamColors);

router.delete("/paramColors/:id", deleteParamColors);

export default router;
