import { useContext, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getUserProfile } from "../API/allAPI";
import useAuth from "../hooks/useAuth";


const InstructorRoute = ({children}) => {

    const {user, loading, logOut} = useAuth();

    if(loading){
        return <div className="col-span-3 my-8">
        <button className="btn w-full bg-green-600 text-white text-xl text-center loading">loading</button>
      </div>
    }

    const location = useLocation();

    const [mUser, setMUser] = useState([]);
    console.log(mUser[0]?.role);

  useEffect(()=>{
    getUserProfile(user?.email)
    .then(data => {
      setMUser(data)
    })

  },[])

    

    if(user?.email && mUser[0]?.role === "instructor" || mUser[0]?.role === "admin" ){
        return children;
    }
    logOut()
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default InstructorRoute;