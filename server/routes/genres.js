import express from 'express'
import { verifyToken } from '../utils/verifyToken.js'
import { createGenre, deleteGenre, getAllGenre, getGenreByID, updateGenre } from '../controllers/genreController.js'

const router = express.Router()

router.post("/create", verifyToken, createGenre)
router.put("/:id", verifyToken, updateGenre)
router.delete("/:id", verifyToken, deleteGenre)
router.get("/find/:id", verifyToken, getGenreByID)
router.get("/", verifyToken, getAllGenre)

export default router
