"use client"
import React, { useEffect, useState } from 'react'

const Data = () => {
    type productType={
        id: number,
        title: string,
        userId: number
    }
    type allProduct= productType[]
    const [product, setProduct]= useState<allProduct>([]);

    useEffect(()=> {
       async function fetchData() { 
        let data = await fetch('https://jsonplaceholder.typicode.com/todos/');
        let productData:allProduct = await data.json();
        setProduct(productData)
       }
       fetchData();
    },[])
  return (
    <ul>
      {product.map((item) => (
        <li key={item.id} className='border m-5 py-2'>
          <strong>ID:</strong> {item.id}, <strong>Title:</strong> {item.title}, <strong>User ID:</strong> {item.userId}
        </li>
      ))}
    </ul>
  )
}

export default Data