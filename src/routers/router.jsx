import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import StartLearning from "../Pages/StartLearning";
import Tutorial from "../Pages/Tutorial";
import AboutUs from "../Pages/AboutUs";
import Layout from "../Layout/Layout";
import Login from "../components/Login";
import Register from "../components/Register";
import Lessons from "../components/Lessons";
import PrivatRoute from "./PrivatRoute";
import MyProfile from "../Pages/MyProfile";
import UpdateProfile from "../components/UpdateProfile";

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
                element: <StartLearning></StartLearning>,
                loader: () => {
                    return fetch("/Database/allData.json");
                }
            },
            {
                path: '/tutorial',
                element: <PrivatRoute>
                            <Tutorial></Tutorial>
                         </PrivatRoute>
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
            },
            {
                path: '/lesson/:id',
                element: <PrivatRoute>
                            <Lessons></Lessons>,
                        </PrivatRoute>,
                loader: () => {
                    return fetch("/Database/allData.json");
                }
            },
            {
                path: '/profile',
                element: <PrivatRoute>
                             <MyProfile></MyProfile>
                        </PrivatRoute>
            },
            {
                path:'/updateProfile',
                element: <UpdateProfile></UpdateProfile>
            }
        ]


    },




])

export default router;