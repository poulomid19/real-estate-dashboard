import Hero from './Hero';
import Trending from './Trending'
import { useState } from 'react';
const ParentFilter = () => {
    const [selectedCategory, setSelectedCategory] = useState("all");
  return (
    <>
       <div>
      <Hero
        selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <Trending selectedCategory={selectedCategory} />
    </div>
    </>
  )
}

export default ParentFilter