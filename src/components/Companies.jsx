import React from "react";
import company1 from "../assets/company1.png";
import company2 from "../assets/company2.png";
import company3 from "../assets/company3.png";
import company4 from "../assets/company4.png";
function Companies() {
  return (
    <div className="w-full bg-white py-[50px]">
      <div className="md:max-w-[1480px] m-auto  max-w-[600px]">
        <h1 className="text-center text-2xl font-bold text-[#536E96]">
          Trusted by over 10,000 students around the world
        </h1>
        <p className="text-center text-[#536E96] TEXT-XL">
          Leading University use our Company to Write their thesis
        </p>
        <div className="flex justify-center py-8 md:gap-8">
          <img src={company1} />
          <img src={company2} />
          <img src={company3} />
          <img src={company4} />
        </div>
      </div>
    </div>
  );
}

export default Companies;
