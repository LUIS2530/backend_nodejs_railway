import { Router } from "express";
import {
  getSensors,
  getSensor,
  deleteSensors,
  updateSensors,
  createSensors,
} from "../controllers/sensores.js";

const router = Router();


/**
 * @swagger
 * tags: 
 *      name: Sensors
 *      description: Sensors routes
 */

/**
 * @swagger
 * /sensores:
 *  get:
 *      summary: Get all sensors
 *      tags: [Sensors]
 */
router.get("/sensores/", getSensors);


/**
 * @swagger
 * /sensores/:id:
 *  get:
 *      summary: Get a sensor by id
 *      tags: [Sensors]
 */
router.get("/sensores/:id", getSensor);


/**
 * @swagger
 * /sensores:
 *  post:
 *      summary: Create a sensor
 *      tags: [Sensors]
 */
router.post("/sensores", createSensors);


/**
 * @swagger
 * /sensores/:id:
 *  put:
 *      summary: Update a sensor by id
 *      tags: [Sensors]
 */
router.put("/sensores/:id", updateSensors);


/**
 * @swagger
 * /sensores/:id:
 *  delete:
 *      summary: Delete a sensor by id
 *      tags: [Sensors]
 */
router.delete("/sensores/:id", deleteSensors);

export default router;
