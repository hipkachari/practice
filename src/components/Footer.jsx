import React from "react";
import { BsFacebook } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiOutlineLinkedin,
  AiFillInstagram,
  AiOutlineReddit,
} from "react-icons/ai";

function Footer() {
  return (
    <div className="w-full bg-[#E9F8F3] py-24">
      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-3 gap-8 max-w-[600px] items-center">
        <div>
          <h1 className="text-2xl	font-bold text-emerald-600  ">ResearchSity</h1>
          <h3 className=" text-2xl font-bold mt-10">Visit Us</h3>
          <h3 className="py-2 text-[#6D737A]">Call:+(91)-6294935887 </h3>
          <h3 className="py-2 text-[#6D737A]">DumDum,Kolkata ,India</h3>
          <h3 className="py-2 text-[#6D737A]">
            Email :Krishnamandalyyy627@gmail.com
          </h3>
          <div className="flex gap-4 py-4">
            <div className="p-4 bg-[white] rounded-xl">
              <BsFacebook size={25} style={{ color: "#4DC39E" }} />
            </div>
            <div className="p-4 bg-[white] rounded-xl">
              <AiFillTwitterCircle size={25} style={{ color: "#4DC39E" }} />
            </div>
            <div className="p-4 bg-[white] rounded-xl">
              <AiOutlineLinkedin size={25} style={{ color: "#4DC39E" }} />
            </div>
            <div className="p-4 bg-[white] rounded-xl">
              <AiFillInstagram size={25} style={{ color: "#4DC39E" }} />
            </div>
            <div className="p-4 bg-[white] rounded-xl">
              <AiOutlineReddit size={25} style={{ color: "#4DC39E" }} />
            </div>
          </div>
        </div>
        <div className=" md:ml-11 md:px:11">
          <h3 className="text-2xl font-bold">Explore Us</h3>
          <ul className="py-6 text-[#6D737A]">
            <li className="py-2">Home</li>
            <li className="py-2">About Us</li>
            <li className="py-2">Achievements</li>
            <li className="py-2">Services</li>
            <li className="py-2">Contact US</li>
          </ul>
        </div>
        <div className=" md:ml-11 md:px-20">
          <h3 className="text-2xl font-bold">Category</h3>
          <ul className="py-6 text-[#6D737A]">
            <li className="py-2">Thesis</li>
            <li className="py-2">Desertation</li>
            <li className="py-2">Law</li>
            <li className="py-2">Management</li>
            <li className="py-2">Risk Analysis</li>
            <li className="py-2">Nursing</li>
            <li className="py-2">Presentation</li>
            <li className="py-2">Infographics</li>
          </ul>
        </div>
      </div>
      <div className=" flex items-center justify-center">
        Copyright &copy; 2023 ResearchSity, Inc.
      </div>
    </div>
  );
}

export default Footer;
