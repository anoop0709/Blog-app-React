import bodyparser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import postRouter from "./Routes/posts.js"
dotenv.config();


const app = express();

app.use(bodyparser.json({limit:"30mb",extended:"true"}))
app.use(bodyparser.urlencoded({limit:"30mb",extended:"true"}))
app.use(cors());
app.use('/posts',postRouter)

mongoose.connect(process.env.mongo_url).then((result)=>{
app.listen(3001);
console.log("db connected");
}).catch((err)=>{
console.log(err);
})
mongoose.set('strictQuery',false)

