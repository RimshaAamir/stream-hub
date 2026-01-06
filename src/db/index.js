import mongoose from "mongoose";

import { DB_NAME } from "../constants.js";

const connectDB = async () => {
    try {
        //mongoose.connect() returns a Mongoose instance containing information about the connection.
        const connectionInstance = await mongoose.connect
        (`${process.env.MONGODB_URI}/${DB_NAME}`); 
            console.log(`MongoDB connection established! ${connectionInstance.connection.host}`)

        
    } catch (error) {
        console.log("Database connection Failed!", error)
        process.exit(1); // can use throw error but node provides ref of process 
    }
}

export default connectDB;