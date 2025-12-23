const Project = require("../model/model")

exports.createProject = async(req,res)=>{
    try {
        const project = new Project(req.body)
        await project.save()
        res.status(201).json({
            success:true,
            message: "Project created sccessfully",
            project})

    } catch (error) {
      res.status(500).json({success:false, message:error.message})  
    }
}
exports.getAllProjects = async(req,res)=>{
  try {
    const projects = await Project.find()
    res.status(200).json({success:true, projects})
  } catch (error) {
    res.status(500).json({success:false, message:error.message})  
  }
}
exports.getProjectById = async(req,res)=>{
  try {
    const id = req.params.id
    const project = await Project.findById(id)
    res.status(200).json({success:true, project})
  } catch (error) {
    res.status(500).json({success:false, message:error.message})  
  }
}
exports.updateProject = async(req,res)=>{
  try {
    const id = req.params.id
    const project = await Project.findByIdAndUpdate(id,req.body,{new:true})
    res.status(200).json({success:true, project})
  } catch (error) {
    res.status(500).json({success:false, message:error.message})  
  }
}
exports.deleteProject = async(req,res)=>{
  try {
    const id = req.params.id
    await Project.findByIdAndDelete(id)
    res.status(200).json({
        success:true,
        message:"Project deleted successfully"
    })
  } catch (error) {
    res.status(500).json({success:false,message:error.message})
  }
}
exports.getTrending = async(req,res)=>{
  try {
    const trendProjects = await Project.find().limit(3)
    res.status(200).json({ projects: trendProjects })
  } catch (error) {
    res.status(500).json({success:false, message:error.message})  
  }
}
exports.getProductById = async(req,res)=>{
  try {
    const id = req.params.id
    const product = await Project.findById(id)
    res.status(200).json({success:true, product})
  } catch (error) {
    res.status(500).json({success:false, message:error.message})  
  }
}

exports.logoutAdmin= async(req,res)=>{
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
    });
    
    return res.status(200).json({ success: true, message: "Logged out successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}