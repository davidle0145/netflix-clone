import express from 'express'
import { verifyToken } from '../utils/verifyToken.js'
import { createList, deleteList, getAllList, updateList } from '../controllers/listController.js'

const router = express.Router()

router.post("/create", verifyToken, createList)
router.put("/:id", verifyToken, updateList)
router.delete("/:id", verifyToken, deleteList)
router.get("/", getAllList)


export default router
