import arr from './city'

const TopCities = () => {
  return (
    <>
    <section className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-6">
    <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
      Top <span className="text-red-500">Cities</span> To Explore
    </h2>
    
    <div className="grid md:grid-cols-3 gap-6">
      {arr.map((city,index)=>(
        <div key={index} className="relative h-64 rounded-2xl overflow-hidden group cursor-pointer">
          {/* Background Image */}
          <img 
            src={city.img}
            alt={city.name}
            className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>

          {/* Text Overlay */}
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-2xl font-semibold">{city.name}</h3>
            <p className="text-sm opacity-90">{city.stats}</p>
          </div>
        </div>
      ))}
      </div>
      </div>
      </section>
    </>
  )
}

export default TopCities