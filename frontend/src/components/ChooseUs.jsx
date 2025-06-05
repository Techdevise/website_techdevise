import React from "react";
import "../styles/components/ChooseUs.css";
import ITDevelopmentTeam from "../assets/ITDevelopmentTeam.png";

const ChooseUs = () => {
  return (
    <div className="choose_us w-full h-full mt-10 flex flex-col items-center justify-center text-center bg-[#FAFAFA] px-4 md:px-10 mt-10">
      <h2 className="text-[32px] md:text-[48px] font-extrabold font-Montserrat text-black max-w-[90%] md:max-w-[974px]">
        Why Choose Us
      </h2>
      <p className="text-[16px] md:text-[18px] font-Montserrat text-black mt-2 max-w-full md:max-w-[60%]">
        Our team focuses mainly on scalability, secure, agile, and high performance python development. This not only helps us to meet client’s requirement but also helps in producing output for our clients.
      </p>

      <div className="w-full max-w-[1620px] h-auto mt-10">
        <img
          src={ITDevelopmentTeam}
          alt="IT Development Team"
          className="w-full h-auto object-cover rounded"
        />
      </div>
    </div>
  );
};

export default ChooseUs;
