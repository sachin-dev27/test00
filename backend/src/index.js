import express from "express"
import dotenv from "dotenv"
import http from "http"
import { initSocket } from "./lib/socket.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import {connectdb} from "./lib/db.js"
import authRoutes from "./routes/user.route.js"
import messageRoutes from "./routes/message.route.js"

dotenv.config();

const app = express();
const server = http.createServer(app)
initSocket(server)
const PORT = process.env.PORT;
const allowedOrigins = [
    "http://localhost:5173",//for development
    "https://Starlit-Stationary.vercel.app"
]

app.use(cookieParser())
app.use(cors({
    origin:allowedOrigins ,
    credentials: true,
}))

app.use(express.json({ limit: "5mb" }))
app.use(express.json());

app.use("/api/auth", authRoutes)
app.use("/api/message", messageRoutes)

app.listen(PORT,()=>{
    console.log("The server is running on the port ",PORT)
    connectdb();
})