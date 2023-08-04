import express from 'express'
import { verifyToken } from '../utils/verifyToken.js'
import { createMovie, deleteMovie, getAllMovie, getMovieByID, getRandomMovie, updateMovie } from '../controllers/movieController.js'

const router = express.Router()

router.post("/create", verifyToken, createMovie)
router.put("/:id", verifyToken, updateMovie)
router.delete("/:id", verifyToken, deleteMovie)
router.get("/find/:id", getMovieByID)
router.get("/random", getRandomMovie)
router.get("/", verifyToken, getAllMovie)

export default router
