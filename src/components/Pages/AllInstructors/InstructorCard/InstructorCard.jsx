import React from "react";

const InstructorCard = ({instructor}) => {
  const {name, photo, email, approved} = instructor;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl hover:shadow-2xl hover:shadow-cyan-200 mx-auto">
        <figure>
          <img className="min-h-60 max-h-60 min-w-full" src={photo} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{email}</p>
          <div className="flex justify-between items-center mx-4">
          <div className="badge badge-outline">Total {approved} Classes</div>
          <button className="bg-cyan-300 px-6 py-3 rounded-lg text-lg font-semibold hover:bg-cyan-200 duration-300">See All Classes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
