import React from "react";
import Link from "next/link";

const NavLink = ({ href, children }) => (
  <Link href={href} className="p-2 mr-4 text-white">
    {children}
  </Link>
);

export default function Navbar() {
  return (
    <header>
      <nav className="flex items-center justify-between flex-wrap bg-indigo-600 py-3 px-8">
        <Link href="/" className="p-2 mr-4 text-white">
          reCAPTCHA Demo
        </Link>
        <div className="flex">
          <NavLink href="/nocaptchapage">NoCaptcha</NavLink>
          <NavLink href="/v2page">V2</NavLink>
          <NavLink href="/v3page">V3</NavLink>
        </div>
      </nav>
    </header>
  );
}
