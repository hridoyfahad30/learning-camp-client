import React from "react";
import { FaCalendarAlt, FaCertificate, FaClipboardList } from "react-icons/fa";

const WhyChose = () => {
  return (
    <div className="my-12 md:my-28 mx-4 md:mx-14">
      <h1 className="text-3xl md:text-5xl font-semibold leading-snug ">
        Why Should You Choose <br />{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400 animate-pulse font-bold">
          LEARNING CAMP
        </span>
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-20 my-10">
        <div className="card w-96 bg-gradient-to-tr from-cyan-200 to-teal-200 hover:shadow-2xl">
          <div className="card-body space-y-4 shadow-2xl rounded-2xl">
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="bg-white rounded-full p-1 text-4xl" />
              <h2 className="text-2xl font-medium">Flexible Schedule</h2>
            </div>
            <p>
              Learning Camp is flexible with the course timing as we provide you
              with the freedom to set your own time once you purchase the
              course. You can continue your course from anywhere, anytime, in
              Learning Camp.
            </p>
          </div>
        </div>
        <div className="card w-96 bg-gradient-to-tr from-cyan-200 to-teal-200 md:scale-125 hover:shadow-2xl">
          <div className="card-body space-y-4 shadow-2xl rounded-2xl">
            <div className="flex items-center gap-2">
              <FaClipboardList className="bg-white rounded-full p-1 text-4xl" />
              <h2 className="text-2xl font-medium">Assessment Procedure</h2>
            </div>
            <p>
            You will be given assignments with clear and precise instruction in order to complete the course. You need to complete the assignments and submit them accordingly through the learning management system.
            </p>
          </div>
        </div>
        <div className="card w-96 bg-gradient-to-tr from-cyan-200 to-teal-200 hover:shadow-2xl">
          <div className="card-body space-y-4 shadow-2xl  rounded-2xl">
            <div className="flex items-center gap-2">
              <FaCertificate className="bg-white rounded-full p-1 text-4xl" />
              <h2 className="text-2xl font-medium">Certification</h2>
            </div>
            <p>
            You will be eligible for an accredited certificate from a renowned awarding body by fulfilling the course requirement. If you want to verify the certificate, you can do so through our website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChose;
