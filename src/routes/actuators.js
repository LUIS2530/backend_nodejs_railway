import { Router } from "express";
import {
  getActuators,
  getActuator,
  deleteActuators,
  updateActuators,
  createActuators,
} from "../controllers/actuators.js";

const router = Router();

router.get("/actuadores/", getActuators);

router.get("/actuadores/:id", getActuator);

router.post("/actuadores", createActuators);

router.put("/actuadores/:id", updateActuators);

router.delete("/actuadores/:id", deleteActuators);

export default router;
