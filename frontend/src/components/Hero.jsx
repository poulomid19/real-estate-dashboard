import React from 'react'

const Hero = ({selectedCategory, setSelectedCategory}) => {
  return (
    <>
  <section className="relative w-full h-screen">
      <div className="w-full py-32 px-10 pb-4 h-screen bg-fixed bg-center bg-cover flex flex-col justify-center items-center brightness-75" style={{ backgroundImage: "url('herosec.jpg')" }}>
       </div>      
        <div className="absolute inset-0 bg-black/40">
            <div className="relative z-20 flex flex-col items-start pt-24 px-10 max-w-4xl leading-tight">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight"> Discover your dream property<br />
          in <span className="text-red-500">INDIA</span>
          </h1>
              <div className="bg-white w-full rounded-xl shadow-lg mt-10 p-5">
      <div className="flex gap-3 items-center border-b pb-3">
        <button className="px-4 py-2 bg-red-500 text-white rounded-lg font-medium">
          Buy Property
        </button>
        <button className="px-4 py-2 text-gray-600 font-medium">
          Rent Property
        </button>
      </div>
      <div className="flex flex-col md:flex-row gap-4 mt-5">
        <select className="border p-3 rounded-lg w-full md:w-1/4" value={selectedCategory} onChange={(e)=>setSelectedCategory(e.target.value.toLocaleLowerCase())}>
        <option value="all">All</option>
          <option value="residential">Residential</option>
          <option value="commercial">Commercial</option>
        </select>
        <input type="text" placeholder="Search locality, landmark, project or builder" className="border p-3 rounded-lg flex-1 w-full" />
        <button className="bg-red-500 text-white px-8 py-3 rounded-lg font-medium">
          Search
        </button>
      </div>
    </div>
          </div>
          </div>
  </section>
    </>
  )
}

export default Hero