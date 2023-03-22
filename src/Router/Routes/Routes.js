import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import About from "../../Pages/Home/About/About";
import Home from "../../Pages/Home/Home/Home";
import Services from "../../Pages/Home/Services/Services";





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
        ]
    }
])



export default router;