import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu=()=>{
    

    const { resId } = useParams();

    const dummy = "Dummy data";
    
    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(null);
    

   if( resInfo ===  null ) return
        <Shimmer/>;
      
    

        const {name,cloudinaryImageId,cuisines,costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
        const{itemCards}= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
        console.log(itemCards);

        const categories= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter
   (c=>c.card?.card?.["@type"]==
    'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
  )

            // console.log(categories);
    return  (
        <div className="text-center">
             <h1 className="font-bold my-10 text-2xl">{name}</h1> 
            <p className="font-bold text-lg">{cuisines.join(",")}-{costForTwoMessage}</p>

        {/* categories accordions */}
        {categories.map((category,index)=>(
         <RestaurantCategory key ={category?.card?.card.title}
         data ={category?.card?.card}
         showItems={index === showIndex ? true : false}
         setShowIndex={()=> setShowIndex(index)}
         dummy = {dummy} />
        )
        )}
        



            {/* <h2>Menu</h2>
            <ul>
          {itemCards.map((item)=> (
             <li key={item?.card?.info?.id}>
              {item?.card?.info?.name}-{"RS."}
              {item?.card?.info?.price /100 || item.card.info.defaultPrice / 100}
              </li>))}
            {/* <li>{itemCards[0]?.card?.info?.name}</li>
            <li>{itemCards[1]?.card?.info?.name}</li>
            <li>{itemCards[2]?.card?.info?.name}</li> */}
        {/* </ul>*/} 
        </div>
    );
};
export default RestaurantMenu;