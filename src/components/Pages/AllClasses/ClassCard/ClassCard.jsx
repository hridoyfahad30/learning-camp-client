import React, { useEffect, useState } from "react";
import { addSelectClass, getUserProfile } from "../../../../API/allAPI";
import useAuth from "../../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ClassCard = ({singleClass}) => {

  const {classImage, className, instructorName, availableSeats, price} = singleClass;

  const {user, loading} = useAuth();
    if(loading){
      return
    }

  const [mUser, setMUser] = useState([]);
  const navigate = useNavigate()

  useEffect(()=>{
    getUserProfile(user?.email)
    .then(data => setMUser(data));
  },[]);

  const handleSelectClass = (singleClass) => {
    const classInfo = {selectClass_id: singleClass._id, classImage: singleClass.classImage, className: singleClass.className, price: singleClass.price, paymentStatus: "unpaid", email: user?.email}

    if(!user){
      return navigate('/login')
    }

    addSelectClass(classInfo)
    .then(data => {
      console.log(data)
      if(data.insertedId){
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Class is selected & Saved to My Selected Class',
          showConfirmButton: false,
          timer: 4000
        })
      }
    })
  }

  return (
    <div>
      <div className={availableSeats == 0 || mUser[0]?.role === "admin" || mUser[0]?.role === "instructor"? "card w-96 bg-red-500 shadow-xl hover:shadow-2xl hover:shadow-red-400 hover:scale-105 duration-300" :"card w-96 bg-base-100 shadow-xl hover:cyan-2xl hover:shadow-cyan-400 hover:scale-105 duration-300"}>
        <figure>
          <img
            className="max-h-56 w-full"
            src={classImage}
            alt=""
          />
        </figure>
        <div className="card-body">
          <h2 className="text-2xl font-bold">
            {className}
          </h2>
            <div className="badge bg-cyan-400 py-4 px-3 text-lg font-medium my-2">{instructorName}</div>
          <div className="card-actions justify-between">
            <div className="badge badge-outline text-xl p-4"><span className="mr-1 font-bold">{availableSeats}</span> Seats Left</div>
            <div className="badge badge-outline text-xl font-semibold p-4">${price}</div>
          </div>
          <button onClick={()=>{handleSelectClass(singleClass)}} disabled={availableSeats === 0 || mUser[0]?.role === "admin" || mUser[0]?.role === "instructor" } className="bg-cyan-300 rounded-xl py-3 mt-4 text-xl font-medium hover:bg-cyan-400 duration-300 disabled:bg-slate-300 disabled:text-slate-400">Select Class</button>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
