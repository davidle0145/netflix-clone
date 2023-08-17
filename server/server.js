import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

import authRoute from './routes/auth.js'
import listRoute from './routes/lists.js'
import movieRoute from './routes/movies.js'
import userRoute from './routes/users.js'
import genreRoute from './routes/genres.js'

dotenv.config()
const app = express()
const port = process.env.PORT || 4001

// database connection
const connect = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser:true,
            useUnifiedTopology:true,
        })
        console.log('MongoDB database connected');

    } catch (err) {
        console.log('MongoDB database connection failed');
    }
}

// middleware
app.use(express.json())


// routers
app.use("/api/auth", authRoute)
app.use("/api/lists", listRoute)
app.use("/api/movies", movieRoute)
app.use("/api/users", userRoute)
app.use("/api/genres", genreRoute)


//
app.get('/', (req,res) => {
    res.send("Hello World")
})

//
app.listen(port, () => {
    connect()
    console.log(`Server started at http://localhost:${port}`);
})
