import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const DbConnect = async ()=>{
    try {
        const connection = await mongoose.connect(process.env.MONGO_URI);
        console.log(`The Database has been connnected to the server ${connection.connection.host}`)
    } catch (error) {
        console.log(error);
        process.exit(1); // exit the process 
    }
}