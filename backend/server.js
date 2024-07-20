import express from "express";
import dotenv from "dotenv";

dotenv.config()

const app = express()
const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('Server running successfully...')
})

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`Server is running on ${PORT} port.`)
        })
    } catch (error) {
        console.log("error", error);
    }
}

start()