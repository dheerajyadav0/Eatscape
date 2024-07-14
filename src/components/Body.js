import RestaurantCard ,{ withPromotedLabel } from "./reastaurantCard";
import reslist from "../utils/mocdata";
import {useEffect, useState , useContext} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext  from "../utils/UserContext";

const Body  =()=>
  {
      //  local state variable- superpowerful variable
      const [Listofrestro,setListofrestro] = useState([]);
      const [searchText, setseachText] = useState('');
  const [filterrestro, setfilterrestro] = useState([]);

  // const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  //jo bhi hum square bracket mai pass krenge vo iski default value ban jayegi
      //normal js varaiable 
      // let Listofrestro;
       let Listofrestro2  =[ {
          "info": {
         "id": "407809",
           "name": "Pizza Hut",
          "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
          "locality": "Agra Cantt",
         "areaName": "Agra Cantt",
          "costForTwo": "₹300 for two",
                      "cuisines": [
   "Pizzas"
           ],
          "avgRating": 4.2,
           "sla": {
              "deliveryTime": 38,         },
  
  },},
  {
       "info": {
       "id": "407808",
       "name": "lapinoz",
       "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
       "locality": "Agra Cantt",
       "areaName": "Agra Cantt",
       "costForTwo": "₹300 for two",
       "cuisines": [
         "Pizzas"
       ],
       "avgRating": 3.8,
       "sla": {
           "deliveryTime": 38,
   },

},},
{
   "info": {
  "id": "407807",
       "name": "burgersingh",
   "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
   "locality": "Agra Cantt",
   "areaName": "Agra Cantt",
   "costForTwo": "₹300 for two",
   "cuisines": [
     "Pizzas"
   ],
   "avgRating": 4.5,
   "sla": {
       "deliveryTime": 38,
},
},},
];
// const [error, setError] = useState(null);
const fetchdata = async () => {
  console.log("Fetching data...");
  try {
    const response = await fetch(
      " https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const json = await response.json();
    console.log(json);

    // Accessing nested properties safely
  console.log( json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
  );
  setListofrestro( json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   setfilterrestro(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
useEffect(() => {
  fetchdata();
}, []);


     //condition rendering
//        if(Listofrestro.length==0)
//         {
// return <Shimmer/>;
//         }

  const onlineStatus = useOnlineStatus();
  
  if(onlineStatus === false)return (
  
  <h1>
    Looks Like you are Offline!!!!!
    </h1>
    );

    const { loggedInUser , setuserInfo} = useContext(UserContext);


 return   Listofrestro.length===0?(<Shimmer/>) :( 
            <div className="body ">
               <div className="filter flex">
                <div className="m-4 p-4 flex">
                  <input  className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm" type="text" aria-label="Filter projects" placeholder="Resto name..... " 
                    value={searchText}
                    onChange={(e) => {
                      setseachText(e.target.value);
                    }}
                  />
                  <button className="  px-4 py-2 bg-green-100 m-4 rounded-lg hover:bg-green-300"
                   onClick={() => {
                    //filter the restro cards and update the ui
                    // search text
                    console.log(searchText);
                    const filterlist = Listofrestro.filter((res) =>
                      res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );
                    setfilterrestro(filterlist);
                  }}>
                    search</button>
                  
                </div>

                <div className=" flex items-center m-4 p-4">
                <button className="px-8 py-2 bg-gray-200 rounded-2xl flex hover:gray hover:bg-gray-400" onClick={() => {
                    //filter logic
                     const filterli=Listofrestro.filter((res) => res.info.avgRating >4);
                    //  console.log(Listofrestro);
                    setListofrestro(filterli);
              }}>Top-rated-Restraunts
              </button>
              </div> 

               <div className=" flex items-center m-4 p-4">
                <label>Username :</label>
                <input className="border border-black p-2" 
                value={loggedInUser}
                onChange={(e) => setuserInfo(e.target.value)}
                />
               </div>


            
             </div> 
             <div className=" flex flex-wrap"> 
              {/* #restro card component (whenever we r using a stuff frequently we make it  a fuction i.e container)*/}
              {/* prop are just like arguments to ur function */}
             {
                filterrestro &&
                filterrestro.map(restraunt=>(<Link key={restraunt.info.id} to={"/restaurant/"+ restraunt.info.id}
                >
                  
                  {

                    // restaurant.data.promoted ?  (
                    //    <RestaurantCardPromoted/>  ) : (
                       <RestaurantCard   restData ={restraunt}/> 

                  
                  }
                  
                  </Link> ))
                  }
                 
                  

              
           
              
              
              
          </div>
             </div>
      
      );
  };
  export default Body;