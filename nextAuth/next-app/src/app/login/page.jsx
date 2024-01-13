"use client";

import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import Link from "next/link";
const Login = () => {
  const router = useRouter();
  const { data: session, status: sessionStatus } = useSession();
  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.push("/dashboard");
    }
  }, [session, router]);
  const handleSubmit = async(e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    console.log(email, password)
    if (!password || !email) {
        toast.error("Please fill all details");
        return;
      } 
      const res = await signIn("credientals",{
        redirect: false,
        email,password
      })
      if(res?.error){
        if(res?.url){
          router.replace('/dashboard')
        }
        toast.error("Invalid Credentials");
      }
      else{
          toast.success("Successfully Logged In")
      }
  };
  return (
    sessionStatus !== "authenticated" && (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h2 className="text-2xl font-semibold  w-97">Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2 mt-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Email"
                  className="w-full p-2 border border-gray-300 rounded"
                />
                <label
                  htmlFor="username"
                  className="block text-gray-700 text-sm font-bold mb-2 mt-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="Password"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="mb-5 w-full bg-blue-500 text-white py-2 rounded"
                >
                  Login
                </button>
              </div>
              <span>
                {" "}
                Not a Registered User?{" "}
                <Link
                  href="/register"
                  className="text-center text-blue-500 hover:underline mt-2"
                >
                  Login
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

export default Login;
