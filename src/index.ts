import express from "express";

const app = express()
const router = express.Router()
app.use(express.json())
app.use("/api", router)

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.listen(8000, () => {
    console.log("Server is running on port http://localhost:8000")
})