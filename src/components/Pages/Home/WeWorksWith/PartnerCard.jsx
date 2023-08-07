import React from "react";

const PartnerCard = ({partner}) => {
  return (
    <div className="flex justify-center items-center">
      <img className="w-64 rounded-2xl" src={partner.logo} alt="" />
    </div>
  );
};

export default PartnerCard;