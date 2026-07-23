import React from "react";
import Stripe from "./Stripe";

import stripe1 from "../assets/images/stripe1.png";
import stripe2 from "../assets/images/stripe2.png";
import stripe3 from "../assets/images/stripe3.png";
import stripe4 from "../assets/images/stripe4.png";
import stripe5 from "../assets/images/stripe5.png";
import stripe6 from "../assets/images/stripe6.png";

const data = [
  { url: stripe1, number: "25+" },
  { url: stripe2, number: "20+" },
  { url: stripe3, number: "05" },
  { url: stripe4, number: "101%" },
  { url: stripe5, number: "03+" },
  { url: stripe6, number: "15+" },
];

const Stripes = () => {
  return (
    <div className="w-full">
      <div className="w-full flex flex-wrap items-center border-t border-slate-700/60 overflow-hidden shadow-2xl">
        {data.map((elem, idx) => (
          <Stripe key={idx} val={elem} />
        ))}
      </div>
    </div>
  );
};

export default Stripes;