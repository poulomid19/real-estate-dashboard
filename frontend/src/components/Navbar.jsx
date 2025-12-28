import logo from "../assets/logo.webp"
import { Globe, Phone, MessageCircle, ChevronDown } from "lucide-react";
const Navbar = () => {
  return (
    <>
      <nav className="fixed top-0 w-full backdrop-blur-xl bg-black/40 border-b border-white/10 
                px-8 py-4 flex items-center justify-between z-50">

  <div className="flex items-center gap-3">
    <img src={logo} className="h-10" alt="Logo" />
    <span className="text-white text-xl font-semibold tracking-wide hidden md:block">
      InvestHub
    </span>
  </div>

  <div className="relative hidden md:block group">
  <button className="flex items-center gap-2 text-white font-medium bg-white/10 px-4 py-2
                     rounded-full backdrop-blur-md border border-white/20 
                     hover:bg-white/20 transition">
    Select City
    <ChevronDown className="w-4 h-4" />
  </button>


  <div className="absolute hidden group-hover:block bg-white text-black rounded-xl shadow-xl 
                  w-48 p-3 mt-2">
    {['Delhi', 'Mumbai', 'Bangalore', 'Pune'].map((city) => (
      <p key={city} className="px-3 py-2 rounded hover:bg-gray-100 cursor-pointer">
        {city}
      </p>
    ))}
  </div>
</div>


<div className="flex items-center gap-6">

  <button className="text-white hover:text-red-400 transition">
    <Globe className="w-6 h-6" />
  </button>

  <button className="text-white hover:text-red-400 transition">
    <Phone className="w-6 h-6" />
  </button>

  <button className="text-white hover:text-red-400 transition">
    <MessageCircle className="w-6 h-6" />
  </button>

</div>
</nav>
    </>
  )
}

export default Navbar