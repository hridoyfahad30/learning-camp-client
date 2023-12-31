import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'
import { getUserProfile, storeSelectedClasses } from "../../../../../API/allAPI";
import { Link } from "react-router-dom";
import useAuth from "../../../../../hooks/useAuth";

const ProductCard = ({singleClass}) => {
  const {user, loading} = useAuth();
    if(loading){
      return
    }

  const [mUser, setMUser] = useState([]);

  useEffect(()=>{
    getUserProfile(user?.email)
    .then(data => setMUser(data));
  },[])

  const {_id, classImage, className, totalStudents} = singleClass;

  const handleSelectClasses = (_id) => {
    storeSelectedClasses(_id)
  }

  return (
    <div>
      <motion.div
        className="container"
        whileHover={{ scale: 1.05, rotate: 0.8 }}
        whileTap={{ scale: 1.0, rotate: 0 }}
      >
        <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto hover:shadow-2xl hover:shadow-cyan-300">
          <figure>
            <img className="max-h-56 w-full" src={classImage} alt="popular Course" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{className}</h2>
            <div className="card-actions justify-between my-4">
              <div className="">
                <Rating style={{ maxWidth: 150 }} value={3} readOnly />
              </div>
              <div className="badge badge-outline text-xl p-4"><strong className="mr-1">{totalStudents? totalStudents : "0"}</strong>  <small>Students</small></div>
            </div>
            <div className="card-actions justify-end">
              <Link to='/classes' onClick={()=>{handleSelectClasses(_id)}}  disabled={mUser[0]?.role === "admin" || mUser[0]?.role === "instructor" }  className="btn bg-cyan-300 hover:bg-cyan-200 text-base">Select Class</Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductCard;
