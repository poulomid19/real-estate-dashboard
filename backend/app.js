const express = require("express")
const app = express()
const mongoose = require("mongoose")
const setAdmin = require("./seedAdmin")
const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.use(express.json())
app.use(express.urlencoded({extended:true}))

const cors = require("cors")
app.use(cors({
  origin: "https://real-estate-dashboard-alpha.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true,               
}))
const projectRouter = require("./routes/route")

// const PORT = process.env.PORT
const dotenv = require("dotenv")
dotenv.config()


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