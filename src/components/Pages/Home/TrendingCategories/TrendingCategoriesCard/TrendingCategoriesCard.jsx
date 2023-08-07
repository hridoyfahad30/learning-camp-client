import React from "react";
import { motion } from "framer-motion";
import { FaDrum } from "react-icons/fa";

const TrendingCategoriesCard = ({category}) => {

  return (
    <div>
      <motion.div
        className="container"
        whileHover={{ scale: 1.1, rotate: 0 }}
        whileTap={{ scale: 1.0, rotate: 0 }}
      >
        <div className="card w-72 h-48 bg-base-100 shadow-xl mx-auto my-8 hover:shadow-2xl hover:shadow-cyan-200 flex justify-center items-center">
          <div className="p-8 flex flex-col items-center justify-center space-y-4">
            <img className="w-20" src={category.logo} alt="" />
            <h2 className="card-title">{category.category}</h2>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TrendingCategoriesCard;
