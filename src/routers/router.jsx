import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import StartLearning from "../Pages/StartLearning";
import Tutorial from "../Pages/Tutorial";
import AboutUs from "../Pages/AboutUs";
import Layout from "../Layout/Layout";
import Login from "../components/Login";
import Register from "../components/Register";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home>  <h1>this is home</h1> </Home>
            },
            {
                path: '/learning',
                element: <StartLearning></StartLearning>
            },
            {
                path: '/tutorial',
                element: <Tutorial></Tutorial>
            },
            {
                path: '/about',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }


        ]


    },




])

export default router;