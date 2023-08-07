import React, { useEffect, useState } from "react";
import InstructorCard from "./InstructorCard/InstructorCard";
import { getUser } from "../../../../API/allAPI";
import { GridLoader } from "react-spinners";

const PopularInstructor = () => {

  const [users, setUsers] = useState([]);

  const instructors = users.filter(user => user.role === "instructor");

  useEffect(()=>{
    getUser()
    .then(data => {
      setUsers(data);
    })

  },[])
  return (
    <div className="my-12 md:my-28 mx-4 md:mx-14">
      <h1 className="text-3xl md:text-5xl font-semibold leading-snug ">
        Meet Our <br />{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400 animate-pulse font-bold">
          Popular Instructor
        </span>
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-12 my-12">
        {instructors.length == 0 ? 
          <GridLoader
            color="#0ee9ff"
            margin={10}
            size={20}
            speedMultiplier={2}
            width={0}
          />
          :
          instructors.slice(0, 6).map(instructor => <InstructorCard key={instructor._id} instructor={instructor} />)
        }        
      </div>
    </div>
  );
};

export default PopularInstructor;
