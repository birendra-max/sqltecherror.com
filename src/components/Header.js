import React, { useState, useEffect } from "react";
import logo from "./logo/logo.png";

export default function Header() {
  const [menu, setMenu] = useState(0);

  function closeMenu() {
    setMenu(2)
    if (menu == 2) {
      document.getElementById("menu").style.display = "none";
      document.getElementById("closemenu").style.display = "none";
      document.getElementById("openmenu").style.display = "block";
    }
  }

  function openMenu() {
    setMenu(1);
    if (menu === 1) {
      document.getElementById("menu").style.display = "grid";
      document.getElementById("menu").style.justifyItems = "center";
      document.getElementById("menu").style.alignContent = "center";
      document.getElementById("closemenu").style.display = "block";
      document.getElementById("openmenu").style.display = "none";
    }
  }

  return (
    <>
      <div className="antialiased dark-mode:bg-gray-900">
        <div className="w-full bg-blue-400 dark-mode:text-gray-200 dark-mode:bg-gray-800">
          <div className="flex flex-col max-w-screen-xl px-0 mx-auto md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
            <div className="flex flex-row items-center justify-between p-4">
              <img alt="sqltech logo" src={logo} className="relative inline-block h-8 w-12 cursor-pointer rounded-full object-cover object-center" data-popover-target="profile-menu" />
              <a href="index.php" target="_blank" id="webname" className="text-1xl ml-2 font-semibold tracking-widest text-gray-900 uppercase rounded-lg dark-mode:text-white hover:underline hover:decoration-red-200 focus:outline-none focus:shadow-outline">
                <div className="w-full h-full flex justify-center items-center">
                  <h1 id="typewriter" className="text-sm font-bold " style={{ display: "none" }}>
                    sqltecherror.com
                  </h1>
                </div>
              </a>
              <button onClick={openMenu} className="rounded-lg md:hidden focus:outline-none focus:shadow-outline">
                <svg id="openmenu" 
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              </button>
              <button onClick={closeMenu} className="rounded-lg md:hidden focus:outline-none focus:shadow-outline">
                <svg id="closemenu" 
                  style={{ display: "none" }}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div id="menu">
              <a target="_self" className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="index.php">
                Home
              </a>
              <a target="_self" className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="blog.php?post_id=1">
                Blogs
              </a>
              <a target="_self" className="px-4 py-2 mt-2 text-sm font-semibold bg-transparent rounded-lg dark-mode:bg-transparent dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 md:mt-0 md:ml-4 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline" href="contact.php">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
