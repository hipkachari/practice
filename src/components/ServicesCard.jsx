import React from "react";

import { BsArrowUpRight } from "react-icons/bs";
const ServicesCard = ({ icons, title }) => {
  return (
    <div className="ServicesCard bg-white p-4 shadow-lg rounded-md flex items-center gap- justify-between border border-transparent hover:border-[#20B486] hover:cursor-pointer group/edit">
      <div className="flex gap-4">
        {icons}

        <h1 className="text-2xl font-semibold">{title}</h1>
      </div>
      <div className="group-hover/edit:bg-[#20B486] rounded-lg p-3">
        <BsArrowUpRight
          size={30}
          style={{ color: "#20B486" }}
          className="arrow-icon"
        />
      </div>
    </div>
  );
};

export default ServicesCard;
