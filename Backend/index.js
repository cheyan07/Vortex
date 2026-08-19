// const express = require('express');
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import connectDB from "./config/database.js";
import userRoute from "./routes/userRoute.js";
import messageRoute from "./routes/messgeRoute.js";


dotenv.config({});

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cookieParser());

const corsOption={
    origin:'http://localhost:3000',
    credentials:true
};

app.use(cors(corsOption));
app.use("/api/v1/user",userRoute);
app.use("/api/v1/message",messageRoute);

app.listen(PORT,()=>{
    connectDB();
    console.log(`Server listen at prot ${PORT}`);
});