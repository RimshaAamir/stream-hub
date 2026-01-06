// it is fine but consistency issues with require and import statements 
// require('dotenv').config({path: './env'}); 


import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({          // will use it with the experimental feature in pkg.json
    path: './env'
})

connectDB();






// import express from "express";
// const app = express()

// // connection with DB
// function connectDB(){}
// connectDB();


// // IFFI better approach, sometimes IFFI starts withs ; for cleaning purposes

// (async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         // when db connection established then we have listners 
//         app.on("error", (error) => {
//             console.log("Express App not able to talk to Database");
//             throw error;
//         }); // if express app is having issues to connect with db

//         app.listen(process.env.PORT, () => {
//             console.log(`App is listening on port: ${process.env.PORT}`)
//         })
//     } catch (error) {
//         console.error("Database connection Failed!", error)
//         throw error
//     }
// }) ()
