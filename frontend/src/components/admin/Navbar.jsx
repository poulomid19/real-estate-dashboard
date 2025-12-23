import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  const clickHandler = async()=>{
   try {
      await axios.post("http://localhost:3000/api/admin/logout", {}, { withCredentials: true });
      alert("logged out successfully")
      navigate("/");
    } catch (err) {
      console.error("Error logging out:", err);
      navigate("/");
    }
  };
  return (
    <>
       <nav className="flex justify-between p-4 bg-gray-100">
  <h1 className="font-semibold text-lg">Admin Dashboard</h1>
  <div className="flex items-center gap-4">
    <span>Hi, Admin</span>
    <button className="bg-blue-600 text-white px-3 py-1 rounded" onClick={clickHandler}>
      Logout
    </button>
  </div>
</nav>
<hr className='border-t-2 border-gray-300'/>
    </>
  )
}
export default Navbar