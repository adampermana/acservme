import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full mx-auto bg-white 2xl:max-w-7xl">
      <div className="relative flex flex-col w-full p-5 mx-auto bg-white md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
        <div className="flex flex-row items-center justify-between lg:justify-start">
          <a
            className="text-lg tracking-tight text-black uppercase focus:outline-none focus:ring lg:text-2xl"
            href="/"
          >
            <img
              src="https://i.ibb.co/qrSmCpz/logoacservme1-copy.png"
              alt="ACSERVME"
              className="h-20 md:h-20 lg:h-20"
            />
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 text-gray-400 hover:text-black focus:outline-none focus:text-black md:hidden"
          >
            <svg
              className="w-6 h-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                className={isOpen ? "hidden" : "inline-flex"}
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
              <path
                className={isOpen ? "inline-flex" : "hidden"}
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <nav
          className={
            isOpen
              ? "flex-col items-center flex-grow md:pb-0 md:flex md:justify-end md:flex-row flex"
              : "flex-col items-center flex-grow md:pb-0 md:flex md:justify-end md:flex-row hidden"
          }
        >
          <a
            className="px-2 py-2 text-sm text-black lg:px-6 md:px-3 hover:text-[#519de8] lg:ml-auto"
            href="/Nonfound"
          >
            About
          </a>
          <a
            className="px-2 py-2 text-sm text-black lg:px-6 md:px-3 hover:text-[#519de8] "
            href="/Nonfound"
          >
            Contact
          </a>
          <a
            className="px-2 py-2 text-sm text-black lg:px-6 md:px-3 hover:text-[#519de8]"
            href="/Nonfound"
          >
            Documentation
          </a>

          <div className="inline-flex items-center gap-2 list-none lg:ml-auto">
            <button
              className="block px-4 py-2 mt-2 text-sm text-gray-500 md:mt-0 hover:text-[#519de8] focus:outline-none focus:shadow-outline"
              fdprocessedid="62a6vg"
            >
              Sign in
            </button>
            <button
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-[#519de8] rounded-full group focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-gray-700 active:bg-gray-800 active:text-white focus-visible:outline-black"
              fdprocessedid="qs5fwk"
            >
              Sign up
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
