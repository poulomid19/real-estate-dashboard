import { useState } from "react";


const Amenities = ({value}) => {

    const tabs = Object.keys(value);
    const [activeTab, setActiveTab] = useState("Sports");
     const currentAmenities = value[activeTab] || [];
  return (
    <>
<section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6">Amenities</h2>

        <div className="flex gap-6 border-b mb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-2 font-medium ${
                activeTab === tab ? "border-b-2 border-red-500 text-red-500" : "text-gray-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>


        {/* Amenities List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {currentAmenities.map((item, index) => (
              <div key={index} className="flex items-center gap-2 text-gray-700">
                <span className="text-red-500 font-bold">✔</span> {item}
              </div>
            ))}
        </div>
      </div>
    </section>
    </>
  )
}

export default Amenities