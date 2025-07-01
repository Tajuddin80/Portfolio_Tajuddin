import React from "react";
import { IoCloudDownloadOutline } from "react-icons/io5";
import logo from "../../assets/logo.png";
import Magnet from "../../components/Magnet/Magnet";
import { Link as ScrollLink } from "react-scroll";
import { useLocation, useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate("/", { state: { scrollToProjects: true } });
  };
  const linkClass =
    "px-3 py-2 transition-colors duration-200 rounded text-white mr-5 hover:bg-[#B63AFF] cursor-pointer";

  const location = useLocation();
  const isProjectDetails = location.pathname.startsWith("/projectDetails");

  return (
    <nav className="navbar border-b md:px-10 border-[#B63AFF]/50 sticky top-0 z-50 bg-[#140719] ">
      <div className="navbar-start">
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost lg:hidden text-white">
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
            className="menu menu-sm dropdown-content mt-3 w-52 rounded-box bg-[#384B70] p-2 shadow text-lg md:text-xl "
          >
            {isProjectDetails ? (
              <button
                onClick={handleBack}
                className=" inline-flex items-center   text-white rounded-lg text-base md:text-lg font-bold poppins hover:bg-[#a12be0] cursor-pointer"
              >
                Back
              </button>
            ) : (
              navLinks(linkClass)
            )}
          </ul>
        </div>
        <img
          className="-ml-3 md:ml-0 w-25 h-10 md:w-55 md:h-15 rounded"
          src={logo}
          alt="Logo"
        />
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-lg md:text-xl ">
          {!isProjectDetails && navLinks(linkClass)}
        </ul>
      </div>

      <div className="navbar-end">
        <Magnet padding={100} disabled={false} magnetStrength={20}>
          <button className="btn border bg-[#B63AFF] border-[#507687] text-white hover:text-[#B63AFF] hover:border-white hover:bg-transparent transition-colors duration-200">
            Resume <IoCloudDownloadOutline />
          </button>
        </Magnet>
      </div>
    </nav>
  );
};

const navLinks = (linkClass) => (
  <>
    <li>
      <ScrollLink
        to="home"
        smooth
        duration={800}
        offset={-80}
        spy
        activeClass="active-link"
        className={linkClass}
      >
        Home
      </ScrollLink>
    </li>
    <li>
      <ScrollLink
        to="aboutMe"
        smooth
        duration={800}
        offset={-80}
        spy
        activeClass="active-link"
        className={linkClass}
      >
        About Me
      </ScrollLink>
    </li>
    <li>
      <ScrollLink
        to="mySkill"
        smooth
        duration={800}
        offset={-80}
        spy
        activeClass="active-link"
        className={linkClass}
      >
      Stack
      </ScrollLink>
    </li>
    <li>
      <ScrollLink
        to="qualifications"
        smooth
        duration={800}
        offset={-80}
        spy
        activeClass="active-link"
        className={linkClass}
      >
        Qualifications
      </ScrollLink>
    </li>
    <li>
      <ScrollLink
        to="projects"
        smooth
        duration={800}
        offset={-80}
        spy
        activeClass="active-link"
        className={linkClass}
      >
        Projects
      </ScrollLink>
    </li>
    <li>
      <ScrollLink
        to="contact"
        smooth
        duration={800}
        offset={-80}
        spy
        activeClass="active-link"
        className={linkClass}
      >
        Contact Me
      </ScrollLink>
    </li>
  </>
);

export default Navbar;
