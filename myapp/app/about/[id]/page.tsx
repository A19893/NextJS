import { redirect } from 'next/navigation'
import React from 'react'

const About = ({params}: any) => {
  if(params.id == 4){
    redirect('/login')
  }
  return (
    <div>It's About with {params.id}</div>
  )
}

export default About