import { CON_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const ItemList = ({items, dummy}) => {
    console.log(dummy);
    console.log(items);

    const dispatch = useDispatch();

    const handleAddItem =(item)=>{
        //Dispatch an action
        dispatch(addItem(item));

        
    }


    return  (
    <div>
         
        {items.map((item=>
        <div 
        key = {item.card.info.id} className="p-2 m-2 border-b-2 border-gray-200 text-left flex justify-between">
          <div className="w-9/12 ">
            <div className="py-2">
                <span>{item.card.info.name}</span>
            <span> - ₹ {item.card.info.defaultPrice ? item.card.info.defaultPrice / 100 : item.card.info.price}</span>
            </div>
                <p className="text-xs">{item.card.info.description}</p>
                </div>
                <div className="w-3/12 p-4">
        
            <div className="absolute ">
           <button className="p-2 bg-white shadow-lg mx-16 rounded-lg font-extrabold" 
           onClick={()=> handleAddItem(item)}
           >
            Add +</button>
            </div>
            <img src={CON_URL+ item.card.info.imageId} className="w-full" />
            </div>
        </div>
    ))}
        
        </div>
)
}
export default ItemList;