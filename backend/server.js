import express from "express";
import dotenv from "dotenv";
import books_route from "./routes/books.js";
import connectDB from "./db/connect.js";



dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('Server running successfully...')
})

app.use('/api/books', books_route)

const start = async () => {
    try {
       await connectDB()
       await app.listen(PORT, () => {
            console.log(`Server is running on ${PORT} port.`)
        })
    } catch (error) {
        console.log("error", error);
    }
}

start()