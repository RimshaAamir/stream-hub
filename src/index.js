import mongoose from "mongoose";
import { DB_NAME } from "./constants";

import express from "express";
const app = express()

// connection with DB
function connectDB(){}
connectDB();



// IFFI better approach, sometimes IFFI starts withs ; for cleaning purposes

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        // when db connection established then we have listners 
        app.on("error", (error) => {
            console.log("Express App not able to talk to Database");
            throw error;
        }); // if express app is having issues to connect with db

        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port: ${process.env.PORT}`)
        })
    } catch (error) {
        console.error("Database connection Failed!", error)
        throw error
    }
}) ()
