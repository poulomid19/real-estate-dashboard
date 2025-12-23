import React from 'react'

const Dev = ({value}) => {
  return (
    <>
       <section className="py-10 bg-gray-50">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-semibold mb-4">
          Developer: {value.devname}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-6">
          <div>
            <p className="text-2xl font-bold text-red-500">{value.totalProjects}</p>
            <p className="text-gray-600">Total Projects</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-red-500">{value.totalYears}</p>
            <p className="text-gray-600">Total Years</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-red-500">{value.ongoingProjects}</p>
            <p className="text-gray-600">Ongoing Projects</p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Developer Logo */}
          <div className="w-32 shrink-0">
            <img src={value.logo} alt={value.name} className="w-full object-contain" />
          </div>

          {/* Developer Description */}
          <p className="text-gray-700 text-justify">
            {value.description}
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default Dev