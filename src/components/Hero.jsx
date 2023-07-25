import React from "react";
import hero from "../assets/hero.jpg";
function Hero() {
  return (
    <div className="w-full bg-white py-24">
      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]">
        <div className="flex flex-col justify-start gap-4">
          <p className="py-2 text-2xl  text-[#20b486] font-medium">
            START TO SUCCESS
          </p>
          <h1 className="md:leading-[72px] py-4 md:text-6xl  text-5xl font-semibold">
            Discover a world of academic
            <span className="text-[#20b486]"> excellence</span> with
            Researchsity's exceptional{" "}
            <span className="text-[#20b486]">assistance</span>
          </h1>
        </div>

        <img src={hero} className="order-first" />
      </div>
    </div>
  );
}

export default Hero;
