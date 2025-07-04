import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { DbConnect } from "./config/Db.js";
import mainRouter from './routes/index.js'

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors())
app.use(express.json());

app.use("/api/v1",mainRouter)

app.listen(PORT,()=>{
    DbConnect();
    console.log(`The server is running on port :${PORT}`)
})