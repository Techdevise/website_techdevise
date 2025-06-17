import React from "react";
import "../styles/components/TechDeviseAutomation.css";
import chatbotimage from "../assets/chatbotimage.png";

const TechDeviseAutomation = () => {
  return (
    <div className="tech_automation w-full max-w-[1620px] mx-auto mt-10 bg-white rounded-xl shadow-md flex flex-col lg:flex-row items-center justify-between p-4 sm:p-6 md:p-10 space-y-8 lg:space-y-0">
      <div className="w-full lg:w-1/2 text-left">
        <h2 className="automation_title text-[24px] sm:text-[28px] md:text-[32px] lg:text-[48px] font-extrabold font-Montserrat text-black mb-6 leading-tight text-left lg:text-left md:text-center">
          Tech Devise: Developing User
          <span className="hidden md:inline">
            <br />
          </span>
          friendly and Flexible automation
        </h2>
        <p className="text-black font-Montserrat text-[16px] sm:text-[17px] md:text-[18px] leading-relaxed max-w-full">
          <strong>At Tech Devise,</strong> we have dedicated professionals who
          are specialists in Robot and Control systems. We offer you Robot Based
          Control system to our clients. Be it the automotive industry, or
          consumer goods, we are ready to customize our product and offer you
          the best that will amaze you for sure Whether you already have an
          automation system ready and just need us to update / modify, or you
          need a completely new and customized control system, we are always
          ready for the challenge. We are capable enough to build new and
          customized Robot Systems or we can build systems utilizing your old
          Robots to meet your requirement in any sector. We can even work on
          your old Robot to make it work efficiently, fast, and increase your
          pay back amount as well. In case you need to port your system to a
          remote place or to other cities or countries, we are always ready to
          do it for you.
          <br />
          <br />
          Since we have dedicated and experienced people working with us, we are
          sure to not only to fulfill your requirements but also build a nice
          relationship and understanding with you. Understanding your need is
          pretty much important in this field and we do the same with our
          clients.
          <br />
          <br />
          Be it a large project or a small one, you can always expect us to
          deliver cost-effective and high-performance solutions.
        </p>
      </div>
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <img
          src={chatbotimage}
          alt="Automation Robot"
          className="w-[250px] sm:w-[350px] md:w-[450px] lg:w-[500px] xl:w-[600px] h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default TechDeviseAutomation;
