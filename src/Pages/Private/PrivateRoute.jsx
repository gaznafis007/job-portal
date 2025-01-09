/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {auth} = useSelector((state) => state);
    console.log(auth)
    if(auth?.accessToken){
        return children
    }
    return (
        <Navigate to={'/signin'} replace>
        </Navigate>
    );
};

export default PrivateRoute;