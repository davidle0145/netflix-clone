import express from 'express'
import { deleteUser, getAllUser, getUserByID, updateUser } from '../controllers/userController.js'

const router = express.Router()

router.put("/:id", updateUser)
router.delete("/:id", deleteUser)
router.get("/:id", getUserByID)
router.get("/", getAllUser)

export default router
