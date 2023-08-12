import Image from 'next/image'
import React from 'react'
import Count from './Count'

function Offer() {
  return (
    <div className='bg-black h-screen flex flex-col md:flex-row'>
      {/* text container */}
     <div className='flex-1 flex flex-col justify-center items-center text-center
     gap-8'>
      <h1 className=' text-white text-5xl font-bold
      xl:6xl     '>Deliciouse burgur and french fry</h1>
      <p className='text-white xl:text-xl'>
        progressively simplify effective 
      </p>
      <Count/>
      <button className='bg-red-500 text-white rounded-md py-3 px-6'>order now</button>
     </div>
     {/* image container */}
     <div className='flex-1 w-full relative'>
      <Image src="/offerproduct.png" alt="" fill className='object-contain'/>
     </div>
    </div>
  )
}

export default Offer
