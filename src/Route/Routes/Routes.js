import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main/Main";
import Details from "../../Pages/Details/Details";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Premium from "../../Pages/Premium/Premium";
import Register from "../../Pages/Register/Register";
import PrivateRoute from "../PrivateRoutes/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element: <Home></Home>,
                loader: () => fetch('https://assignment10-backend-lake.vercel.app/courses'),
            },
            {
                path:'/category/:id',
                element: <Home></Home>,
                loader: ({params}) => fetch(`https://assignment10-backend-lake.vercel.app/category/${params.id}`),
            },
            {
                path:'/course/:id',
                element: <Details></Details>,
                loader: ({params}) => fetch(`https://assignment10-backend-lake.vercel.app/courses/${params.id}`),
            },
            {
                path:'/premium',
                element: <PrivateRoute><Premium></Premium></PrivateRoute>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
        ]
    },
    {
        path:'/*',
        element: 'This page not found'
    }
])