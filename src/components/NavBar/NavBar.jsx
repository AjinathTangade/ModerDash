import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    <div className="relative">
      <nav
        className={`fixed bg-white min-w-full px-5 z-20 ${
          scrolling ? "drop-shadow-sm" : ""
        }`}
      >
        <div className="flex space-x-4 items-center min-h-16">
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
      </nav>
    </div>
  );
}

export default NavBar;
