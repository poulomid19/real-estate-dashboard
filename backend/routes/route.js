const express = require("express")
const router = express.Router()
const adminAuth = require("../middleware/adminAuth")
const{createProject, getAllProjects, getProjectById, updateProject, deleteProject,getTrending,getProductById,logoutAdmin} = require("../controller/projects")
const loginAdmin = require("../controller/adminlogin")
const admin = require("../model/admin")

//protected routes
router.get("/projects",adminAuth, getAllProjects)
router.post("/addproject",adminAuth,createProject)
router.get("/projects/:id",adminAuth,getProjectById)
router.put("/projects/:id",adminAuth,updateProject)
router.delete("/projects/:id",adminAuth,deleteProject)
router.post("/admin/logout", adminAuth,logoutAdmin)

//public routes
router.post("/adminLogin",loginAdmin)
router.get("/trending",getTrending)
router.get("/products/:id",getProductById)
module.exports = router