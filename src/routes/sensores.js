import { Router } from "express"
import { getUsers, getUser, deleteUser, updateUser, createUser } from "../controllers/users"

const router = Router()

//users routes

router.get("/sensores/", getUsers)


router.get("/sensores/:id", getUser)


router.post("/sensores", createUser)


router.put("/sensores/:id", updateUser)


router.delete("/sensores/:id", deleteUser)


//sensors routes

//actuators routes

export default router