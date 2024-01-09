"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  return (
    <div>
      {pathname === "/login/loginadmin" ? (
        <ul className="login-menu">
        <li>
          <Link href="/login/loginadmin">Login Admin</Link>
        </li>
        </ul>
      ) : (
        <ul className="login-menu">
          <li>
            <Link href="/login">Login Main</Link>
          </li>
          <li>
            <Link href="/login/loginuser">Login User</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
