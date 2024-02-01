import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { MobileNav } from "../MobileNav/MobileNav";

function NavBar() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    // Add event listener for scroll
    window.addEventListener("scroll", handleScroll);
    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Empty dependency array ensures that this effect runs once on mount

  return (
    <div>
      <div className="relative">
        <div className="fixed top-0 z-30 flex gap-14 bg-white h-20 p-4 w-full items-center xl:hidden">
          <div className="z-30">
            <MobileNav />
          </div>
          <div className="z-30">
            <Link to="/" className="text-2xl font-bold flex gap-2 items-center ">
              <img src="logo.png" alt="logo-sidebar" />
              <span>ModerDash</span>
            </Link>
          </div>
        </div>

        <nav
          className={`fixed top-0 bg-white min-w-full h-16 p-5 z-10 hidden xl:block ${
            scrolling ? "drop-shadow-sm" : ""
          }`}
        >
          <div className="flex items-center hidden xl:block">
          <div className="flex space-x-4 ">
            <Link to="/" className="text-gray-800 hover:text-gray-300">
              Home
            </Link>
            <Link to="/about" className="text-gray-800 hover:text-gray-300">
              About
            </Link>
            <Link to="/pages" className="text-gray-800 hover:text-gray-300">
              Pages
            </Link>
            <Link to="/blog" className="text-gray-800 hover:text-gray-300">
              Blog
            </Link>
          </div>
          </div>
          
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
