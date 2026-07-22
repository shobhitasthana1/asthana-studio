import { useState } from "react";
import Logo from "../assets/images/logo.png";
import Button from "./Button";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-[#161418] max-w-7xl mx-auto px-6 py-6 flex items-center md:gap-20 justify-between border-b border-slate-700 relative">
            
            <div className="nav-left flex items-center gap-x-4 md:gap-x-10">
                <img src={Logo} alt="Logo" className="w-25 mr-4 md:mr-10" />

                <div className="links hidden md:flex gap-14 text-white">
                    {
                        ["Home", "Work", "Services", "", "Contact"].map((elem, idx) => {
                            return elem.length === 0 ? (
                                <span
                                    key={idx}
                                    className="w-0.5 h-6 bg-slate-700"
                                ></span>
                            ) : (
                                <a
                                    key={idx}
                                    className="font-satoshi font-extralight text-sm flex items-center gap-2"
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
                        })
                    }
                </div>
            </div>

            <div className="hidden md:block">
                <Button />
            </div>

            {/* Mobile Menu Icon */}
            <button
                className="md:hidden text-slate-300"
                onClick={() => setIsOpen(!isOpen)}
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {isOpen ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    )}
                </svg>
            </button>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-[#161418] border-b border-slate-700 md:hidden flex flex-col gap-4 p-6 z-50">
                    {["Home", "Work", "Services", "Contact"].map((elem, idx) => (
                        <a
                            key={idx}
                            className="font-satoshi font-extralight text-lg flex items-center gap-3 text-white"
                            href="#"
                            onClick={() => setIsOpen(false)}
                        >
                            {elem === "Work" && (
                                <span
                                    className="w-2 h-2 bg-[#E2FF03] rounded-full inline-block"
                                    style={{
                                        boxShadow: "0 0 12px rgba(226, 255, 3, 0.8)",
                                    }}
                                />
                            )}
                            {elem}
                        </a>
                    ))}
                    <div className="mt-2 w-max">
                        <Button />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;