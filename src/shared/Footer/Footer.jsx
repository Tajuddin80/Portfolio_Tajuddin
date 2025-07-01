import React from "react";
import { Link as ScrollLink } from "react-scroll";
import { Linkedin, Github, Mail, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center rounded p-10 border-t border-[#B63AFF]/50">
      <nav className="grid grid-flow-col gap-4">
        <ScrollLink
          to="home"
          smooth
          duration={800}
          offset={-80}
          activeClass="active-link"
          className="px-2 rounded-xl cursor-pointer py-1 hover:bg-[#B63AFF]"
        >
          Home
        </ScrollLink>
        <ScrollLink
          to="aboutMe"
          smooth
          duration={800}
          offset={-80}
          activeClass="active-link"
          className="px-2 rounded-xl cursor-pointer py-1 hover:bg-[#B63AFF]"
        >
          About
        </ScrollLink>
        <ScrollLink
          to="mySkill"
          smooth
          duration={800}
          offset={-80}
          activeClass="active-link"
          className="px-2 rounded-xl cursor-pointer py-1 hover:bg-[#B63AFF]"
        >
          Skill
        </ScrollLink>
        <ScrollLink
          to="projects"
          smooth
          duration={800}
          offset={-80}
          activeClass="active-link"
          className="px-2 rounded-xl cursor-pointer py-1 hover:bg-[#B63AFF]"
        >
          Projects
        </ScrollLink>
        <ScrollLink
          to="contact"
          smooth
          duration={800}
          offset={-80}
          activeClass="active-link"
          className="px-2 rounded-xl cursor-pointer py-1 hover:bg-[#B63AFF]"
        >
          Contact
        </ScrollLink>
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
          Copyright © {new Date().getFullYear()} - All rights reserved by The
          owner
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
