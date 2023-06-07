import React from "react";

const InstructorCard = () => {
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl hover:shadow-2xl hover:shadow-cyan-400">
        <figure>
          <img src="https://i.ibb.co/4s0PF4k/image.png" alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Daniel Knox</h2>
          <p>danielknox@gmail.com</p>
          <div className="flex justify-between items-center mx-4">
          <div className="badge badge-outline">Total 43 Classes</div>
          <button className="bg-cyan-300 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-cyan-400 duration-300">See Classes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
