import React from "react";
import PartnerCard from "./PartnerCard";
import Marquee from "react-fast-marquee";

const WeWorksWith = () => {
  return (
    <div className="my-28">
      <h1 className="text-5xl font-bold leading-snug text-center my-2">
        We Work With
      </h1>
      <p className="text-center text-lg font-medium">
        Your privacy stays yours. We don’t sell your data or target you with
        ads.
      </p>
      <Marquee
      speed={30}>
        <div className="flex justify-between items-center">
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
        </div>
      </Marquee>
    </div>
  );
};

export default WeWorksWith;