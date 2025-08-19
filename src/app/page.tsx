'use client';

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
  <div className="font-sans grid grid-rows-[auto_1fr_20px] items-center justify-items-center min-h-screen pb-20 gap-8">
      {/* Navbar Header */}
      <header className="row-start-1 w-full flex justify-between items-center py-2 px-4 bg-white dark:bg-black shadow-md relative">
        {/* Logo & Title */}
        <div className="flex items-center gap-x-4">
          <img className="rounded-full" src="./QB-Professional.jpg" alt="Pic of Quinn" width={40} height={40} />
          <span className="font-bold text-lg tracking-wide">Quinn Battle</span>
        </div>
        {/* Desktop Nav */}
        <nav className="hidden sm:block">
          <ul className="flex gap-6 text-base font-medium">
            <li><a href="#home" className="hover:text-blue-600 transition-colors">Home</a></li>
            <li><a href="#about" className="hover:text-blue-600 transition-colors">About</a></li>
            <li><a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-600 transition-colors">Contact</a></li>
          </ul>
        </nav>
        {/* Hamburger menu for mobile (moved to right) */}
        <button
          className="sm:hidden ml-2 p-2 rounded focus:outline-none "
          aria-label="Open menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block w-6 h-6 relative">
            <span className={`absolute left-0 top-1 w-6 h-0.5 bg-black dark:bg-white transition-all ${menuOpen ? 'opacity-35' : ''}`}></span>
            <span className={`absolute left-0 top-3 w-6 h-0.5 bg-black dark:bg-white transition-all ${menuOpen ? 'opacity-35' : ''}`}></span>
            <span className={`absolute left-0 top-5 w-6 h-0.5 bg-black dark:bg-white transition-all ${menuOpen ? 'opacity-35' : ''}`}></span>
          </span>
        </button>
        {/* Mobile Nav Drawer */}
        {menuOpen && (
          <nav className="absolute right-0 top-full w-48 bg-white dark:bg-black shadow-lg rounded-b-xl z-10 sm:hidden">
            <ul className="flex flex-col gap-4 p-4 text-base font-medium">
              <li><a href="#home" className="hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>Home</a></li>
              <li><a href="#about" className="hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>About</a></li>
              <li><a href="#projects" className="hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>Projects</a></li>
              <li><a href="#contact" className="hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>Contact</a></li>
            </ul>
          </nav>
        )}
      </header>
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <img
        className="rounded-full"
        src="./QB-Professional.jpg"
        alt="Quinn Professional pic"
        width={300}
        height={300}
        loading="eager"
        />
        <ol className="font-mono text-sm/6 text-center sm:text-left">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] font-mono font-semibold px-1 py-0.5 rounded">
              src/app/page.tsx
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            {/*Save and see your changes instantly. */}
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="dark:invert"
              src="./vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        {/*}
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
        */}
      </footer>
    </div>
  );
}
