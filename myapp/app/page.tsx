"use client"

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React from 'react'

const Home = () => {
  const router = useRouter()

  const navigate = (page: string) =>{
    router.push(page)
  }
  return (
    <section>
      <h1>useRouter</h1>
      <Link href="/projects">Project</Link><br/>
      <button onClick={()=> navigate("about")}>Go To About Page</button><br/>
      <button onClick={()=> navigate("login")}>Go To Login Page</button>
    </section>
  )
}

export default Home