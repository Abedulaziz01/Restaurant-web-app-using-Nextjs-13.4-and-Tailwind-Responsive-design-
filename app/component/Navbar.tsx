import React from 'react'
import Menu from './Menu'
import Link from 'next/link'
import CartIcon from './CartIcon';
import Image from 'next/image';

function Navbar() {
  const user = false;
  return (
    <div className='h-12 text-red-500 px-4  flex items-center justify-between border-b-2
     border-red-500 uppercase md:h-24 lg:px-20 '>
      {/* left links */}
     <div className='hidden md:flex gap-4 flex-1'>
   <Link href="/">HOMEPAGE</Link>
   <Link href="/menu">MENU</Link>
   <Link href="/">CONTACT</Link>
     </div>
      {/* logo */}
      <div className='text-xl md:font-bold md:text-center  flex-1 '>
        <Link href="/">massimo</Link>
      </div>
    {/* mobile menu */}
    <div className='md:hidden'>
      <Menu/>
    </div>
    {/* right links */}
    <div className='hidden md:flex gap-4  items-center justify-end flex-1' >
      <div className=' md:absolute top-3 right-2 lg:static   flex items-center gap-2 bg-orange-300'>
        <Image src = "/phone.png" alt="" width={20} height={20}/>
        <span>12369874</span>
      </div>
   {!user ? (
   <Link href="/login">login</Link>
   ):
    ( 
    <Link href="/orders">orders</Link>
    )}
   <CartIcon/>
     </div>
    </div>
  )
}

export default Navbar

  