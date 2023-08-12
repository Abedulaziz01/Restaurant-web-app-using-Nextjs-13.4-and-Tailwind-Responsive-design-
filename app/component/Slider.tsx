"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

const data =[
  {
    id:1,
    title:"always fresh and sweety ",
    Image :"/slide1.png",
  },
  {
    id:2,
    title:"full delivery service  ",
    Image :"/slide2.png",
  },
  {
    id:3,
    title:"one of the best piza ever  ",
    Image :"/slide3.jpg",
  }
]

function Slider() {
  const [currentSlide, setCurrentSlid] = useState(0);

  // useEffect( ()=>{
  //   const interval  =  setInterval(()=>{
  //     setCurrentSlid(((prev)=> (prev ===data.length-1 ? 0 : prev + 1)));
  //   },2000); 
  //   // then cleanup funnction to avaoid memeory leak
    
  //     return () => clearInterval(interval);
  // },);

  return (
    <div className='flex flex-col h-[calc(100vh-6rem)]  md:h-[calc(100vh-9rem)] lg:flex-row bg-fuchsia-50'>
      {/* text container */}
       
          <div className=' flex-1 flex items-center justify-center flex-col gap-8 text-red-500 font-bold '>
          <h1 className='text-5xl text-center uppercase p-4 md:p-10 md:text-6xl xl:text-7xl '>
           { data[currentSlide].title}
          </h1>
          <button className='bg-red-500 text-white py-4 px-8'>order now </button>
          </div>

          {/* image container */}
          <div className='w-full flex-1 relative  '>
            <Image src =   { data[currentSlide].Image} alt=""  fill className='object-cover'/>
          </div>



    </div>
    // image container 
  )
}

export default Slider
//  46 minute flex expalantion 