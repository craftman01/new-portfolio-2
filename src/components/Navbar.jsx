import React, { Component } from "react";
import Logo2 from "../assests/Logo_3.png";
export default class Navbar extends Component {
  
   
 
  
  render() {
    
    return (
      <nav class="fixed top-0 left-0 right-0 z-50  flex justify-between px-20 py-4 ">
  
   {/* block max-w-screen-sm  mx-auto text-black  */}
   {/* <nav className="fixed top-0 left-0 right-0 z-50  */}
      <a href="#">
      <img
                src={Logo2}
                className=" ml-2 px-2 py-2 h-[5vh] sm:h-[10vh]"
                alt="Logo"
              />
      </a>
    <div class=" flex px-4 py-2 bg-white border shadow-md rounded-xl border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200">
      <ul class="flex flex-col  lg:mb-0 lg:mt-0 lg:flex-row lg:items-center ">
        <li class="block  font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900 m-2 px-4 py-2  hover:bg-blue-400 rounded-md">
          <a href="#" class="flex  items-center transition-colors ">
            Home
          </a>
        </li>
        <li class="block  font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900 m-2 px-4 py-2  hover:bg-blue-400 rounded-md">
          <a href="#" class="flex items-center transition-colors">
            About
          </a>
        </li>
        <li class="block  font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900 m-2 px-4 py-2  hover:bg-blue-400 rounded-md">
          <a href="#" class="flex items-center transition-colors ">
            Work
          </a>
        </li>
        <li class="block  font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900 m-2 px-4 py-2  hover:bg-blue-400 rounded-md">
          <a href="#" class="flex items-center transition-colors ">
            Contact
          </a>
        </li>
      </ul>
    </div>
    <button
      class="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
      type="button">
      <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
          aria-hidden="true" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
        </svg>
      </span>
    </button>
   
</nav>
    );
  }
}