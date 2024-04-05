import { useState } from "react";
import { Button } from "./Button";
import { Bars3Icon } from "@heroicons/react/16/solid";
export const Navbar = () => {
  const [show, setShow] = useState(false);
  return (
    <nav className=" text-white">
      <div className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-4 relative">
        <a href="#">
          <span className="self-center text-4xl font-semibold whitespace-nowrap text-white">
            St{" "}
            <span className=" relative  after:border after:border-t-1 after:border-solid after:absolute  after:border-white after:w-1/2 after:top-2.5 after:right-1 ">
              v
            </span>{" "}
            dy
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <Button typeof="button" className=" lg:px-10 px-3">
            About us
          </Button>
          <button
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gradient-to-r from-gridiantColor1 to-gridiantColor2 focus:outline-none focus:ring-2 focus:ring-gray-200"
            onClick={() => setShow(!show)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon color="#ffff" />
          </button>
        </div>
        <div
          className={`items-center justify-between ${
            !show && "hidden"
          }  w-11/12 z-20 md:flex md:w-auto md:order-1 absolute top-16 left-1/2 transform -translate-x-1/2 md:-translate-x-0 md:top-auto md:left-auto md:relative`}
          id="navbar-cta"
        >
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 bg-white md:bg-transparent text-gridiantColor1 md:text-white rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0  rounded md:bg-transparent font-normal transition duration-300 transform hover:scale-105"
                aria-current="page"
              >
                Browser
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0  rounded md:bg-transparent font-normal transition duration-300 transform hover:scale-105"
              >
                Bootcamp
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0  rounded md:bg-transparent font-normal transition duration-300 transform hover:scale-105"
              >
                How It Works
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 md:p-0  rounded md:bg-transparent font-normal transition duration-300 transform hover:scale-105"
              >
                Testmonial
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
