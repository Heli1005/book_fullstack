import dotenv from "dotenv";

dotenv.config()

import express from "express";
import books_route from "./routes/books.js";
import cors from 'cors';
import user_route from "./routes/user.js";
import connectDB from "./db/connect.js";


const app = express()
const PORT = process.env.PORT || 5000
const MONGODB_URI = process.env.MONGODB_URI

console.log('MongoDB URI:', MONGODB_URI); // Log to debug
console.log('PORT:==>', process.env.PORT); // Log to debug

app.use(cors());
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Server running successfully...')
})

app.use('/api/books', books_route)
app.use('/api/user', user_route)

const start = async () => {
    try {
        await connectDB(MONGODB_URI)
        await app.listen(PORT, () => {
            console.log(`Server is running on ${PORT} port.`)
        })
    } catch (error) {
        console.log("error", error);
        process.exit(1); // Exit the process with failure code
    }
}

start()