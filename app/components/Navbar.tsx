"use client";

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-8 py-4 bg-black text-white fixed top-0 left-0 z-50">
      <h1 className="text-xl font-bold">Vaishnavi.dev</h1>

      <div className="flex gap-6">
        <Link href="#home">Home</Link>
        <Link href="#about">About</Link>
        <Link href="#skills">Skills</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#contact">Contact</Link>
      </div>
    </nav>
  );
}
