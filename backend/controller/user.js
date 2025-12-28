const userReq = require("../model/callback")

const userCallback = async()=>{
  try {
    const {name, email,phone,message} = req.body
    await userReq.create({name, email,phone,message})
    res.json({message: "message sent successfulyy"})
  } catch (error) {
    res.json({message: error})
  }
}
module.exports = {userCallback}