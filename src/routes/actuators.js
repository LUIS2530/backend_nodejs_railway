import { Router } from "express";
import {
  getActuators,
  getActuator,
  deleteActuators,
  updateActuators,
  createActuators,
} from "../controllers/actuators.js";

const router = Router();


/**
 * @swagger
 * tags: 
 *      name: Actuators
 *      description: Actuators routes
 */

/**
 * @swagger
 * /actuadores:
 *  get:
 *      summary: Get all actuators
 *      tags: [Actuators]
 */
router.get("/actuadores/", getActuators);


/**
 * @swagger
 * /actuadores/:id:
 *  get:
 *      summary: Get an actuator by id
 *      tags: [Actuators]
 */
router.get("/actuadores/:id", getActuator);


/**
 * @swagger
 * /actuadores:
 *  post:
 *      summary: Create an actuator
 *      tags: [Actuators]
 */
router.post("/actuadores", createActuators);


/**
 * @swagger
 * /actuadores/:id:
 *  put:
 *      summary: Update an actuator by id
 *      tags: [Actuators]
 */
router.put("/actuadores/:id", updateActuators);


/**
 * @swagger
 * /actuadores/:id:
 *  delete:
 *      summary: Delete an actuator by id
 *      tags: [Actuators]
 */
router.delete("/actuadores/:id", deleteActuators);

export default router;
