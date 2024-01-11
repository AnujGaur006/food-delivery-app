import React, {Suspense, lazy} from "react";
import ReactDOM from "react-dom/client";
import Header from "./component/header";
import Body from "./component/body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import AboutUs from "./component/aboutUs";
import ContactUs from "./component/contactUs";
import Error from "./component/error";
import RestaurantMenu from "./component/restaurantMenu";

const Grocery = lazy(() => import("./component/grocery"));

const AppLayout = () => (
    <div className="app">
        <Header></Header>
        <Outlet/>
    </div>
);

const AppRouter = createBrowserRouter([
    {
        path : "/",
        element : <AppLayout/>,
        children : [
            {
                path : "/",
                element : <Body/>
            },
            {
                path : "/aboutus",
                element : <AboutUs/>
            },
            {
                path : "/contactus",
                element : <ContactUs/>
            },
            {
                path : "/grocery",
                element : <Suspense fallback="<div>Loading...</div"><Grocery/></Suspense>
            },
            {
                path: "/restaurant/:resId",
                element : <RestaurantMenu/>
            }
        ],
        errorElement : <Error/>
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter}/>);

