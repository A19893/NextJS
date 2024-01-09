"use client"

import React from 'react'
import NavBar from '../../../components/NavBar'
import Footer from '../../../components/Footer'
import { usePathname } from 'next/navigation'
const Layout = ({children}: any) => {
  const pathname= usePathname();
  console.log(pathname)
  return (
    <div>
      <NavBar/>
     {children}
     <Footer/>
    </div>
  )
}

export default Layout