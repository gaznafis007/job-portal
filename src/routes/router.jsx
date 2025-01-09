import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import SignIn from "../Pages/SignIn/SignIn";
import Register from "../Pages/Register/Register";
import AllJobs from "../Pages/AllJobs/AllJobs";
import PrivateRoute from "../Pages/Private/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children:[
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/signin',
                element: <SignIn/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/allJob',
                element: <PrivateRoute><AllJobs/></PrivateRoute>
            }
        ]
    }
])