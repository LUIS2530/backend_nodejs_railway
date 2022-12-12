import { Router } from "express"
import { getUsers, getUser, deleteUser, updateUser, createUser } from "../controllers/users.js"

const router = Router()

//users routes


router.get("/users/", getUsers)


router.get("/users/:id", getUser)


router.post("/users", createUser)


router.put("/users/:id", updateUser)


router.delete("/users/:id", deleteUser)


export default router