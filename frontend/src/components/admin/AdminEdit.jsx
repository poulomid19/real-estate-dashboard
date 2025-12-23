import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const AdminEdit = () => {
    const navigate = useNavigate()
   const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const res = await axios.get(`http://localhost:3000/api/products/${id}`);
        // console.log(res.data)
        setProject(res.data.project);
      } catch (err) {
        console.error("Error fetching project:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchProject();
  }, [id]);

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:3000/api/projects/${id}`, project,{
        withCredentials: true,
      });
      alert("Project updated successfully!");
      navigate("/admin/projects")
    } catch (err) {
      console.error("Error updating project:", err);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!project) return <p>Project not found</p>;
  return (
    <>
        <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Edit Project</h1>
      <input
        type="text"
        value={project.title}
        onChange={(e) => setProject({ ...project, title: e.target.value })}
        className="border p-2 w-full mb-4"
      />
      <input
        type="text"
        value={project.location}
        onChange={(e) => setProject({ ...project, location: e.target.value })}
        className="border p-2 w-full mb-4"
      />
          <input
        type="text"
        value={project.priceRange}
        onChange={(e) => setProject({ ...project, price: e.target.value })}
        className="border p-2 w-full mb-4"
      />
    
      <button
        onClick={handleUpdate}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Save Changes
      </button>
    </div>
    </>
  )
}

export default AdminEdit