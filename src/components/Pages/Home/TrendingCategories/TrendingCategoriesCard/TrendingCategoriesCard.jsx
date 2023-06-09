import React from "react";
import { motion } from "framer-motion";
import { FaDrum } from "react-icons/fa";

const TrendingCategoriesCard = () => {
  return (
    <div>
      <motion.div
        className="container"
        whileHover={{ scale: 1.1, rotate: 0 }}
        whileTap={{ scale: 1.0, rotate: 0 }}
      >
        <div className="card w-64 bg-base-100 shadow-xl mx-auto my-8 hover:shadow-2xl hover:shadow-cyan-400">
          <div className="p-8 flex flex-col items-center justify-center space-y-4">
            <FaDrum className="text-6xl" />
            <h2 className="card-title">Drum</h2>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TrendingCategoriesCard;
