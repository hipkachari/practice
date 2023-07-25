import React from "react";
import about from "../assets/about.png";
function AboutUs() {
  return (
    <div className="w-full bg-[#E9F8F3B2] py-24">
      <div className="flex justify-center items-start ">
        <h1 className="text-5xl font-bold">About Us</h1>
      </div>

      <div className="md:max-w-[1480px]  m-auto grid md:grid-cols-2 max-w-[600px]">
        <h1 className="md:leading-[50px] py-4 md:text-2xl  text-2xl font-semibold flex justify-around md:py-11">
          At Researchsity, we pride ourselves on being a dedicated and reliable
          academic assistance company. Our mission is to empower students in
          their pursuit of academic excellence by offering expert guidance and
          support throughout their dissertation, thesis, law management,
          research proposal, and nursing projects.
        </h1>
        <img src={about} className="md:mx-11" />
      </div>
    </div>
  );
}

export default AboutUs;
