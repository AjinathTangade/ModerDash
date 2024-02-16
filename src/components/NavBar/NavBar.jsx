import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "@flaticon/flaticon-uicons/css/all/all.css";
import { MobileNav } from "../MobileNav/MobileNav";
import { Country } from "./Country";
import Notifications from "./Notifications";
import UserProfile from "./UserProfile";
import { ShoppingCard } from "./ShoppingCart";

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
            <Link
              to="/"
              className="text-2xl font-bold flex gap-2 items-center "
            >
              <img src="logo.png" alt="logo-sidebar" />
              <span>ModerDash</span>
            </Link>
          </div>
        </div>

        <nav
          className={`fixed top-0 bg-white w-5/6 right-[-19px] border-l border-landigo-500 h-20 px-5 z-10 flex items-center gap-4 invisible xl:visible ${
            scrolling ? "border-b" : ""
          }`}

        >
          <span>
            <i className="fi fi-rr-search"></i>
          </span>
          <div className="flex items-center justify-between w-11/12">
            <div className="flex items-center hidden xl:block">
              <div className="flex space-x-8">
                <Link to="/" className="text-sm text-gray-600">
                  Home
                </Link>
                <Link to="/about" className="text-sm text-gray-600">
                  About
                </Link>
                <Link to="/pages" className="text-sm text-gray-600">
                  Pages
                </Link>
                <Link to="/blog" className="text-sm text-gray-600">
                  Blog
                </Link>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <div className="h-9 w-10">
                <Country />
              </div>
              <div>
                <Notifications />
              </div>
              
              <div>
                <ShoppingCard />
              </div>
              <div>
                <UserProfile />
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavBar;
