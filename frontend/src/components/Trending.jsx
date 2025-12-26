import { FaStar, FaMapMarkerAlt, FaHome, FaBuilding, FaBed } from "react-icons/fa";
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from "react-router-dom";
const Trending = ({ selectedCategory }) => {
    const navigate = useNavigate()
    const[trending,setTrending]= useState([])
    const fetchTrending = async () => {
    try {
     const res = await axios.get("https://real-estate-dashboard-ypyu.onrender.com/api/trending");
     console.log(res.data)
      setTrending(res.data.projects);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  useEffect(() => {
    fetchTrending();
  }, []);


    const normalize = (x) => (x ? x.toLowerCase().trim() : "");
  
  let filtered = trending.slice(0, 3);  //default

  if (selectedCategory === "residential") {
    filtered = trending.filter((item) => normalize(item.configuration.type) === "3bhk").slice(0, 3); 
  } else if (selectedCategory === "commercial") {
    filtered = trending.filter((item) => normalize(item.configuration.type) === "2bhk").slice(0, 3);
  }
  const clickhandler=(id)=>{
    navigate(`/products/${id}`)
  }
  return (
  <>
  <section className="py-16 bg-gray-50">
  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
    Trending Properties
  </h2>
  <p className="text-gray-500 mt-2 text-center mb-5">
    Explore what people are viewing the most this week.
  </p>
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 place-items-center py-5">
  {filtered.map((t, index) => (
    <div
      key={index}
      className="bg-white shadow-xl rounded-2xl overflow-hidden
        flex flex-col hover:shadow-2xl transition-all duration-300 w-80">
      {/* image  */}
      <div className="relative w-80 h-56">
        <img
          src={t.images[0]}
          className="w-full h-full object-cover"
        />

        <span className="absolute top-4 left-4 bg-red-600 text-white text-xs px-3 py-1 rounded-full">
          {"For Sale"}
        </span>
      </div>

      <div className="p-5 flex flex-col justify-between">
        <div>
          <h2 className="text-lg font-bold text-gray-900">{t.title}</h2>

          <div className="flex items-center gap-1 mt-1">
            <FaStar className="text-yellow-400" />
            <span className="text-sm text-gray-700">
              {t.rating || "5.0"} Rating
            </span>
          </div>

          <p className="text-lg font-semibold text-pink-600 mt-2">
            ₹ {t.priceRange}
          </p>

          <div className="flex items-center gap-3 mt-3 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <FaMapMarkerAlt /> {t.location}
            </span>
            <span className="flex items-center gap-1">
              <FaHome /> {t.configuration.size}
            </span>
          </div>

          <div className="flex items-center gap-3 mt-3 text-sm text-gray-600">
            <span className="flex items-center gap-1">
              <FaBuilding /> {t.developer.devname}
            </span>
            <span className="flex items-center gap-1">
              <FaBed /> {t.configuration.type}
            </span>
          </div>
        </div>
        <button className="mt-4 bg-red-500 text-white py-2 px-5 rounded-xl font-medium hover:bg-red-600 transition" onClick={()=>clickhandler(t._id)}>
          View Details
        </button>
      </div>
    </div>
  ))}
</div>
</section>
</>

  )
}

export default Trending