import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Projects = () => {
  const navigate = useNavigate()
  const [project, setProject] = useState([])

  const fetchProject = async()=>{
    try {
      const res = await axios.get("https://real-estate-dashboard-ypyu.onrender.com/api/projects",{
        withCredentials: true,
      })
      setProject(res.data.projects)
    }  catch (error) {
        if (error.response && error.response.status === 401) {
          navigate("/admin/login");
        } else {
          alert("Server error, try again later");
        }
      }
  }
  const handleDelete =async(id)=>{
    try {
      await axios.delete(`https://real-estate-dashboard-ypyu.onrender.com/api/projects/${id}`, {
          withCredentials: true,
        })
      setProject(project.filter((p) => p._id !== id));
    }catch (error) {
        if (error.response && error.response.status === 401) {
          alert("Unauthorized: Please login as admin");
          navigate("/admin/login");
        } else {
          alert("Failed to delete project");
        }
      }
  }
  useEffect(()=>{
    fetchProject()
  },[])
   const clickhandler=(id)=>{
    navigate(`/products/${id}`)
  }
  return (
    <>
      <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>

      {project.length === 0 ? (
        <p className="text-gray-500">No projects found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {project.map((p) => (
            <div
              key={p._id}
              className="border rounded-lg shadow-md p-4 hover:shadow-lg transition"
            >
              <h2 className="text-xl font-semibold mb-2">{p.title}</h2>
              <p className="text-gray-700">📍 Location: {p.location}</p>
              <p className="text-gray-700">💰 Price Range: {p.priceRange}</p>
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mx-2" onClick={()=>clickhandler(p._id)}>
                View Details
              </button>
              <button
              className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mx-2"
              onClick={() => navigate(`/admin/edit-project/${p._id}`)}
            >
              Edit
            </button>

            <button
              className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              onClick={() => handleDelete(p._id)}
            >
              Delete
            </button>
            </div>
          ))}
        </div>
      )}
    </div>
    </>
  )
}

export default Projects