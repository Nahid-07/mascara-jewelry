import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const leftMenu = [
    { name: "Shop", path: "/shop" },
    { name: "Gifts", path: "/gifts" },
    { name: "Engagement", path: "/engagement" },
    { name: "About", path: "/about" },
  ];
  const [open, setOpen] = useState(false);
  const activeClass =
    "hover:bg-black duration-500 hover:px-2 hover:text-white hover:rounded";
  return (
    <>
      <div className="md:flex justify-between h-20 items-center bg-[#f7f1e3] md:px-4 lg:px-20 hidden">
        <div className="w-[30%]">
          <nav>
            <ul className="flex space-x-5">
              {
                leftMenu.map(menu => <li className={activeClass}><Link to={menu.path}>{menu.name}</Link></li>)
              }

            </ul>
          </nav>
        </div>
        <div className="text-center w-[30%]">
          <h1 className="text-3xl font-semibold">MASCARA</h1>
          <p>REFIND JEWELRY</p>
        </div>
        <div className="w-[30%]">
          <ul className="flex space-x-5 justify-end items-center">
            <li className={activeClass}><Link to='/dashboard'>Dashboard</Link></li>
            <li><Link to='/login'><button className="border border-black px-3 py-1 rounded hover:bg-black hover:text-white duration-500">Login</button></Link></li>
            <li><Link to='/logout'><button className="border border-black px-3 py-1 rounded hover:bg-black hover:text-white duration-500">Logout</button></Link></li>
          </ul>
        </div>
      </div>

      <div
        onClick={() => setOpen(!open)}
        className="bg-[#f7f1e3] h-16 flex items-center px-4 md:hidden"
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
        <div className="flex-1 text-center">
          <h1 className="font-semibold text-xl">MASCARA</h1>
          <p>REFIND JEWELRY</p>
        </div>
      </div>
      <div
        className={`bg-[#f7f1e3] w-full py-5 md:hidden ${
          open ? "block" : "hidden"
        } `}
      >
        <ul className="flex flex-col items-center  space-y-5">
          {
            leftMenu.map(menu =><li className={activeClass}><Link to={menu.path}>{menu.name}</Link></li> )
          }
        </ul>
        <ul className="flex flex-col space-y-5 items-center justify-center mt-5">
        <li className={activeClass}><Link to='/dashboard'>Dashboard</Link></li>
            <li><button className="border border-black px-3 py-1 rounded hover:bg-black hover:text-white duration-500">Login</button></li>
            <li><button className="border border-black px-3 py-1 rounded hover:bg-black hover:text-white duration-500">Logout</button></li>
        </ul>
      </div>
    </>
  );
};

export default Header;
