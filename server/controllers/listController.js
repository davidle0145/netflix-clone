import List from '../models/List.js'

export const createList = async (req, res) => {
    if (req.user.isAdmin) {
        const newList = new List(req.body)
        try {
            const savedList = await newList.save()
            res.status(201).json({
                success: true,
                message: "Successfully created new List",
                data: savedList
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

export const updateList = async (req, res) => {
    if (req.user.isAdmin) {
        try {
            const updatedList = await List.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, {new:true})
            res.status(201).json({
                success: true,
                message: "Successfully updated info List",
                data: updatedList
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

export const deleteList = async (req, res) => {
    if (req.user.isAdmin) {
        try {
            await List.findByIdAndDelete(req.params.id)
            res.status(201).json({
                success: true,
                message: "Successfully deleted List",
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

export const getAllList = async (req, res) => {
    const typeQuery = req.query.type
    const genreQuery = req.query.genre
    let list = []
    try {
        if (typeQuery) {
            if (genreQuery) {
                list = await List.aggregate([
                    {$sample: {size:10}},
                    {$match: {
                        type: typeQuery,
                        genre: genreQuery
                    }}
                ])
            } else {
                list = await List.aggregate([
                    {$sample: {size:10}},
                    {$match: {type: typeQuery}}
                ])
            }

        } else {
            list = await List.aggregate([
                {$sample: {size:10}}
            ])
        }
        res.status(200).json({
            success: true,
            count: list.length,
            message: "Successfully get All List",
            data: list
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: err
        })
    }

}
