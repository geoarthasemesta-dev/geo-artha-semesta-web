"use client";

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <footer className="bg-background text-white">
      <div className="max-w-[100%] p-[5%] mx-auto bg-linear-to-r from-[#f75320] via-[#fb742e] to-[#fe953e] px-5 md:px-16 grid grid-cols-1 md:grid-cols-5 gap-10">
        <div className="space-y-2 md:col-span-3">
          <img src="gas-logo.svg" className="w-20 h-20 " alt="" />
          <h3 className="font-bold uppercase tracking-wide">
            PT Geo Artha Semesta
          </h3>
          <address className="not-italic text-sm space-y-1">
            <p>Jl. Jend. Sudirman No. 27-29, Jakarta Selatan</p>
            <p>Postal code 12920</p>
            <p>+62 (21) 1234 0000</p>
          </address>
          <p className=" opacity-60">
            © 2024 PT Geo Artha Semesta. All rights reserved.
          </p>
        </div>
        <nav className="md:col-span-2">
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
      </div>
    </footer>
  );
};

export default Footer;
