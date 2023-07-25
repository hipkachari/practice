import React from "react";
import achievement from "../assets/Achievement.jpg";
import { TfiWrite } from "react-icons/tfi";
import { FaUserGraduate, FaUsers } from "react-icons/fa";
import { GrPersonalComputer } from "react-icons/gr";
function Achievement() {
  return (
    <div className="w-full bg-[white] py-24">
      <div className="md:max-w-[1480px] m-auto grid md:grid-cols-2 max-w-[600px]">
        <div className="flex flex-col justify-center ">
          <h1 className="md:leading-[72px]  text-3xl font-bold">
            Our
            <span className="text-[#20b486]"> Achievement</span>
          </h1>
          <p className="text-lg text-gray-600">
            various students have evolved over the years
          </p>
          <div className="grid grid-cols-2 py-16">
            <div className=" py-6 flex">
              <div className="p-4  bg-[#E9F8F3] rounded-xl">
                <TfiWrite size={30} style={{ color: "#1A906B" }} />
              </div>
              <div className="px-3">
                <h1 className="text-2xl font-semibold">300+</h1>
                <p className="text-[#6D737A]">Writers</p>
              </div>
            </div>
            <div className=" py-6 flex">
              <div className="p-4  bg-[#FFFAF5] rounded-xl">
                <FaUsers size={30} style={{ color: "#FFc27A" }} />
              </div>
              <div className="px-3">
                <h1 className="text-2xl font-semibold">10,000+</h1>
                <p className="text-[#6D737A]">Users</p>
              </div>
            </div>
            <div className=" py-6 flex">
              <div className="p-4  bg-[#FFEEF0] rounded-xl">
                <FaUserGraduate size={30} style={{ color: "#ED4459" }} />
              </div>
              <div className="px-3">
                <h1 className="text-2xl font-semibold">8000+</h1>
                <p className="text-[#6D737A]">Students</p>
              </div>
            </div>
            <div className=" py-6 flex">
              <div className="p-4  bg-[#FFEEF0] rounded-xl">
                <GrPersonalComputer size={30} style={{ color: "#ED4459" }} />
              </div>
              <div className="px-3">
                <h1 className="text-2xl font-semibold">10,000+</h1>
                <p className="text-[#6D737A]">Clients</p>
              </div>
            </div>
          </div>
        </div>

        <img src={achievement} className="m-auto order-first md:order-last" />
      </div>
    </div>
  );
}

export default Achievement;
