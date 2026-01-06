import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";



const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true, // it tells browser It is okay to send cookies between these two (FE AND BE) origins.
}))

app.use(express.json({limit: "16Kb"}));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());




export {app}