"use client"
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const Register = () => {
  const router= useRouter();
  const {data: session, status: sessionStatus}= useSession();

  useEffect(()=>{
    if(sessionStatus === "authenticated"){
      router.push("/dashboard")
    }
  },[session, router])
  const handleSubmit = (e)=>{
   e.preventDefault();
   const username = e.target[0].value;
   const password = e.target[1].value;
   const email = e.target[2].value;
   const confirmPassword = e.target[3].value;
  }
  return sessionStatus !== 'authenticated' && (
    <div className='min-h-screen bg-gray-100 flex items-center justify-center'>
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">
          Register
          <form onSubmit={handleSubmit()}>
            <div className="mb-4">
              <div className='mb-4'>
                <label htmlFor='username' className='block text-gray-700 text-sm font-bold mb-2 mt-2'>
                  Username
                </label>
                <input type='text' id='username' placeholder='Username' className='w-full p-2 border border-gray-300 rounded'/>
                <label htmlFor='email' className='block text-gray-700 text-sm font-bold mb-2 mt-2'>
                  Email
                </label>
                <input type='email' id='email' placeholder='Email' className='w-full p-2 border border-gray-300 rounded'/>
                <label htmlFor='username' className='block text-gray-700 text-sm font-bold mb-2 mt-2'>
                  Password
                </label>
                <input type='text' id='password' placeholder='Password' className='w-full p-2 border border-gray-300 rounded'/>
                <label htmlFor='confirm-Password' className='block text-gray-700 text-sm font-bold mb-2 mt-2'>
                  Confirm Password
                </label>
                <input type='text' id='confirm-password' placeholder='Re-Enter Password' className='w-full p-2 border border-gray-300 rounded'/>
              </div>
              <div>
                <button  type='submit' className='mb-5 w-full bg-blue-500 text-white py-2 rounded'>Register</button>
              </div>
              <span>
                {" "}
                Already have an account? {" "}
                <Link href="/login" className='text-center text-blue-500 hover:underline mt-2'>
                Login
                </Link>
              </span>
            </div>
          </form>
        </h2>
      </div>
    </div>
  )
}

export default Register