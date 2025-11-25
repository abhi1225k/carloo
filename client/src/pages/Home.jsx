import React from 'react'
import Hero from '../components/Hero'
import FeaturedSection from '../components/FeaturedSection'
import Baner from '../components/Baner'
import Testimonial from '../components/Testimonial'
import NewsLetter from '../components/NewsLetter'

const Home = () => {
  return (
    <div>
      <>
        <Hero/>
        <FeaturedSection/>
        <Baner/>
        <Testimonial/>
        <NewsLetter/>
      </>
    </div>
  )
}

export default Home
