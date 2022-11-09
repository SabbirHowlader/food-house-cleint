import Blog from "../../Page/Blog/Blog";
import Checkout from "../../Page/Checkout/Checkout";
import Home from "../../Page/Home/Home/Home";
import Login from "../../Page/Login/Login";
import Service from "../../Page/Service/Service";
import SignUp from "../../Page/SignUp/SignUp";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main/Main");

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main></Main>,
        children: [
            {
                path:'/',
                element: <Home></Home>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/signup',
                element: <SignUp></SignUp>
            },
            {
                path:'/service',
                element: <Service></Service>
            },
            {
                path: '/checkout/:id',
                element: <Checkout></Checkout>,
                loader:({params}) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            }
        ]
    }
])

export default router;