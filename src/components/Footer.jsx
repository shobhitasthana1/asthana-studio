import React from "react";
import { FaChevronRight } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-16">

        {/* Left */}
        <div className="lg:w-[55%]">
          <h2 className="font-impasse text-[3rem] md:text-[4rem] lg:text-[6rem] font-black leading-[0.9] tracking-tight text-white">
            Asthana
            <br />
            Studio.
          </h2>

          <div className="mt-14 flex flex-wrap gap-8 text-sm text-zinc-500">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
            <a href="#">Cookies</a>
          </div>
        </div>

        {/* Right */}
        <div className="lg:w-[45%] flex justify-between gap-12">

          {/* Socials */}
          <div>
            <h4 className="text-zinc-500 text-sm mb-8">Socials</h4>

            <div className="flex flex-col gap-4 text-white">
              <a
                href="https://github.com/shobhitasthana1"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a href="#">LinkedIn</a>
              <a href="#">Instagram</a>
              <a href="#">X (Twitter)</a>
            </div>
          </div>

          {/* Sitemap */}
          <div>
            <h4 className="text-zinc-500 text-sm mb-8">Sitemap</h4>

            <div className="flex flex-col gap-4 text-white">
              <a href="#">Home</a>
              <a href="#">Work</a>
              <a href="#">Services</a>
              <a href="#">Contact</a>
            </div>
          </div>

          {/* CTA */}
          <div className="max-w-65">
            <p className="text-white leading-7 font-medium">
              We build premium websites, digital products and interactive
              experiences that help brands stand out.
            </p>

            <button className="mt-8 bg-[#F7F1E4] text-black rounded-full px-6 h-12 flex items-center gap-3 font-medium hover:bg-white transition-all">
              Start a Project
              <FaChevronRight className="text-sm" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;