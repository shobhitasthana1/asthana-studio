import { useState } from "react";
import Logo from "../assets/images/logo.png";
import Button from "./Button";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navLinks = ["Home", "Work", "Services", "", "Contact"];

    return (
        <div className="bg-[#161418] w-full border-b border-slate-700 relative z-50">
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6 flex items-center justify-between">
                
                <div className="nav-left flex items-center gap-x-4 lg:gap-x-10">
                    <img src={Logo} alt="Logo" className="w-20 md:w-24 mr-2 lg:mr-10" />

                    <div className="hidden md:flex items-center gap-6 lg:gap-14">
                        {navLinks.map((elem, idx) => {
                            return elem.length === 0 ? (
                                <span
                                    key={idx}
                                    className="w-0.5 h-6 bg-slate-700"
                                ></span>
                            ) : (
                                <a
                                    key={idx}
                                    className="font-satoshi font-extralight text-sm flex items-center gap-2 hover:text-white transition-colors"
                                    href="#"
                                >
                                    {idx === 1 && (
                                        <span
                                            className="w-2 h-2 bg-[#E2FF03] rounded-full inline-block"
                                            style={{
                                                boxShadow: "0 0 12px rgba(226, 255, 3, 0.8)",
                                            }}
                                        />
                                    )}
                                    {elem}
                                </a>
                            );
                        })}
                    </div>
                </div>

                <div className="hidden md:block">
                    <Button />
                </div>

                {/* hamburger icon */}
                <button
                    className="md:hidden text-slate-300 hover:text-white focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {isOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden bg-[#161418] absolute top-full left-0 w-full px-6 py-6 border-b border-slate-700 flex flex-col gap-6 shadow-xl">
                    {navLinks.map((elem, idx) => {
                        // ignore the empty string divider for mobile
                        if (elem.length === 0) return null; 
                        
                        return (
                            <a
                                key={idx}
                                className="font-satoshi font-extralight text-lg flex items-center gap-3 text-slate-200"
                                href="#"
                                onClick={() => setIsOpen(false)}
                            >
                                {idx === 1 && (
                                    <span
                                        className="w-2 h-2 bg-[#E2FF03] rounded-full inline-block"
                                        style={{
                                            boxShadow: "0 0 12px rgba(226, 255, 3, 0.8)",
                                        }}
                                    />
                                )}
                                {elem}
                            </a>
                        );
                    })}
                    <div className="mt-2 w-full flex justify-start">
                        <Button />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;