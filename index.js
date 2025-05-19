import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.get("/",(req,res)=>{
    res.status(200).send("Welcome to our Back End");
})

const port = process.env.PORT || 4000;

app.listen(port,()=>{
    console.log(`Server started and running on port ${port}`);
})