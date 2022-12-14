import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../Firebase.init/Firebase.init";
import Loading from "../SheredPage/Loading/Loading";


const RequireAuth = ({ children }) =>{
    const [user,loading] = useAuthState(auth);
    let location = useLocation();
    if(loading){
       return <Loading/>
    }
  
    if(!user){
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children
}

export default RequireAuth