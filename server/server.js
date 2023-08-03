import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()
const app = express()
const port = process.env.PORT || 5000

// middleware
app.use(express.json())


// routers



//
app.get('/', (req,res) => {
    res.send("Hello World")
})

//
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
})
