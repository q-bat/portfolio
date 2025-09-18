'use client';

import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div id="home" className="font-sans grid grid-rows-[auto_1fr] min-h-screen gap-6 w-full">
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
            {/*<li><a href="#projects" className="hover:text-blue-600 transition-colors">Projects</a></li> */}
            <li><a href="#resume" className="hover:text-blue-600 transition-colors">Resume</a></li>
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
          <nav className="absolute right-0 top-full w-30 bg-blue-200 dark:bg-slate-900 shadow-lg rounded-b-xl z-10 sm:hidden">
            <ul className="flex flex-col gap-4 p-4 text-base font-medium">
              <li><a href="#home" className="hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>Home</a></li>
              {/*<li><a href="#projects" className="hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>Projects</a></li>*/}
              <li><a href="#resume" className="hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>Resume</a></li>
              <li><a href="#contact" className="hover:text-blue-600 transition-colors" onClick={() => setMenuOpen(false)}>Contact</a></li>
            </ul>
          </nav>
        )}
      </header>
      <main className="flex grid gap-4 row-start-2 items-center justify-center w-full">
        {/* Home */}
        <div className="md:justify-start md:items-start max-w-7xl mx-auto px-4">
          <div className="flex items-center md:float-left gap-2 p-3 sm:mr-6 mb-4 shadow-lg bg-blue-100 dark:bg-slate-800 rounded-xl min-w-[20px] md:min-w-md max-w-full sm:max-w-full max-h-96 ">
            <img
              className="rounded-full h-36 w-36 sm:h-60 sm:w-60 md:h-80 md:w-80"
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
            Hi! I&apos;m Quinn, a passionate software developer with a knack for creating efficient and user-friendly web
             applications. With a strong foundation in front-end technologies, I enjoy bringing ideas to life through
             code. I particularly excel with Javascript, HTML, Tailwind CSS, React, and Next.js. In fact, I used
              those technologies to create this web page! When I&apos;m not coding,
             you can find me hitting the gym, playing Dungeons and Dragons, and spending time with friends and family.
             Let&apos;s connect and build something amazing together!
          </div>
        </div>
        {/* Resume */}
        <div id="resume" className="w-auto bg-blue-100 dark:bg-slate-800 flex flex-col items-center py-6 lg:rounded-lg lg:shadow-lg lg:mx-4">
          <div className="text-4xl font-semibold mb-6">Resume</div>
          <div className="mx-1 shadow-md rounded-xl w-full flex justify-center">
            <img
              className="rounded-xl w-full max-w-6xl h-auto p-1"
              src=".\PT-Resume.jpg"
              alt="Quinn's Resume"
              loading="lazy"
            />
          </div>
          {/* Download Link */}
          <div className="mt-6 flex justify-center">
            <a
              href="./PT-Resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 shadow-lg">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v11m0 0l3.75-3.75M12 15.5l-3.75-3.75M21 19.5a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 19.5v-15A2.25 2.25 0 015.25 2.25h13.5A2.25 2.25 0 0121 4.5v15z" />
              </svg>
              Download PDF
            </a>
          </div>
        </div>
        {/* Contact */}
        <div id="contact" className="w-auto flex flex-col items-center mx-4 py-4 lg:rounded-lg">
          <div className="text-4xl font-semibold mb-6">Contact Me!</div>
          <div className="w-full max-w-xl bg-blue-100 dark:bg-slate-800 rounded-xl shadow-lg p-8 flex flex-col items-center gap-6 mx-auto">
            <div className="flex gap-6 mt-2">
              <a href="mailto:quinn.l.battle@gmail.com" className="text-blue-600 hover:text-blue-800" aria-label="Email">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-.659 1.591l-7.091 7.091a2.25 2.25 0 01-3.182 0L3.409 8.584A2.25 2.25 0 012.75 6.993V6.75" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/quinnbattle" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.601v5.595z" />
                </svg>
              </a>
              <a href="https://github.com/q-bat" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800" aria-label="GitHub">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
                  <path d="M12 0C5.37 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.803 5.624-5.475 5.921.43.371.823 1.102.823 2.222v3.293c0 .322.218.694.825.576C20.565 21.796 24 17.299 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a href="tel:9203288272" className="text-blue-600 hover:text-blue-800 flex items-center gap-2" aria-label="Call Quinn">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7">
                  <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1v3.5a1 1 0 01-1 1C10.07 22 2 13.93 2 4.5a1 1 0 011-1H6.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z" />
                </svg>
                <span className="hidden sm:inline">Call/Text: 920-328-8272</span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
