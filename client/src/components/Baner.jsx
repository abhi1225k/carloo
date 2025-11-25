import React from 'react'
import { assets } from '../assets/assets'

const Baner = () => {
  return (
    <div className='flex flex-col md:flex-row md:items-start items-center justify-between px-8 md:pl-14 pt-10 bg-gradient-to from-blue-500 to-purple-600 p-6 max-w-6xl mx-3 md:mx-auto rounded-2xl overflow-hidden'>

    <div className='text-black'>
        <h2 className='text-3xl font-medium'>Do you own a Luxury car?</h2>
        <p className='mt-2'>No,Then come to our site and see how affordable ridies we have gaves you!</p>
        <p className='max-w-130'>Whether you need a car for a day, a weekend trip, or a long journey, rental companies offer a variety of options to match your budget and style. It’s a convenient, reliable, and hassle-free solution for modern transportation.</p>
        <button className='px-6 py-2 bg-black hover:bg-slate-100 transition-all text-white rounded-lg text-sm mt-4 cursor-pointer'>List your cars</button>
    </div>
      <img src={assets.mastang} alt='car' className='max-h-70 mt-0'/>

    </div>
  )
}

export default Baner
