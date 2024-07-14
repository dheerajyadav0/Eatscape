import { LOGO_URL } from "../utils/constants";
import { useState,useEffect , useContext} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Grocery from "./Grocery";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";




const Header = () =>{
  const [btnNameReact,setBtnNameReact]= useState("login");

  const onlineStatus = useOnlineStatus(); 

  const { loggedInUser} = useContext(UserContext);
  console.log(loggedInUser);

  //selector is nothing bt hook.incerse the item no. (subscribing the store)
  const cartItems = useSelector((store)=>store.cart.items)

  console.log("Header render");

  useEffect(()=>{
    console.log("useEffect called");
  },[]);
  
    return(
      <div className="flex justify-between bg-blue-100 shadow-lg m-2">
        <div className="logo-container">
        <img className="w-40" src= {LOGO_URL}/>
        </div>
        <div className="flex items-center "> 
        <ul className="flex p-4 m-4 ">
          <li className="px-4 shadow-lg border-x-4 border-y-2 border-spacing-[15px 50px]  py-4 m-4 rounded-lg cursor-pointer">
          Online Status : {onlineStatus ?"🟢" :"🔴" }
          </li>
        
        <li className= "px-4  m-4 shadow-lg border-x-4 border-y-2  border-spacing-[15px 50px]  py-2 rounded-lg cursor-pointer " >
          <Link to ="/"> Home</Link>
        </li>

        <li className="px-4  m-4 shadow-lg border-x-4 border-y-2 border-spacing-[15px 50px] py-2 rounded-lg cursor-pointer">
          <Link to ="/about">About us</Link>
        </li>

        <li className="px-4  m-4 shadow-lg border-x-4 border-y-2 border-spacing-[15px 50px] py-2 rounded-lg cursor-pointer">
        <Link to ="/contact">Contact Us</Link>
        </li>
        <li className="px-4  m-4 shadow-lg border-x-4 border-y-2 border-spacing-[15px 50px] py-2 rounded-lg cursor-pointer">
          <Link to ="/grocery">Grocery</Link>
        </li>
        <li className="px-4  m-4 shadow-lg border-x-4 border-y-2 border-spacing-[15px 50px] py-2 rounded-lg cursor-pointer font-bold text-xl">
          <Link to ="Cart/">Cart({cartItems.length})</Link>
        </li>
    
        <button className="log   m-4 px-4  shadow-lg border-x-4 border-y-2 border-spacing-[15px 50px] py-2 rounded-lg  cursor-pointer "
        onClick={()=>{
          btnNameReact==="login"?setBtnNameReact("logout"):setBtnNameReact("login");    
              }}>
                  {btnNameReact}
        </button>
        <li className=" px-4  m-4 shadow-lg border-x-4 border-y-2 border-spacing-[15px 50px] py-2 rounded-lg cursor-pointer">{loggedInUser}</li>
        </ul>
        </div>
      </div>  
    );
};

export default Header;