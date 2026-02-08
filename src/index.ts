import express from "express";
import subjectsRouter from './routes/subjects'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:5173',
    methods: ['GET','POST', 'PUT', 'DELETE'],
    credentials: true
}))
app.use('/api/subjects', subjectsRouter)

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.listen(8000, () => {
    console.log("Server is running on port http://localhost:8000")
})