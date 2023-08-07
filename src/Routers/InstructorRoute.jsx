import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { getUserProfile } from "../API/allAPI";
import useAuth from "../hooks/useAuth";


const InstructorRoute = ({children}) => {

    const {user, loading, logOut} = useAuth();

    if(loading){
        return 
    }

    const [mUserLoading, setMUserLoading] =useState(true)

    const [mUser, setMUser] = useState([]);
    
    const location = useLocation();
  useEffect(()=>{
    setMUserLoading(true)
    getUserProfile(user?.email)
    .then(data => {
      setMUser(data)
      setMUserLoading(false)
    })

  },[])

  if(mUserLoading){
    return
  }
    

    if( mUser[0]?.role === "instructor"){
        return children;
    }
    logOut()
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default InstructorRoute;