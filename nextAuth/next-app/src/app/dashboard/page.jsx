"use client";
import { getServerSession } from "next-auth";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";

const DashBoard = async () => {
  const session = await getServerSession();
  if(!session) redirect('/')
  return (
    sessionStatus === "authenticated" && (
      <div className="min-h-screen flex-col items-center justify-center p-24">
        <h1 className="text-green-400 border p-4">DashBoard</h1>
      </div>
    )
  );
};

export default DashBoard;
