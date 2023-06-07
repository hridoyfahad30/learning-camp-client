import React from "react";
import instructor from '../../../../../assets/sliderImage2.png'

const InstructorCard = () => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl mx-auto hover:scale-105 duration-300 hover:shadow-2xl hover:shadow-cyan-400">
        <figure>
          <img
            src={instructor}
            alt=""
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            Fahad Ibne Hossain
            <div className="badge bg-cyan-400">NEW</div>
          </h2>
          <div className="card-actions justify-end">
            <div className="badge badge-outline text-lg p-4 my-4"><strong>23243</strong> <small>Students</small></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
