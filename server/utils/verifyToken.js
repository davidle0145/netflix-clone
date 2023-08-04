import jwt from 'jsonwebtoken'

export const verifyToken = (req, res, next) => {
    const authHeader = req.headers.token
    if (authHeader) {
        const token = authHeader.split(" ")[1]
        jwt.verify(token, process.env.JWT_SECRET_KEY, (err,user) => {
            if (err) {
                res.status(403).json({
                    success: false,
                    message: "Token is Invalid!"
                })
            }
            req.user = user
            next()
        })
    } else {
        return res.status(401).json({
            success: false,
            message: "You are not authenticated!"
        })
    }
}
