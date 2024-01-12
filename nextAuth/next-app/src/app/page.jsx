"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: "500" });
const Home = () => {
  const router = useRouter();
  return (
    <section>
      <h1>Hi</h1>
    </section>
  );
};

export default Home;
