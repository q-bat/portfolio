'use client';

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="font-sans grid grid-rows-[auto_1fr_20px] min-h-screen pb-20 gap-6 w-full">
      {/* Navbar Header */}
      <header className="sticky top-0 row-start-1 w-full flex justify-between items-center py-2 px-4 bg-white dark:bg-black shadow-md relative">
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
      <main className="flex top-20 grid gap-4 px-6 row-start-2 items-center sm:justify-start sm:items-start w-full max-w-6xl mx-auto">
        <div>
          <div className="bg-gray-400 rounded-xl p-3 sm:float-left sm:mr-6 mb-4 min-w-[20px] md:min-w-md max-h-96 flex items-center gap-2">
            <img
              className="rounded-full h-40 w-40 sm:h-80 sm:w-80"
              src="./QB-Professional.jpg"
              alt="Quinn Professional pic"
              loading="eager"
            />
            <div className="flex flex-col justify-center items-center w-full h-full p-3">
              <span className="text-lg font-semibold">Software Developer</span>
            </div>
          </div>
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. At vero eos et accusamus et iusto odio
            dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et
            quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui
            officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque
            nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est,
            omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum
            necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
            Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores
            alias consequatur aut perferendis doloribus asperiores repellat.
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
