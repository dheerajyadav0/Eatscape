import { useContext } from "react";
import {CON_URL} from "../utils/constants";
import UserContext from "../utils/UserContext";
const RestaurantCard =(props) =>{
    const{restData}=props;
    const {loggedInUser} = useContext(UserContext);
    const {
      cloudinaryImageId  ,name,cuisines,avgRating , costForTwo,sla}=restData?.info;
    return(
    <div className="m-4 p-4 w-[200px] to-blue-300 shadow-lg rounded-lg cursor-pointer hover:bg-blue-500">
        <img className="rounded-lg" alt="logo" src={
              CON_URL+restData.info.
             cloudinaryImageId}
        />
       <h3 className="font-bold px=2 py=2 text-lg">{name}</h3>   
    
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.deliveryTime} minutes</h4>
      <h4>User : {loggedInUser}</h4>
    </div>
    );
  };

//higher order component

// input - RestaurantCard  ==> RestaurantCardPromoted
// export const withPromotedLabel =(RestaurantCard)=>{
//   return(props)=>{
//     return(
//     <div>
//       <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
//       <RestaurantCard{...props}/>
//     </div>
//     )
//   }
// }

  export default RestaurantCard;