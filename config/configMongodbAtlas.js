import {mongodb} from "./configServer.js"
import mongoose from "mongoose"

export default async function connectDB() {
    try {
        // Adding connection options
        await mongoose.connect(mongodb);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log('Something went wrong while connecting to MongoDB');
        console.error(error.message);
        process.exit(1);  // Exit process with failure code
    }
}





