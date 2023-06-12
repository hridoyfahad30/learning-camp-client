import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const PrivateRoute = ({children}) => {

    const {user, loading} = useAuth();

    if(loading){
        return <div className="col-span-3 my-8">
        <button className="btn w-full bg-green-600 text-white text-xl text-center loading">loading</button>
      </div>
    }

    const location = useLocation();


    

    if(user?.email){
        return children;
    }

    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRoute;