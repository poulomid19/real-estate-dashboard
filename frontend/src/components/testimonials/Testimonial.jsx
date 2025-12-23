import testimonials from './reviews'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Testimonial = () => {
  return (
    <>
       <section className="py-16 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        What Our Clients Say
      </h2>

      <div className="max-w-5xl mx-auto px-4">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
        //   pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          spaceBetween={30}
          slidesPerView={1}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center">
                <img
                  src={`https://ui-avatars.com/api/?name=${t.name}&background=random&color=fff`}
                  alt={t.name}
                  className="w-20 h-20 rounded-full object-cover mb-4"
                />

                <p className="text-gray-600 mb-4 text-lg leading-relaxed">
                  "{t.review}"
                </p>

                <h3 className="text-xl font-semibold text-gray-800">{t.name}</h3>
                <p className="text-sm text-gray-500">{t.role}</p>

                <div className="mt-3 flex gap-1 text-yellow-400">
                  {"⭐".repeat(t.rating)}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
    </>
  )
}

export default Testimonial