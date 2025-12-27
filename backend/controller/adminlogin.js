const Admin = require("../model/admin")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const adminLogin = async(req,res)=>{
     const {email,password} = req.body
    try {
       const admin = await Admin.findOne({email})
       if(!admin) return res.status(401).json({message:"Invalid Credentials"})
        const match = await bcrypt.compare(password,admin.password)
      if(!match) return res.status(401).json({mssage:"Invalid Credentials"})

      const token = jwt.sign(
        {id: admin._id},
        "secretkey123"
      )
    res.cookie("token", token, {
  httpOnly: true,
  secure: true,
  sameSite: "none",
});
    res.status(200).json({ message: "Login successful" });

    } catch (error) {
      res.status(500).json({message:"Server error"})  
    }
}
module.exports= adminLogin
