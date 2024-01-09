'use client'

import React from 'react'

const ClientOne = () => {
  console.log("Hello from client component");
  return (
    <>
    <div>
    <button onClick={()=>console.log("alert me client here")}>Click Me</button>
    </div>
    </>
  )
}

export default ClientOne