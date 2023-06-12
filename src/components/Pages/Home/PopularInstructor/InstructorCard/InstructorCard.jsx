import React from "react";
import instructor from '../../../../../assets/sliderImage2.png'

const InstructorCard = ({instructor}) => {
  const {name, email, photo, approved } = instructor;
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl mx-auto hover:scale-105 duration-300 hover:shadow-2xl hover:shadow-cyan-400">
        <figure>
          <img
            className="min-h-60 max-h-60 min-w-full"
            src={photo}
            alt=""
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
          </h2>
          <div className="card-actions justify-end">
            <div className="badge badge-outline text-lg p-4 my-4"><span className="mr-1 font-semibold">234</span>Students</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
