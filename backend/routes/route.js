const express = require("express")
const router = express.Router()
const adminAuth = require("../middleware/adminAuth")
const{createProject, getAllProjects, getProjectById, updateProject, deleteProject,getTrending,getProductById,logoutAdmin} = require("../controller/projects")
const loginAdmin = require("../controller/adminlogin")
const admin = require("../model/admin")
const userReq = require("../controller/user")
//protected routes
router.get("/projects",adminAuth, getAllProjects)
router.post("/addproject",adminAuth,createProject)
router.get("/projects/:id",adminAuth,getProjectById)
router.put("/projects/:id",adminAuth,updateProject)
router.delete("/projects/:id",adminAuth,deleteProject)
router.post("/admin/logout", adminAuth,logoutAdmin)

//public routes
router.get("/", (req,res)=>{
    res.json({message: "Real Estate Dashboard"})
})
router.post("/adminLogin",loginAdmin)
router.get("/trending",getTrending)
router.get("/products/:id",getProductById)
router.post("/message", userReq)
module.exports = router