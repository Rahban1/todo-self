import express from "express";
import cors from "cors"
import axios from "axios"

const app = express()

app.use(express.json());
app.use(cors())

app.get('/',(req,res)=>{
    res.send("hello from backend")
})

app.listen(3000)