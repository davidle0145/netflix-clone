import User from '../models/User.js'
import CryptoJS from 'crypto-js'
import jwt from 'jsonwebtoken'

export const register = async (req,res) => {
    try {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: CryptoJS.AES.encrypt(req.body.password, process.env.SECRET_KEY).toString()
        })
        await newUser.save()
        res.status(201).json({
            success: true,
            message: 'Successfully created new User',
            data: newUser
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to created new User. Try again!'
        })
    }
}

export const login = async (req,res) => {
    const email = req.body.email
    try {
        const user = await User.findOne({email})
        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'Email is not correct!'
            })
        }

        const bytes  = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY)
        const originalPassword = bytes.toString(CryptoJS.enc.Utf8)
        if (originalPassword !== req.body.password) {
            return res.status(401).json({
                success: false,
                message: 'Password is not correct!'
            })
        }

        // hide password
        const {password, ...info} = user._doc
        const accessToken = jwt.sign(
            {   id: user._id,
                isAdmin: user.isAdmin }, 
            process.env.JWT_SECRET_KEY,
            { expiresIn: "10d"} 
        )

        res.status(200).json({
            success: true,
            message: 'Login Successful',
            data: info,
            accessToken
        })
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Failed to Login. Try again!'
        })
    }
}