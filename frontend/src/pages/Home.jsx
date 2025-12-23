import TopCities from '../components/cities/TopCities'
import Footer from '../components/Footer'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import ParentFilter from '../components/ParentFilter'
import { Process } from '../components/process/Process'
import Testimonial from '../components/testimonials/Testimonial'
import Trending from '../components/Trending'

const Home = () => {
  return (
    <>
       <Navbar/>
        <ParentFilter/>
       <Process/>
       <TopCities/>
       {/* <Trending/> */}
       <Testimonial/>
       <Footer/>
    </>
  )
}

export default Home