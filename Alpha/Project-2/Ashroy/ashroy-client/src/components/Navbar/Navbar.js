import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu } from "react-icons/hi";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleMenu = () => {
    setMenu(!menu);
  };
  const navItems = (
    <>
      <li>
        <Link to="/">home</Link>
      </li>
      <li>
        <Link to="/events">events</Link>
      </li>
      <li>
        <Link to="/aboutUs">about us</Link>
      </li>
    </>
  );
  return (
    <>
      <nav className="flex justify-between px-8 py-4 bg-primary text-white">
        <h2 className="text-xl font-poppins lg:text-3xl font-bold">আশ্রয়</h2>
        <ul className="list-none hidden  lg:flex gap-4 font-poppins text-xl capitalize">
          {navItems}
        </ul>
        <span
          onClick={handleMenu}
          className="text-xl lg:hidden block cursor-pointer"
        >
          <HiMenu />
        </span>
      </nav>
      <ul
        className={`list-none px-6 py-4 capitalize text-white ${
          menu ? "flex flex-col gap-y-2" : "hidden"
        } bg-primary ml-auto mr-2 w-48`}
      >
        {navItems}
      </ul>
    </>
  );
};

export default Navbar;
