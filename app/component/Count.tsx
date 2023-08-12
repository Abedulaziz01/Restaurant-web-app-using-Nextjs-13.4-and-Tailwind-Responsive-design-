"use client"

import React from 'react'
import Countdown from 'react-countdown'

const endingdate = new Date("2023-8-9")
function Count() {

  return (
    <Countdown className='font-bold text-5xl text-yellow-400' date = {endingdate}/>
  )
}

export default Count
