import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import AddService from "../../Pages/AddService/AddService";
import About from "../../Pages/Home/About/About";
import Home from "../../Pages/Home/Home/Home";
import Services from "../../Pages/Home/Services/Services";
import Testimonial from "../../Pages/Home/Testimonial/Testimonial";
import Login from "../../Pages/Login/Login";
import Orders from "../../Pages/Orders/Orders";
import ServiceDetails from "../../Pages/ServiceDetails/ServiceDetails";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";





const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/about',
                element: <About></About>,
            },
            {
                path: '/services',
                element: <Services></Services>,
            },
            {
                path: 'services/:id',
                element: <ServiceDetails></ServiceDetails>,
                loader: ({ params }) => fetch(`http://localhost:4000/services/${params.id}`)
            },
            {
                path: '/addservice/:id',
                element: <PrivateRoute><AddService></AddService></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:4000/services/${params.id}`)
            },
            {
                path: '/orders',
                element: <PrivateRoute><Orders></Orders></PrivateRoute>,
            },
            {
                path: '/testimonial',
                element: <Testimonial></Testimonial>
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
        ]
    }
])


export default router;