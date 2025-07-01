import React from "react";
import { Link } from "react-router";
import { Linkedin, Github, Mail, Twitter } from "lucide-react";
const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center rounded p-10 border-t border-[#B63AFF]/50">
      <nav className="grid grid-flow-col gap-4">
        <Link
          to={"/"}
          className="link link-hover transition-colors duration-200 hover:text-[#B63AFF]"
        >
          Home
        </Link>
        <Link
          to={"/"}
          className="link link-hover transition-colors duration-200 hover:text-[#B63AFF]"
        >
          About Me
        </Link>
        <Link
          to={"/"}
          className="link link-hover transition-colors duration-200 hover:text-[#B63AFF]"
        >
          Projects
        </Link>
        <Link
          to={"/"}
          className="link link-hover transition-colors duration-200 hover:text-[#B63AFF]"
        >
          Contact Me
        </Link>
      </nav>

      <nav>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://www.linkedin.com/in/tajuddin80"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="w-10 h-10 text-[#B63AFF] hover:text-white hover:bg-[#B63AFF] rounded p-1 transition" />
          </a>
          <a
            href="https://github.com/Tajuddin80"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="w-10 h-10 text-[#B63AFF] hover:text-white hover:bg-[#B63AFF] rounded p-1 transition" />
          </a>
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=tajuddin.cse.dev@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail className="w-10 h-10 text-[#B63AFF] hover:text-white hover:bg-[#B63AFF] rounded p-1 transition" />
          </a>

          <a
            href="https://x.com/TajuddinCSE"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="w-10 h-10 text-[#B63AFF] hover:text-white hover:bg-[#B63AFF] rounded p-1 transition" />
          </a>
        </div>
      </nav>

      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All rights reserved by ACME
          Industries Ltd
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
