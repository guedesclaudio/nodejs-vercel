import express from "express";
import cors from "cors";

const server = express()

server.use(express.json())
server.use(cors())

server.get("/", (req, res) => {
    res.send("server it's on")
})

server.listen(3003, () => console.log("Server listen on PORT 3003"))