const bcrypt = require("bcrypt")
const adminSchema = require("./model/admin")
const setAdmin = async()=>{
    try {
        const adminExist = await adminSchema.findOne({email:"admin123@example.com"})
        if(!adminExist){
         const hashedPassword = await bcrypt.hash("admin@123", 10)
            await adminSchema.create({
            email: "admin123@example.com",
            password: hashedPassword
        })
        console.log("admin created successfully")
        }
       else{
        console.log("admin already exist")
       }
    } catch (error) {
        console.log("error:", error)
    }
}
module.exports = setAdmin