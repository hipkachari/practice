import React from "react";
import ServicesCard from "./ServicesCard";
import { FaPenNib } from "react-icons/fa";
import { GoLaw } from "react-icons/go";
import { AiOutlineBook } from "react-icons/ai";
import { MdOutlineManageAccounts } from "react-icons/md";
import { DiGoogleAnalytics } from "react-icons/di";
import { TbNurse } from "react-icons/tb";
import { AiOutlineFilePpt } from "react-icons/ai";
import { TbChartInfographic } from "react-icons/tb";
const Services = () => {
  return (
    <div className="w-full bg-[#F0FBF7] py-24">
      <div className="md:max-w-[1480px] m-auto  max-w-[600px]">
        <h1 className="md:leading-[72px]  text-3xl font-bold">
          Our
          <span className="text-[#20b486]"> Services</span>
        </h1>
        <p className="text-lg text-gray-600">
          various students have evolved over the years
        </p>
        <div className=" grid lg:grid-cols-4 grid-cols-2 py-12 gap-4">
          <ServicesCard icons={<FaPenNib size={30} />} title={"Thesis"} />
          <ServicesCard icons={<GoLaw size={30} />} title={"Law"} />
          <ServicesCard
            icons={<AiOutlineBook size={30} />}
            title={"Desertation"}
          />
          <ServicesCard
            icons={<MdOutlineManageAccounts size={30} />}
            title={"Management"}
          />
          <ServicesCard
            icons={<DiGoogleAnalytics size={30} />}
            title={"Risk Analysis"}
          />
          <ServicesCard icons={<TbNurse size={30} />} title={"Nursing"} />
          <ServicesCard
            icons={<AiOutlineFilePpt size={30} />}
            title={"Presentation"}
          />
          <ServicesCard
            icons={<TbChartInfographic size={30} />}
            title={"Infographics"}
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
