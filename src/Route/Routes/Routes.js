import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main/Main";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";

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