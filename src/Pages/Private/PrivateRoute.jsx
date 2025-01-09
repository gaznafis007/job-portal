import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const {auth} = useSelector((state) => state);
    if(auth?.accessToken){
        return {children}
    }
    return (
        <Navigate to={'/signin'}>
            
        </Navigate>
    );
};

export default PrivateRoute;