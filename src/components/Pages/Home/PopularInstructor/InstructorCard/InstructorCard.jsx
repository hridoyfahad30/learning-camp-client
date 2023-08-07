import React from "react";

const InstructorCard = ({instructor}) => {
  const {name, email, photo, approved } = instructor;
  return (
    <div>
      <div className="w-96 h-48 rounded-2xl bg-base-100 shadow-xl mx-auto duration-300 hover:shadow-2xl hover:shadow-cyan-200 flex group overflow-hidden hover:-translate-y-2">
        <figure>
          <img
            className="h-full min-w-full rounded-2xl group-hover:scale-110 duration-300"
            src={photo}
            alt=""
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title group-hover:scale-110 duration-300">
            {name}
          </h2>
          <div className="card-actions justify-start">
            <div className="badge badge-outline text-lg p-4 my-4"><span className="mr-1 font-semibold">234</span>Students</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
