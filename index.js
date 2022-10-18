import express from "express";
import cors from "cors";
import dotenv from "dotenv"
dotenv.config()

const server = express()

server.use(express.json())
server.use(cors())

server.get("/", (req, res) => {
    res.send("server it's on")
})

server.listen(process.env.PORT, () => console.log("Server listen on PORT 3003"))