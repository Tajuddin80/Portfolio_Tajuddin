import React from 'react';
import { NavLink } from 'react-router';
import logo from '../../assets/logo.png';
import Magnet from '../../components/Magnet/Magnet';

const Navbar = () => {
  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 transition-colors duration-200 rounded ${
      isActive
        ? 'bg-[#B63AFF] text-white mr-5'
        : 'text-white mr-5'
    } hover:bg-[#B63AFF]`;

  const links = (
    <>
      <li>
        <NavLink to="/" className={navLinkClass}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" className={navLinkClass}>
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/services" className={navLinkClass}>
          Services
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" className={navLinkClass}>
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="navbar border-b md:px-10 border-[#507687] sticky top-0 z-50  bg-[#140719]">
      <div className="navbar-start">
        <div className="dropdown">
          <button
            tabIndex={0}
            className="btn btn-ghost lg:hidden text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 w-52 rounded-box bg-[#384B70] p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <img className="-ml-3 md:ml-0 w-25 h-10 md:w-55 md:h-15 rounded" src={logo} alt="Logo" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <Magnet padding={100} disabled={false} magnetStrength={20}>
        <button className="btn border bg-[#B63AFF] border-[#507687] text-white hover:text-[#B63AFF] hover:border-white hover:bg-transparent transition-colors duration-200">
         Watch my Resume
        </button>
        </Magnet>
      </div>
    </nav>
  );
};

export default Navbar;
