import React from "react";
import PartnerCard from "./PartnerCard";
import Marquee from "react-fast-marquee";

const WeWorksWith = () => {

  const partners = [
    {id: 1, logo: "https://trainingtale.org/wp-content/uploads/2022/01/Group-26971-1.png"},
    {id: 2, logo: "https://trainingtale.org/wp-content/uploads/2022/01/Group-26972.png"},
    {id: 3, logo: "https://trainingtale.org/wp-content/uploads/2022/01/Group-26974-2.png"},
    {id: 4, logo: "https://trainingtale.org/wp-content/uploads/2022/01/Group-26973-1.png"},
    {id: 5, logo: "https://trainingtale.org/wp-content/uploads/2022/01/Group-26976-2.png"},
    {id: 6, logo: "https://trainingtale.org/wp-content/uploads/2022/01/Group-26975-1.png"},
    {id: 7, logo: "https://trainingtale.org/wp-content/uploads/2022/01/Group-26970-2.png"},
    {id: 8, logo: "https://trainingtale.org/wp-content/uploads/2022/01/Frame-20-2.png"},
  ]

  return (
    <div className="my-12 md:my-28">
      <h1 className="text-3xl md:text-5xl font-bold leading-snug text-center my-2">
        We Work With
      </h1>
      <p className="text-center text-lg font-medium">
        Your privacy stays yours. We don’t sell your data or target you with
        ads.
      </p>
      <Marquee
      speed={30}>
        <div className="flex justify-between items-center">
          {
            partners.map(partner => <PartnerCard key={partner.id} partner={partner} />)
          }
        </div>
      </Marquee>
    </div>
  );
};

export default WeWorksWith;