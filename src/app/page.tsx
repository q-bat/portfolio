'use client';

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="font-sans grid grid-rows-[auto_1fr_20px] min-h-screen pb-10 gap-6 w-full">
      {/* Navbar Header */}
      <header className="sticky top-0 row-start-1 flex justify-between items-center py-2 px-4 bg-blue-200 dark:bg-slate-900 shadow-md relative">
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
          <nav className="absolute right-0 top-full w-48 bg-blue-200 dark:bg-slate-900 shadow-lg rounded-b-xl z-10 sm:hidden">
            <ul className="flex flex-col gap-4 p-4 text-base font-medium">
              <li><a href="#home" className="hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>Home</a></li>
              <li><a href="#about" className="hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>About</a></li>
              <li><a href="#projects" className="hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>Projects</a></li>
              <li><a href="#contact" className="hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>Contact</a></li>
            </ul>
          </nav>
        )}
      </header>
      <main className="flex grid gap-4 row-start-2 items-center justify-center w-full">
        {/* Home */}
        <div className="md:justify-start md:items-start max-w-7xl mx-auto px-4">
          <div className="flex items-center md:float-left gap-2 p-3 sm:mr-6 mb-4 bg-blue-100 dark:bg-slate-700 rounded-xl min-w-[20px] md:min-w-md max-w-full sm:max-w-full max-h-96 ">
            <img
              className="rounded-full h-40 w-40 sm:h-80 sm:w-80"
              src="./QB-Professional.jpg"
              alt="Quinn Professional pic"
              loading="eager"
            />
            <div className="flex flex-col justify-center items-center w-full h-full p-3">
              <span className="text-2xl sm:text-4xl font-semibold">Quinn Battle</span>
              <span className="text-sm sm:text-lg font-semibold">Software Developer</span>
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
        {/* Resume */}
        <div className="w-auto bg-blue-100 dark:bg-slate-700 flex flex-col items-center py-6 lg:rounded-lg lg:mx-4">
          <div className="text-4xl font-semibold mb-6">Resume</div>
          <div className="mx-1">
            <img
              className="rounded-xl"
              src=".\Part-time-res.png"
              alt="Quinn's Resume"
              loading="lazy"
            />
          </div>
          <div className="mt-6 flex justify-center">
            <a
              href="./PT-Resume-New.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v11m0 0l3.75-3.75M12 15.5l-3.75-3.75M21 19.5a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 19.5v-15A2.25 2.25 0 015.25 2.25h13.5A2.25 2.25 0 0121 4.5v15z" />
              </svg>
              Download PDF
            </a>
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      </footer>
    </div>
  );
}
