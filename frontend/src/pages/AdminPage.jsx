import { Routes, Route } from 'react-router-dom'
import Navbar from '../components/admin/Navbar'
import ProjectForm from '../components/admin/ProjectForm'
import Sidebar from '../components/admin/Sidebar'
import Projects from '../components/admin/Projects'
const AdminPage = () => {
  return (
    <>
    <Navbar/>
    <div className="flex">
        <div className="w-[20%]">
          <Sidebar/>
          </div>
          <div className='w-[80%]'>
         <Routes>
          <Route index element={<Projects/>} />
          <Route path="projects" element={<Projects/>}/>
          <Route path="add-project" element={<ProjectForm />} />
        </Routes>
        </div>
    </div>
    </>
  )
}

export default AdminPage