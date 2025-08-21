import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"
import {connectdb} from "./lib/db.js"
import userRoute from "./routes/user.route.js"

dotenv.config();

const app = express();
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

app.listen(PORT,()=>{
    console.log("The server is running on the port ",PORT)
    connectdb();
})