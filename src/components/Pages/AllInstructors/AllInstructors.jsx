import React, { useEffect, useState } from "react";
import InstructorCard from "./InstructorCard/InstructorCard";
import { getUser } from "../../../API/allAPI";
import { GridLoader } from "react-spinners";

const AllInstructors = () => {

  const [users, setUsers] = useState([]);

  const instructors = users.filter(user => user.role === "instructor");

  useEffect(()=>{
    getUser()
    .then(data => {
      setUsers(data);
    })

  },[])

  return (
    <div className="mt-12 mb-28">
        <h1 className="text-5xl font-semibold leading-snug ">
        Meet Our {" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400 animate-pulse font-bold">
          All Instructors
        </span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 my-12">
        {instructors.length == 0 ? 
          <GridLoader
            color="#0ee9ff"
            margin={10}
            size={20}
            speedMultiplier={2}
            width={0}
          />
          :
          instructors.map(instructor => <InstructorCard key={instructor._id} instructor={instructor} /> )
        }
        
      </div>
    </div>
  );
};

export default AllInstructors;
