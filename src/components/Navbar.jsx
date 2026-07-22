import Logo from "../assets/images/logo.png";
import Button from "./Button";

const Navbar = () => {
    return (
        <div className="bg-[#161418] max-w-7xl mx-auto px-6 py-6 flex items-center gap-20 justify-between border-b border-slate-700">
        <div className="nav-left flex items-center gap-x-10">
                <img src={Logo} alt="Logo" className="w-25 mr-10" />

            <div className="links flex gap-14">
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
        <Button />
        </div>
    );
};

export default Navbar;