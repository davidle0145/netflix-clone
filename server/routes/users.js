import express from 'express'
import { deleteUser, getAllUser, getUserByID, getUserStats, updateUser } from '../controllers/userController.js'
import { verifyToken } from '../utils/verifyToken.js'

const router = express.Router()

router.put("/:id", verifyToken, updateUser)
router.delete("/:id", verifyToken, deleteUser)
router.get("/find/:id", getUserByID)
router.get("/", verifyToken, getAllUser)
router.get("/stats", getUserStats)

export default router
