"use client";
import { Link } from "react-router-dom";
import { sideBarLinks, sideBarLinksHome } from "@/data/data";
import "@flaticon/flaticon-uicons/css/all/all.css";
import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
// import { Input } from "@/registry/new-york/ui/input";
// import { Label } from "@/registry/new-york/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";

const SHEET_SIDES = ["right"];

export function ShoppingCard() {
  return (
    <div className="relative">
      {SHEET_SIDES.map((side) => (
        <Sheet key={side} className="relative">
          <SheetTrigger asChild>
            <Button
              variant="outline"
              className="w-10 h-10 border-0 rounded-full py-2 hover:bg-indigo-100"
            >
              <span>
                <i className="fi fi-rr-shopping-bag text-xl hover:text-indigo-500"></i>{" "}
              </span>
              <span className="absolute top-0 right-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex rounded-full h-4 w-4 bg-orange-400"></span>
                  <p className="absolute top-0 right-[-4px] inline-flex text-xs font-medium text-white">2</p>
                </span>
              </span>
            </Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader> 
              <div className="relative h-screen flex flex-col">
                <div className="mt-3 lg:m-0 border-b-2 border-indigo-400 pb-3 flex items-center justify-center">
                  <Link
                    to="/"
                    className="text-2xl font-bold flex gap-2 items-center"
                  >
                    <img src="logo.png" alt="logo-sidebar" />
                    <span>ModerDash</span>
                  </Link>
                </div>
                <div className="overflow-y-auto h-screen top-16 min-w-60">
                  <nav>
                    <ul className="my-5">
                      <h3 className="font-semibold pb-3 text-left">Home</h3>
                      {sideBarLinksHome.map((link, index) => (
                        <li
                          key={index}
                          className="flex gap-4 py-3 items-center mr-4 px-3 rounded-lg hover:cursor-pointer hover:bg-indigo-50 hover:text-indigo-600"
                        >
                          <span>{link.icon}</span>
                          <NavLink
                            href={link.href}
                            className="text-sm font-medium"
                          >
                            {link.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>

                    <ul className="my-5">
                      <h3 className="font-semibold pb-3 text-left">Apps</h3>
                      {sideBarLinks.map((link, index) => (
                        <li
                          key={index}
                          className="flex gap-4 py-3 items-center mr-4 px-3 rounded-lg hover:cursor-pointer hover:bg-indigo-50 hover:text-indigo-600"
                        >
                          <span>{link.icon}</span>
                          <NavLink
                            href={link.href}
                            className="text-sm font-medium"
                          >
                            {link.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                    <ul className="my-5">
                      <h3 className="font-semibold pb-3">Apps</h3>
                      {sideBarLinks.map((link, index) => (
                        <li
                          key={index}
                          className="flex gap-4 py-3 items-center mr-4 px-3 rounded-lg hover:cursor-pointer hover:bg-indigo-50 hover:text-indigo-600"
                        >
                          <span>{link.icon}</span>
                          <NavLink
                            href={link.href}
                            className="text-sm font-medium"
                          >
                            {link.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
            </SheetHeader>

            <SheetFooter>
              <SheetClose asChild></SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}
