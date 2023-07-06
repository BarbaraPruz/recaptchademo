import React, { ReactNode } from "react";
import Link from "next/link";

interface NavLinkProps {
  href: string;
  children: ReactNode;
}

const NavLink = ({ href, children }: NavLinkProps) => (
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
          <NavLink href="/v2notarobot">Not a Robot</NavLink>
          <NavLink href="/v2invisiblepage">Invisible</NavLink>
        </div>
      </nav>
    </header>
  );
}
