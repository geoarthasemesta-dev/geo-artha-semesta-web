"use client";

import Link from "next/link";

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <footer className="bg-linear-to-r from-[#f75320] via-[#fb742e] to-[#fe953e] text-white">
      <div className="max-w-[100%] p-[5%] mx-auto px-5 md:px-16 grid grid-cols-1 md:grid-cols-5 gap-10">
        <div className="space-y-2 col-span-5 md:col-span-3">
          <img src="gas-white-logo.png" className="w-20 h-20 " alt="" />
          <h3 className="font-bold uppercase tracking-wide">
            PT Geo Artha Semesta
          </h3>
          <address className="not-italic text-sm space-y-1">
            <p>Jl. Jend. Sudirman No. 27-29, Jakarta Selatan</p>
            <p>Postal code 12920</p>
            <p>+62 (21) 1234 0000</p>
          </address>
        </div>
        <nav className="col-span-5 md:col-span-1">
          <ul className="space-y-6 text-sm">
            <li>
              <button
                onClick={() => scrollToSection("home")}
                className="hover:text-primary transition"
              >
                Home
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="hover:text-primary transition"
              >
                About Us
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("services")}
                className="hover:text-primary transition"
              >
                Our Services
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("equipment")}
                className="hover:text-primary transition"
              >
                Our Equipment
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("experience")}
                className="hover:text-primary transition"
              >
                Project Experience
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contact")}
                className="hover:text-primary transition"
              >
                Contact Us
              </button>
            </li>
          </ul>
        </nav>
        <div className="col-span-5 md:col-span-1 flex gap-4 items-end">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-instagram-icon lucide-instagram"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-linkedin-icon lucide-linkedin"
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
            <rect width="4" height="12" x="2" y="9" />
            <circle cx="4" cy="4" r="2" />
          </svg>
        </div>
        <p className=" opacity-60 col-span-5 text-sm md:text-[14px] flex flex-wrap gap-2 md:gap-4 justify-center md:justify-start">
          © 2024 PT Geo Artha Semesta. All rights reserved.
          <span>Terms of Service |</span>
          <span>Privacy Policy</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
