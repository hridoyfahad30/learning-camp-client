import React from "react";

const PartnerCard = () => {
  return (
    <div>
      <div className="card w-64 bg-base-100 shadow-xl my-12 mx-10 hover:scale-[105%] duration-300">
        <div className="p-8 flex flex-col items-center justify-center space-y-4">
          <img className="w-24" src="https://i.ibb.co/NK9JTJ0/image.png" alt="" />
          <h2 className="card-title">Inded</h2>
        </div>
      </div>
    </div>
  );
};

export default PartnerCard;