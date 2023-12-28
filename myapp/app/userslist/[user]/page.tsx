'use client'

import React from 'react'

const User = ({params}: any) => {
    console.log(params)
  return (
    <div>
        <h1>Hi i am {params.user}</h1>
    </div>
  )
}

export default User