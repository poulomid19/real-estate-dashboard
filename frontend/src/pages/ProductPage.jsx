import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import axios from 'axios'
import About from '../components/About'
import Amenities from '../components/Amenities'
import Dev from '../components/Dev'
import Footer from '../components/Footer'
const ProductPage = () => {
  const {id} = useParams()
  const[product, setProduct] = useState()
  const [loading, setLoading] = useState(true);
  const fetchProduct= async()=>{
    try {
        const res = await axios.get(`https://real-estate-dashboard-ypyu.onrender.com/api/products/${id}`);
        // console.log(res.data)
        setProduct(res.data.product); 
        setLoading(false);
      } catch (error) {
        console.error("Error fetching product:", error);
        setLoading(false);
      }
  }
  useEffect(()=>{
   fetchProduct()
  },[id])

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (!product) return <div className="text-center mt-10">Product not found</div>;
  return (
    <>
     <Navbar/>
      <div className="max-w-7xl mx-auto px-4 py-10">
  {/* HERO SECTION */}
  <div className="relative rounded-xl overflow-hidden shadow-lg h-105">
    <img src={product.images[0]} className="w-full h-full object-cover" />
    {/* Overlay */}
    <div className="absolute inset-0 bg-black/40" />
    {/* Content */}
    <div className="absolute bottom-8 left-8 text-white">
      <h1 className="text-3xl font-bold mb-2">{product.title}</h1>
      <p className="flex items-center gap-2 text-gray-200">
        <span className="text-lg">📍 {product.location}</span>
      </p>
      <p className="text-2xl font-semibold mt-3">
        ₹58L - ₹69L
      </p>
      <button className="mt-5 bg-linear-to-r from-rose-500 to-pink-500 px-6 py-3 rounded-full font-semibold shadow-xl hover:opacity-90">
        📞 Instant Call Back
      </button>
    </div>
  </div>
  {/* PROJECT HIGHLIGHTS */}
  <h2 className="text-2xl font-bold mt-12 mb-6">Project Highlights</h2>
  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
    {/* Card */}
    <div className="p-5 bg-rose-500 rounded-xl shadow-md">
      <p className="text-white">Possession Date</p>
      <p className="text-lg font-semibold mt-1 text-white">{product.highlights.possessionDate}</p>
    </div>
    <div className="p-5 bg-rose-500 rounded-xl shadow-md">
      <p className="text-white">Status</p>
      <p className="text-lg font-semibold mt-1 text-white">{product.highlights.stage}</p>
    </div>
    <div className="p-5 bg-rose-500 rounded-xl shadow-md">
      <p className="text-white">RERA ID</p>
      <p className="text-lg font-semibold mt-1 text-white">{product.highlights.reraId}</p>
    </div>
    <div className="p-5 bg-rose-500 rounded-xl shadow-md">
      <p className="text-white">Floor Plans</p>
      <p className="text-lg font-semibold mt-1 text-white">{product.highlights.floor}</p>
    </div>
  </div>
  {/* IMAGE GALLERY */}
  <h2 className="text-2xl font-bold mt-12 mb-6">Gallery</h2>
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    {/* <img className="rounded-lg shadow-md object-cover" src="img1.webp" /> */}
    <img className="rounded-lg shadow-md object-cover" src={product.images[1]} />
    <img className="rounded-lg shadow-md object-cover" src={product.images[1]} />
  </div>

</div>

<About about={product.about}/>
<Amenities value = {product.amenities}/>
<Dev value={product.developer}/>
<Footer/>
    </>
  )
}

export default ProductPage