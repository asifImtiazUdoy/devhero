import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main/Main";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        loader: () => fetch('https://assignment10-backend-lake.vercel.app/courses'),
        children:[
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