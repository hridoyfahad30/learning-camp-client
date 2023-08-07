import React from "react";
import { motion } from "framer-motion";

const SliderCard = ({ sliderImage }) => {
  return (
    <div className="flex items-center justify-center">
      <img
        className="w-full h-[60vh] md:min-h-[75vh] brightness-[0.3]"
        src={sliderImage}
        alt=""
      />
      <div className="absolute z-30 md:w-3/4 text-white space-y-4 md:space-y-8 px-4">
        <h1 className="text-2xl md:text-6xl font-medium leading-tight mt-32">
          Get Ready to Excel <br /> in Your Online Learning <br /> Today with{" "}
          {""}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400 animate-pulse">
            LEARNING CAMP
          </span>
        </h1>
        <p className="text-xl">
          If you think about looking for high-quality online courses, you have
          come to the right place! <br /> So, put away your worries and start
          learning with LEARNING CAMP
        </p>
        <motion.div
          whileHover={{ scale: 1.0, rotate: 1 }}
          whileTap={{
            scale: 1.0,
            rotate: -8,
          }}
        >
            <button className="bg-cyan-300 text-black px-8 py-4 rounded-lg text-2xl font-semibold hover:bg-cyan-200">
              Explore More
            </button>
        </motion.div>
      </div>
    </div>
  );
};

export default SliderCard;
