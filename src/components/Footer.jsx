import React from "react";
import { FaChevronRight } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer id="contact" className="w-full py-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-16">
        {/* Left */}
        <div className="lg:w-[55%]">
          <h2 className="font-impasse text-[3rem] md:text-[4rem] lg:text-[6rem] font-black leading-[0.9] tracking-tight text-white">
            Asthana
            <br />
            Studio.
          </h2>

          <div className="mt-14 flex flex-wrap gap-8 text-sm text-zinc-500">
            <a
              href="#"
              className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
            >
              Terms
            </a>
            <a
              href="#"
              className="hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
            >
              Cookies
            </a>
          </div>
        </div>

        {/* Right */}
        <div className="lg:w-[45%] flex justify-between gap-12">
          {/* Socials */}
          <div>
            <h4 className="text-zinc-500 text-sm mb-8">Socials</h4>

            <div className="flex flex-col gap-4 text-zinc-400">
             

              <a
                href="https://github.com/shobhitasthana1"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-all duration-300 hover:translate-x-1.5 w-max inline-block"
              >
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/shobhit-asthana/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-all duration-300 hover:translate-x-1.5 w-max inline-block"
              >
                LinkedIn
              </a>

              <a
                href="https://www.instagram.com/shobhit_asthana_/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-all duration-300 hover:translate-x-1.5 w-max inline-block"
              >
                Instagram
              </a>

              <a
                href="https://x.com/ShobhitAsthanaa"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-all duration-300 hover:translate-x-1.5 w-max inline-block"
              >
                X (Twitter)
              </a>
            </div>
          </div>

          {/* Sitemap */}
          <div>
            <h4 className="text-zinc-500 text-sm mb-8">Sitemap</h4>

            <div className="flex flex-col gap-4 text-zinc-400">
              <a
                href="#"
                className="hover:text-white transition-all duration-300 hover:translate-x-1.5 w-max inline-block"
              >
                Home
              </a>
              <a
                href="#"
                className="hover:text-white transition-all duration-300 hover:translate-x-1.5 w-max inline-block"
              >
                Work
              </a>
              <a
                href="#"
                className="hover:text-white transition-all duration-300 hover:translate-x-1.5 w-max inline-block"
              >
                Services
              </a>
              <a
                href="#"
                className="hover:text-white transition-all duration-300 hover:translate-x-1.5 w-max inline-block"
              >
                Contact
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className="max-w-65">
            <p className="text-white leading-7 font-medium">
              We build premium websites, digital products and interactive
              experiences that help brands stand out.
            </p>

            <button className="group relative mt-8 bg-[#F7F1E4] text-black rounded-full px-6 h-12 flex items-center gap-3 font-medium overflow-hidden transition-all duration-300 cursor-pointer">
              <span className="relative z-10">Start a Project</span>
              <span className="relative z-10 transform group-hover:translate-x-1.5 transition-transform duration-300 ease-[0.76,0,0.24,1]">
                <FaChevronRight className="text-sm" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
