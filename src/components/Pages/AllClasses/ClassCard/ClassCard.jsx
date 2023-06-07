import React from "react";
import cardimg from '../../../../assets/sliderImage5.png'

const ClassCard = () => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl hover:shadow-2xl hover:shadow-cyan-400 hover:scale-105 duration-300">
        <figure>
          <img
            src={cardimg}
            alt=""
          />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl font-bold">
            Flute Lesson
          </h2>
            <div className="badge bg-cyan-400 py-4 px-3 text-lg font-medium my-2">Fahad Ibne Hosain</div>
          <div className="card-actions justify-between">
            <div className="badge badge-outline text-xl p-4">23 Seats Left</div>
            <div className="badge badge-outline text-xl p-4">$34</div>
          </div>
          <button className="bg-cyan-300 rounded-xl py-3 mt-4 text-xl font-medium hover:bg-cyan-400 duration-300">Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
