import './App.css'
import AdminPage from './pages/AdminPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminLogin from './components/admin/AdminLogin'
import Home from './pages/Home'
import ProductPage from './pages/ProductPage'
import AdminEditProject from './components/admin/AdminEdit'

function App() {

  return (
    <>
       <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/admin/*" element={<AdminPage />} />
        <Route path='/admin/login' element={<AdminLogin/>}/>
        <Route path='/products/:id' element={<ProductPage/>}/>
        <Route path="/admin/edit-project/:id" element={<AdminEditProject />}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
