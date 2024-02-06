"use client";
import { Link } from "react-router-dom";
import { shoppingCard } from "@/data/data";
import "@flaticon/flaticon-uicons/css/all/all.css";
import { NavLink } from "react-router-dom";
import { Button } from "../ui/button";
import React, { useState } from "react";

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
  const [quantities, setQuantities] = useState(
    shoppingCard.map(() => 1) // Initialize quantities for each product to 1
  );

  const incrementQuantity = (index) => {
    setQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      newQuantities[index] += 1;
      return newQuantities;
    });
  };

  const decrementQuantity = (index) => {
    setQuantities((prevQuantities) => {
      const newQuantities = [...prevQuantities];
      if (newQuantities[index] > 1) {
        newQuantities[index] -= 1;
      }
      return newQuantities;
    });
  };

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
                  {/* <span className="absolute inline-flex rounded-full h-4 w-4 bg-orange-400"></span> */}
                  <p className="absolute top-0  text-xs font-medium text-white rounded-full h-4 w-4 bg-orange-400">
                    {quantities.reduce((acc, curr) => acc + curr, 0)}{" "}
                  </p>
                </span>
              </span>
            </Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <div className="relative h-screen flex flex-col m-2">
                <div className="mt-3 lg:m-0 pb-0 flex items-center justify-between">
                  <h3 className="text-lg font-semibold flex gap-2">
                    Shopping Cart
                  </h3>
                  <span className="bg-blue-500 px-3 py-1 text-white rounded-full font-medium text-sm flex">
                    5 new
                  </span>
                </div>
                <div className="overflow-y-auto h-screen  min-w-60 flex flex-col gap-8 mt-8">
                  {shoppingCard.map((product, index) => (
                    <div key={index}>
                      <div className="flex justfy-beetween items-center w-full gap-6">
                        <div>
                          <img
                            src={product.img}
                            alt={product.title}
                            className="rounded-md"
                          />
                        </div>
                        <div className="flex flex-col gap-3">
                          <div>
                            <h3 className="text-sm text-gray-600 font-semibold">
                              {product.title}
                            </h3>
                            <p className="text-sm text-gray-400 font-light">
                              {product.desc}
                            </p>
                          </div>

                          <div className="flex justify-between">
                            <h5 className="text-sm text-gray-600 font-semibold">
                              $245
                            </h5>
                            <div className="flex items-center justify-between gap-2">
                              <button
                                className="bg-blue-500 text-white p-0.5 rounded"
                                onClick={() => decrementQuantity(index)}
                              >
                                <i className="fi fi-rr-minus-small"></i>
                              </button>
                              <span className="text-xs font-medium text-gray-500 w-5 h-5 flex items-center justify-center">
                                {quantities[index]}
                              </span>
                              <button
                                className="bg-blue-500 text-white p-0.5 rounded"
                                onClick={() => incrementQuantity(index)}
                              >
                                <i className="fi fi-rr-plus-small"></i>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  <div className="flex flex-col gap-5">
                    <div className="flex justify-between">
                      <h4 className="text-md text-gray-600 font-semibold">
                        Sub Total
                      </h4>{" "}
                      <span className="text-md font-medium text-gray-500 flex items-center justify-center">
                        $2356
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <h4 className="text-md text-gray-600 font-semibold">
                        Total
                      </h4>{" "}
                      <span className="text-md font-medium text-gray-500 flex items-center justify-center">
                        $6874
                      </span>
                    </div>
                    <div className="flex text-center">
                      <Link
                        to="/"
                        className="border border-indigo-400 rounded-md p-2 w-full text-indigo-500 text-sm font-medium hover:bg-indigo-500 hover:text-white"
                      >
                        Go to shopping cart
                      </Link>
                    </div>
                  </div>
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
