import express from "express";
import subjectsRouter from './routes/subjects'

const app = express()
app.use(express.json())
app.use('/api/subjects', subjectsRouter)

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.listen(8000, () => {
    console.log("Server is running on port http://localhost:8000")
})