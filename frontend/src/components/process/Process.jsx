import process from './processing'

export const Process = () => {
  return (
    <>
       <section className="bg-white py-16">
  <div className="max-w-7xl mx-auto px-6 text-center">

    <h2 className="text-3xl md:text-4xl font-bold mb-4">
      How It <span className="text-red-500">Works</span>
    </h2>
    <p className="text-gray-600 max-w-xl mx-auto mb-12">
      Your journey to finding the perfect property made simple and seamless.
    </p>

    <div className="grid md:grid-cols-3 gap-8">
       {process.map((item,index)=>(
            <div className="p-8 rounded-2xl shadow-lg border hover:shadow-2xl transition" key={index}>
        <div className="w-14 h-14 bg-red-500 text-white flex items-center justify-center
                        rounded-full text-2xl font-bold mx-auto mb-6">
          {item.num}
        </div>
        <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
        <p className="text-gray-600">
         {item.subtitle}
        </p>
      </div>
       )
       )}
    </div>
  </div>
</section>

    </>
  )
}
