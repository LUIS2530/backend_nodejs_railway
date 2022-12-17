import { Router } from "express";
import {
  getPlants,
  getPlant,
  deletePlants,
  updatePlants,
  createPlants,
} from "../controllers/plants.js";

const router = Router();

router.get("/plantas/", getPlants);

router.get("/plantas/:id", getPlant);

router.post("/plantas", createPlants);

router.put("/plantas/:id", updatePlants);

router.delete("/plantas/:id", deletePlants);

export default router;
