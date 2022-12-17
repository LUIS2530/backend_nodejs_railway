import { Router } from "express";
import {
  getSensors,
  getSensor,
  deleteSensors,
  updateSensors,
  createSensors,
} from "../controllers/sensores.js";

const router = Router();

router.get("/sensores/", getSensors);

router.get("/sensores/:id", getSensor);

router.post("/sensores", createSensors);

router.put("/sensores/:id", updateSensors);

router.delete("/sensores/:id", deleteSensors);

export default router;
