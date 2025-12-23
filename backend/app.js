const express = require("express")
const app = express()
const mongoose = require("mongoose")
const setAdmin = require("./seedAdmin")
const cookieParser = require("cookie-parser");
app.use(cookieParser());
const cors = require("cors")
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true,               
}))
const projectRouter = require("./routes/route")

// const PORT = process.env.PORT
const dotenv = require("dotenv")
dotenv.config()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
  console.log("mongodb atlas connected successfully")
  setAdmin()
})
.catch((err)=>console.log(err))

app.use("/api", projectRouter)
app.listen(process.env.PORT, ()=>{
    console.log(`app listening at http://localhost:${process.env.PORT}`)
})