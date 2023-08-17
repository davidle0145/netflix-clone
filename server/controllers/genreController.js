import Genre from '../models/Genre.js'

export const createGenre = async (req, res) => {
    if (req.user.isAdmin) {
        const newGenre = new Genre(req.body)
        try {
            const savedGenre = await newGenre.save()
            res.status(201).json({
                success: true,
                message: "Successfully created new Genre",
                data: savedGenre
            })
        } catch (err) {
            res.status(500).json({
                success: false,
                message: err
            })
        }
    } else {
        res.status(403).json({
            success: false,
            message: "You are not allowed!"
        })
    } 
}

export const updateGenre = async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const updatedGenre = await Genre.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, {new:true})
            res.status(201).json({
                success: true,
                message: "Successfully updated info Genre",
                data: updatedGenre
            })
        } catch (err) {
            res.status(500).json({
                success: false,
                message: err
            })
        }
    } else {
        res.status(403).json({
            success: false,
            message: "You are not allowed!"
        })
    } 
}

export const deleteGenre = async (req, res) => {
    if (req.user.isAdmin) {
        try {
            await Genre.findByIdAndDelete(req.params.id)
            res.status(201).json({
                success: true,
                message: "Successfully deleted Genre",
            })
        } catch (err) {
            res.status(500).json({
                success: false,
                message: err
            })
        }
    } else {
        res.status(403).json({
            success: false,
            message: "You are not allowed!"
        })
    } 
}

export const getGenreByID = async (req, res) => {
    try {
        const genre = await Genre.findById(req.params.id)
        res.status(200).json({
            success: true,
            message: "Get movie successful",
            data: genre
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err
        })
    }
}

export const getAllGenre = async (req, res) => {
    try {
        const genres = await Genre.find()
        res.status(200).json({
            success: true,
            count: genres.length,
            message: "Successfully get All Genre",
            data: genres
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err
        })
    }
}
