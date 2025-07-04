import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import {
  Linkedin,
  Github,
  Mail,
  Twitter,
  Phone,
  MessageSquare,
} from "lucide-react";

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lkssf0k",
        "template_azmsooc",
        form.current,
        "gKXUJFWkER1v6oBTo"
      )
      .then(
        () => {
          Swal.fire({
            icon: "success",
            title: "Message Sent!",
            text: "Your message has been delivered successfully.",
            background: "#140719",
            color: "#fff",
            confirmButtonColor: "#B63AFF",
          });
          form.current.reset();
        },
        () => {
          Swal.fire({
            icon: "error",
            title: "Oops!",
            text: "Failed to send message. Please try again.",
            background: "#140719",
            color: "#fff",
            confirmButtonColor: "#B63AFF",
          });
        }
      );
  };

  return (
    <section
      data-aos="fade-up"
      className="w-full min-h-screen flex items-center justify-center bg-transparent px-4 py-16"
    >
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 backdrop-blur-md bg-[#140719]/50 rounded-2xl shadow-2xl p-8 border-2 transition-transform duration-500 hover:scale-102 border-[#B63AFF]/50">
        {/* Left Side */}
        <div className="flex flex-col justify-between text-center md:text-left">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#B63AFF] mb-4">
              Contact <span className="text-white">Me</span>
            </h2>
            <p className="text-white text-lg mb-4">
              Let’s build something{" "}
              <span className="text-[#B63AFF] font-semibold">amazing</span>{" "}
              together.
            </p>
            <p className="text-white opacity-70 mb-6">Dhaka, Bangladesh</p>
            <div className="text-white space-y-2 mb-6">
              <div className="flex items-center gap-2">
                <Phone className="text-[#B63AFF]" />
                <a
                  href="tel:+8801845072525"
                  className="hover:text-[#B63AFF] transition"
                >
                  +8801845072525
                </a>
              </div>

              {/* <div className="flex items-center gap-2">
                <Phone className="text-[#B63AFF]" />
                <a
                  href="tel:+8801303187780"
                  className="hover:text-[#B63AFF] transition"
                >
                  +8801303187780
                </a>
              </div> */}

              <div className="flex items-center gap-2">
                <MessageSquare className="text-[#B63AFF]" />
                <a
                  href="https://wa.me/8801845072525"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#B63AFF] transition"
                >
                  WhatsApp: +8801845072525
                </a>
              </div>
              {/* <div className="flex items-center gap-2">
                <MessageSquare className="text-[#B63AFF]" />
                <a
                  href="https://wa.me/8801303187780"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#B63AFF] transition"
                >
                  WhatsApp: +8801303187780
                </a>
              </div> */}
            </div>
          </div>

          <div className="flex justify-center md:justify-start gap-4 rounded-xl border border-[#B63AFF]/60 p-4">
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
        </div>

        {/* Right Side - Form */}
        <form ref={form} onSubmit={sendEmail} className="space-y-5">
          <div className="flex flex-col">
            <label className="text-white mb-1">Name</label>
            <input
              type="text"
              name="user_name"
              required
              className="bg-transparent border border-[#507687] rounded-lg px-4 py-3 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#B63AFF]"
              placeholder="Your name"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-white mb-1">Email</label>
            <input
              type="email"
              name="user_email"
              required
              className="bg-transparent border border-[#507687] rounded-lg px-4 py-3 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#B63AFF]"
              placeholder="Your email"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-white mb-1">Message</label>
            <textarea
              name="message"
              required
              rows="5"
              className="bg-transparent border border-[#507687] rounded-lg px-4 py-3 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-[#B63AFF]"
              placeholder="Your message"
            ></textarea>
          </div>
          <div className="flex justify-center md:justify-start">
            <button
              type="submit"
              className="bg-[#B63AFF] cursor-pointer hover:bg-[#a228e0] transition px-8 py-3 rounded-lg font-bold text-white shadow-lg"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
