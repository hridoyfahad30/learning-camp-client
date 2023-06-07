import React from "react";
import { motion } from "framer-motion";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import cardimg from "../../../../../assets/sliderImage1.png";

const ProductCard = () => {
  return (
    <div>
      <motion.div
        className="container"
        whileHover={{ scale: 1.1, rotate: 2 }}
        whileTap={{ scale: 1.0, rotate: 0 }}
      >
        <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto hover:shadow-2xl hover:shadow-cyan-400">
          <figure>
            <img src={cardimg} alt="popular Course" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">GUITAR LESSONS FOR BEGINNERS</h2>
            <div className="card-actions justify-between my-4">
              <div className="">
                <Rating style={{ maxWidth: 150 }} value={3} readOnly />
              </div>
              <div className="badge badge-outline text-xl p-4"><strong>1345</strong>  <small>Students</small></div>
            </div>
            <div className="card-actions justify-end">
              <button className="btn bg-cyan-300 hover:bg-cyan-400 text-base">Buy Now</button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductCard;
