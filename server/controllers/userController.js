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
                message: "Failed to update User. Try again"
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
    
   
}

export const getUserByID = async (req, res) => {

    
}

export const getAllUser = async (req, res) => {

    
}
