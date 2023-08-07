import React from "react";

const About = () => {
  return (
    <div className="mx-4 md:mx-0">
      <div className="flex flex-col md:flex-row justify-center items-center gap-12 mx-auto my-12">
        <div className="">
          <img src="https://i.ibb.co/Qr49ZNv/about-06.png" alt="" />
        </div>
        <div className="md:w-4/12 space-y-4">
          <h6 className="bg-cyan-100 inline-block px-6 py-2 rounded-2xl text-lg font-semibold">
            About Learning Camp
          </h6>
          <h2 className="text-3xl font-bold">
            Welcome to Learning Camp for your skills with best Online courses.
          </h2>
          <p className="text-lg text-gray-500">
            <strong>Learning Camp</strong> educational platform ipsum dolor sit
            amet consectetur adipisicing elit.
          </p>
          <p className="text-lg text-gray-500">
            Nam inventore praesentium alias incidunt! Veritatis, necessitatibus
            fuga dolore tenetur, beatae suscipit fugit est ea perspiciatis quo
            provident nisi dolor similique architecto nihil.
          </p>
          <button className="bg-cyan-300 px-6 py-2 rounded-2xl text-xl font-medium hover:bg-cyan-200 duration-300">
            Start Learning For Free
          </button>
        </div>
      </div>
      <div className="bg-gradient-to-r from-cyan-500 to-teal-500 mt-12 py-24 px-20 md:gap-12 space-y-6 flex flex-col md:flex-row text-center">
        <div className="md:w-3/12 ">
          <h1 className="text-5xl font-semibold">
            Scholarship Programs
          </h1>
        </div>
        <div className="md:w-7/12">
          <p className="">
            Apply for Admission in Post Graduate Diploma. Application Deadline:
            26th September 2023 · Undergraduate & Graduate Admission: Fall 2023
            Semester · 20% Waiver on ...
          </p>
        </div>
        <div className="md:w-12/12 lg:w-3/12">
          <button className=" bg-cyan-300 px-6 py-2 rounded-2xl hover:bg-cyan-200 hover:scale-110 duration-300 text-xl font-semibold hover:shadow-2xl">
            Financial Aid
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
