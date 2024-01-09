"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: "500" });
const Home = () => {
  const router = useRouter();

  const navigate = (page: string) => {
    router.push(page);
  };
  return (
    <section>
      <h1 className={roboto.className}>Google Fonts</h1>
      <Link href="/projects" className={roboto.className}>Project</Link>
      <br />
      <button className={roboto.className} onClick={() => navigate("about")}>
        Go To About Page
      </button>
      <br />
      <button className={roboto.className} onClick={() => navigate("login")}>
        Go To Login Page
      </button>
    </section>
  );
};

export default Home;
