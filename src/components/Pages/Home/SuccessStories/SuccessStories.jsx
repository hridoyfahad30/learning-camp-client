import React from "react";
import ReactPlayer from "react-player";

const SuccessStories = () => {
  return (
    <div className="my-12 md:my-28 mx-4 md:mx-14">
      <h1 className="text-3xl md:text-5xl font-semibold leading-snug text-center">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400 animate-pulse font-bold">
          Success Stories
        </span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        
          <iframe
            className="w-96 2xl:w-[500px] h-64 2xl:h-[300px] rounded-2xl mx-auto my-12 p-1 border-2 border-cyan-500 bg-cyan-100 shadow-2xl"
            src="https://www.youtube.com/embed/j3CeZ8vACpM"
            title="Create a popup for website using Vanilla JavaScript"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        
        <iframe className="w-96 2xl:w-[500px] h-64 2xl:h-[300px] rounded-2xl mx-auto my-12 p-1 border-2 border-cyan-500 bg-cyan-100 shadow-2xl" src="https://www.youtube.com/embed/qpZbRUEE_Dc" title="Day In The Life of a Network Analyst | NOC" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        
        <iframe className="w-96 2xl:w-[500px] h-64 2xl:h-[300px] rounded-2xl mx-auto my-12 p-1 border-2 border-cyan-500 bg-cyan-100 shadow-2xl" src="https://www.youtube.com/embed/PVubvo6H8Oc" title="A DAY (NIGHT) in the LIFE of a NOC ENGINEER!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        
      </div>
    </div>
  );
};

export default SuccessStories;
