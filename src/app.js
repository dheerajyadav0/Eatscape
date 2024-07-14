import React,{ lazy,Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Header from "./components/header.js";
import Body from "./components/Body.js";
// import RestaurantCard from "./components/reastaurantCard.js";

import {createBrowserRouter,RouterProvider,Outlet} from "react-router-dom";
import About from "./components/About.js";
import Contact from "./components/Contact.js";
import Error from "./components/Error.js";
import RestaurantMenu from "./components/RestaurantMenu.js";
import UserContext from "./utils/UserContext.js";
import { Provider } from "react-redux";
import appStore from "./utils/appStore.js";
import Cart from "./components/Cart.js";


//chunking
//code splitting
//lazy loading / ondemand loading

    const Grocery = lazy(()=>import("./components/Grocery.js"));

const AppLayout = () => {

    //authentication
    const [userInfo,setuserInfo] = useState();
    useEffect(()=>{
        //MAKE An API call and send username and password
        const data = {
            name:"Dheeraj",
        };
        setuserInfo(data.name);

    }, [])

    return (
    <Provider store={appStore}>

    
        <UserContext.Provider value={{loggedInUser:userInfo,setuserInfo}}>
       <div className="app">
        <Header/>
       <Outlet />
       </div>
       </UserContext.Provider>
       </Provider>
    );
};

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>,
            },
            {
                path:"/about",
                element:<About/>,
            },
            {
                path:"/contact",
                element:<Contact/>,
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<h1>Loading.....</h1>}><Grocery/></Suspense>,
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu/>,
            },
            {
                path: "/cart",
                element: <Cart/>,
            }
        ],
        errorElement:<Error/>,
    },
 
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);

