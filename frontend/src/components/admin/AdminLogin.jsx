import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
const AdminLogin = () => {
    const navigate = useNavigate()
     const [admin, setAdmin] = useState({
                email:"",
                password:""
            })
            const changeHandler=(e)=>{
               const {name,value} = e.target
               setAdmin((prev)=>{
                   return ({...prev, [name]:value})
               })
            }
            const submitHandler= async(e)=>{
              e.preventDefault()
                try {
                    const res = await axios.post("https://real-estate-dashboard-ypyu.onrender.com/api/adminLogin",admin, {
                withCredentials: true,
               })
                    setAdmin({name:"", password:""})
                if(res.status===200){
                    navigate("/admin/projects")
                }
                else{
                    alert("Invalid Credentials")
                }
                } catch (error) {
    if (error.response && error.response.status === 401) {
      alert(error.response.data.message);
    } else {
      alert("Server error");
    }
                }
            }
  return (
    <>
        <form onSubmit={submitHandler} className="flex flex-col w-full items-center justify-center space-y-4 p-6">
  <h2 className="text-2xl font-bold mb-4 text-center">Admin Login</h2>
  <input type="email" name="email" placeholder="Email" value={admin.email} onChange={changeHandler} className="w-[50vw] p-2 border rounded"/>
  <input 
    type="password" name="password" placeholder="Password" value={admin.password} onChange={changeHandler} className="w-[50vw] p-2 border rounded"/>

  <button 
    type="submit" 
    className="bg-blue-600 text-white py-2 rounded w-20 hover:bg-blue-700 transition">Submit</button>
</form>

    </>
  )
}

export default AdminLogin