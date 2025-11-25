import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { assets, cityList } from '../assets/assets'

const Hero = () => {
  const [pickupDate, setPickupDate] = useState('')
  const [returnDate, setReturnDate] = useState('')
  const [pickupLocation, setPickupLocation] = useState('')

  const navigate = useNavigate()

  const handleSearch = (e) => {
    e.preventDefault()
    navigate(
      '/cars?pickupLocation=' + pickupLocation +
      '&pickupDate=' + pickupDate +
      '&returnDate=' + returnDate
    )
  }

  return (
    <div className='h-screen flex flex-col items-center justify-center gap-14 bg-light text-center'>
      <h1 className='text-4xl md:text-3xl font-semibold'>
        Your perfect car, just a click away.
      </h1>

      <form
        onSubmit={handleSearch}
        className='flex flex-col md:flex-row items-start md:items-center justify-between p-6
        rounded-lg md:rounded-full w-full max-w-3xl bg-white shadow-[0px_8px_20px_rgba(0,0,0,0.1)]'
      >
        <div className='flex flex-col md:flex-row items-start md:items-center gap-10 md:ml-8'>
          <div className='flex flex-col items-center gap-2'>
            <select
              required
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
            >
              <option value=''>Pickup Location</option>
              {cityList.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
            <p className='px-1 text-sm text-gray-500 items-center'>
              {pickupLocation ? pickupLocation : 'Please select Location'}
            </p>
          </div>

          <div className='flex flex-col items-center gap-2'>
            <label htmlFor='pickup-date'>Pick Up Date</label>
            <input
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              type='date'
              id='pickup-date'
              min={new Date().toISOString().split('T')[0]}
              className='text-sm text-gray-500'
              required
            />
          </div>

          <div className='flex flex-col items-center gap-2'>
            <label htmlFor='return-date'>Return Date</label>
            <input
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)}
              type='date'
              id='return-date'
              className='text-sm text-gray-500'
              required
            />
          </div>
        </div>

        <button
          type='submit'
          className='flex items-center justify-center gap-1 px-9 py-3 max-sm:mt-4
          bg-black hover:bg-black-dull text-white rounded-full cursor-pointer'
        >
          <img
            src={assets.search_icon}
            alt='search'
            className='brightness-200'
          />
          Search
        </button>
      </form>

      <img src={assets.maincar_car} alt='car' className='max-h-140' />
    </div>
  )
}

export default Hero