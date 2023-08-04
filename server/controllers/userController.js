import User from '../models/User.js'
import CryptoJS from 'crypto-js'

export const updateUser = async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        if (req.body.password) {
            req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString()
        }

        try {
            const updateUser = await User.findByIdAndUpdate(req.params.id, {
                $set: req.body
            }, {new:true})

            res.status(200).json({
                success: true,
                message: "Successfully updated info User",
                data: updateUser
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
            message: "You can update only your account!"
        })
    }
    
}

export const deleteUser = async (req, res) => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
        try {
            await User.findByIdAndDelete(req.params.id)
            res.status(200).json({
                success: true,
                message: "User has been deleted!",
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
            message: "You can delete only your account!"
        })
    }
}

export const getUserByID = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        const {password, ...info} = user._doc
        res.status(200).json({
            success: true,
            message: "Get info User successful!",
            data: info
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err
        })
    }

}

export const getAllUser = async (req, res) => {
    const query = req.query.new
    if (req.user.isAdmin) {
        try {// sort({_id:-1}): đảo ngược
            const users = query ? await User.find().sort({_id:-1}).limit(10) : await User.find()
            res.status(200).json({
                success: true,
                count: users.length,
                message: "Get All User successful!",
                data: users
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
            message: "You are not allowed to see all Users!"
        })
    }
}

export const getUserStats = async (req, res) => {
    const today = new Date()
    const lastYear = today.setFullYear(today.setFullYear() - 1)
    const monthsArray = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ]

    try {
        const data = await User.aggregate([
            {
                $project: {
                    month: {$month: "$createdAt"}
                }
            },
            {
                $group: {
                    _id: "$month",
                    total: {$sum:1}
                }
            }
        ])
        
        res.status(200).json({
            success: true,
            message: "Get User Stats successful!",
            data: data
        })

    } catch (err) {
        res.status(500).json({
            success: false,
            message: err
        })
    }

}
