import Movie from '../models/Movie.js'

export const createMovie = async (req, res) => {
    if (req.user.isAdmin) {
        const newMovie = new Movie(req.body)
        try {
            const savedMovie = await newMovie.save()
            res.status(201).json({
                success: true,
                message: "Successfully created new Movie",
                data: savedMovie
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

export const updateMovie = async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const updatedMovie = await Movie.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, {new:true})
            res.status(200).json({
                success: true,
                message: "Successfully updated info Movie",
                data: updatedMovie
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

export const deleteMovie = async (req, res) => {
    if (req.user.isAdmin) {
        try {
            await Movie.findByIdAndDelete(req.params.id)
            res.status(200).json({
                success: true,
                message: "Movie has been deleted!",
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

export const getMovieByID = async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id)
        res.status(200).json({
            success: true,
            message: "Get movie successful",
            data: movie
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err
        })
    }
}

export const getRandomMovie = async (req, res) => {
    const type = req.query.type
    let movie
    try {
        if (type === "series") {
            movie = await Movie.aggregate([
                { $match: {isSeries: true}},
                { $sample: {size: 1}}
            ])
        } else {
            movie = await Movie.aggregate([
                { $match: {isSeries: false}},
                { $sample: {size: 1}}
            ])
        }
        res.status(200).json(movie)

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err
        })
    }
}

export const getAllMovie = async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const movies = await Movie.find()
            res.status(200).json({
                success: true,
                count: movies.length,
                message: "Get All Movie Successful",
                data: movies.reverse()
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
