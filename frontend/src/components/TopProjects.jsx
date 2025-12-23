import React from 'react'

const TopProjects = () => {
   const navigate = useNavigate()
  const [trending, setTrending] = useState([])

  const fetchProject = async()=>{
    try {
      const res = await axios.get("http://localhost:3000/api/trending",{
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
  return (
    <>
       
    </>
  )
}

export default TopProjects