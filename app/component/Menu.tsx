"use client"
import React, { useState } from 'react'
import Image from "next/image"
import Link from 'next/link'
import CartIcon from './CartIcon'

function Menu() {
    const[open,setOpen] = useState(false)
    const user= false
    const links = [
        {id: 1, title : "HOMEPAGE", url: "/"},
        {id: 2, title : "MENU", url: "/menu"},
        {id: 3, title : "WORKING HOUR ", url: "/"},
        {id: 4, title : "CONTACT", url: "/"},
    ]
    
  return (
    <div >
        {!open ?
     (<Image src="/open.png" alt="" width={20} height={20} onClick={()=>setOpen(true)}/>) 
    : (<Image src="/close.png" alt="" width={20} height={20} onClick={()=>setOpen(false)}/>
    )}
    
    {open && <div className='text-red absolute left-0 top-24 h-calc(100vh-6rem) w-full flex flex-col items-center 
    justify-center text-3xl z-10'>
      {links.map(item=>(
        <Link href={item.url} key={item.id} onClick={()=>setOpen(false)}>
            {item.title}</Link>
      ))}
      {!user ? <Link href="/login"  onClick={()=>setOpen(false)}>Login</Link> : 
       <Link href="/orders"  onClick={()=>setOpen(false)}>orders</Link>}
      <Link href="/cart"  onClick={()=>setOpen(false)}>
        <CartIcon/> 
      </Link>
    </div>}
    
    </div>
  )
}

export default Menu
// 'bg-red-500 text-white absolute left-0  top-24 h-calc(100vh-6rem) w-full
//     flex  flex-col  items-center justify-center  '